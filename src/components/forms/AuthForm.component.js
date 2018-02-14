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
                            .then(() => { navigation.navigate('Home') })
                            .catch((error) => { console.log(error) })
                    }
                },
                {
                    name: 'Sign Up',
                    component: SignUpForm,
                    onSubmit: (values) => {
                        firebase.createUser(JSON.parse(values))
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
        return(
            <View style={this.props.style}>
                <Tabs
                    buttons={buttons}
                    activeTab={selectedIndex}
                    containerStyle={{ height: 60 }}
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