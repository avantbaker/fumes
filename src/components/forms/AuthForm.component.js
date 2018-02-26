import React, { Component } from 'react';
import { View } from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

import SignUpForm from './SignUpForm.component';
import LoginForm from './LoginForm.component';

import Tabs from './Tabs.component';

class AuthForm extends Component {

    constructor(props) {
        super(props);
        const { firebase, navigation } = props;
        this.state = {
            selectedIndex: 0,
            // requirements:
            // buttons need to be in correct order
            // name prop and component are required
            buttons: [
                {
                    name: 'Login',
                    component: LoginForm,
                    onSubmit: (values) => {
                        firebase.login(values)
                            .then(({ user }) => {
                                navigation.navigate('Home', { user })
                            })
                            .catch((error) => { console.log(error) })
                    }
                },
                {
                    name: 'Sign Up',
                    component: SignUpForm,
                    onSubmit: (values) => {
                        firebase.createUser(values)
                            .then((data) => { console.log(data) })
                            .catch((error) => { console.log(error) })
                    }
                }
            ]
        };

        this.updateIndex = this.updateIndex.bind(this);
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
   connect(({ firebase: { auth } }) => ({ auth }))
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