import React, { Component } from 'react';
import SvgUri from 'react-native-svg-uri';

import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import AuthForm from '../../components/forms/AuthForm.component';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <SvgUri width="100" height="100" source={require('../../assets/fumeslogo2.svg')} />
                </View>
                <Text style={styles.logoText}>FumeS</Text>
                <AuthForm style={styles.authForm} {...this.props} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        backgroundColor: '#00171f'
    },
    logo: {
        alignItems: 'center'
    },
    logoText: {
        fontFamily: 'Impact',
        alignSelf: 'center',
        fontSize: 40,
        color: '#fff'
    },
    authForm: {
        marginTop: 50,
        backgroundColor: '#003459',
        marginLeft: 25,
        marginRight: 25,
        paddingBottom: 20
    }
});