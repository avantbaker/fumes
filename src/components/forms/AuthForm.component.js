import React, { Component } from 'react';
import { View } from 'react-native';

import SignUpForm from './SignUpForm.component';
import LoginForm from './LoginForm.component';

import Tabs from './Tabs.component';

export default class AuthForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
            // requirements:
            // buttons need to be in correct order
            // name prop and component are required
            buttons: [
                {
                    name: 'Login',
                    component: LoginForm
                },
                {
                    name: 'Sign Up',
                    component: SignUpForm
                }
            ]
        };

        this.updateIndex = this.updateIndex.bind(this);
    }

    updateIndex(selectedIndex) {
        this.setState({ selectedIndex });
    }

    // Pass props from AuthForm to Component
    // create an onSubmit method in each form
            // in each onSubmit method use navigate to go to HomeScreen
    // Pass the onSubmit method to the submitButton
    renderForm(selectedIndex) {
        const { buttons } = this.state;
        const Component = buttons[selectedIndex].component;
        return <Component {...this.props} />;
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