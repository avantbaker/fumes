import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

import SignUpForm from './SignUpForm.component';
import LoginForm from './LoginForm.component';

import Tabs from './Tabs.component';
import {updateUser} from "../../actions/CurrentUserActions";


// auth/user-not-found
// auth/wrong-password
// auth/invalid-email

class AuthForm extends Component {

    constructor(props) {
        super(props);
        const { firebase, navigation, updateCurrentUser } = props;

        this.errorStates = {
            'auth/user-not-found': 'User doesn\'t seem to exist',
            'auth/wrong-password': 'Password is incorrect',
            'auth/invalid-email': 'Email is not valid'
        };

        this.updateIndex = this.updateIndex.bind(this);

        this.state = {
            newUser: null,
            selectedIndex: 0,
            // requirements:
            // buttons need to be in correct order
            // name prop and component are required
            buttons: [
                {
                    name: 'Login',
                    component: LoginForm,
                    onSubmit: (values) => {
                        firebase
                            .login(values)
                            .then(({ user }) => {
                               updateCurrentUser(user);
                               navigation.navigate('Main');
                            })
                            .catch((error) => {
                                this.setState({ error: { code: error.code, screen: 'login' }})
                            });
                    }
                },
                {
                    name: 'Sign Up',
                    component: SignUpForm,
                    onSubmit: (values) => {
                        firebase
                            .createUser(values)
                            .then((response) => {
                                this.setState({ newUser: response.email });
                                this.updateIndex(0);
                            })
                            .catch((error) => {
                                this.setState({ error: { code: error.code, screen: 'signup' }});
                            });
                    }
                }
            ]
        };


    }

    resetForm(screen) {
        if ( this.state.error || this.state.newUser ) {
            this.setState({
                error: {
                    code: '',
                    screen
                },
                newUser: null
            });
        }
    }

    updateIndex(selectedIndex) {
        this.setState({ selectedIndex });
    }

    renderForm(selectedIndex) {

        const { buttons } = this.state;
        const Component = buttons[selectedIndex].component;

        return (
            <Component
                {...this.props}
                onSubmit={buttons[selectedIndex].onSubmit}
                parentState={{ ...this.state, errorStates: this.errorStates }}
                resetForm={this.resetForm.bind(this)}
            />
        );

    }

    render() {
        const { selectedIndex, buttons } = this.state;

        const {
            containerStyle,
            innerBorderStyle,
            buttonStyle,
            selectedButtonStyle,
            selectedTextStyle,
            textStyle
        } = styles;

        return(
            <View style={this.props.style}>
                <Tabs
                    buttons={buttons}
                    activeTab={selectedIndex}
                    containerStyle={containerStyle}
                    innerBorderStyle={innerBorderStyle}
                    buttonStyle={buttonStyle}
                    selectedButtonStyle={selectedButtonStyle}
                    selectedTextStyle={selectedTextStyle}
                    textStyle={textStyle}
                    updateActiveTab={this.updateIndex}
                />
                <View>
                    { this.renderForm(selectedIndex) }
                </View>
            </View>
        )
    }
}

export default compose(
   firebaseConnect(),
   connect(
        // mapStateToProps
        ({ firebase: { auth } }) => ({ auth }),
        // mapDispatchToProps
        (dispatch) => ({
            updateCurrentUser: (user) => dispatch(updateUser(user))
        })
   )
)(AuthForm);

const styles = {
    containerStyle: {
        height: 60,
        marginRight: 0,
        marginLeft: 0,
        marginTop: 0,
        borderRadius: 0,
        borderWidth: 0
    },
    innerBorderStyle: {
        color: '#00171f',
        width: 1
    },
    buttonStyle: {
        backgroundColor: '#003459',
        borderBottomColor: 'rgba(0, 127, 198, 0.22)',
        borderBottomWidth: 3
    },
    selectedButtonStyle: {
        borderBottomColor: '#02dccf',
        borderBottomWidth: 3
    },
    selectedTextStyle: {
        color: '#fff'
    },
    textStyle: {
        fontFamily: "PTSans-Narrow"
    }
};