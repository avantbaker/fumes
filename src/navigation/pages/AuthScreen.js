import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { FIREBASE } from "../../App";

import AuthForm from '../../components/forms/AuthForm.component';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ alignSelf: 'center', fontSize: 40 }}>FUMES</Text>
                <AuthForm style={{ marginTop: 50 }} {...this.props} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 180
    }
});