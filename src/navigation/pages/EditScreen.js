import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class EditScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `Edit`,
    });

    constructor(props) {
        super(props);
        const { params } = this.props.navigation.state;
        this.data = params;
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text>Edit Screen</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    }
});