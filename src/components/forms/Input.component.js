import React, { Component } from 'react';
import {
    View,
    TextInput,
    Platform,
    StyleSheet,
    Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

export default (props) => {
    const { input, inputStyle, containerStyle, ...inputProps } = props;
    return (
        <View
            style={[
                inputStyles.container,
                containerStyle && containerStyle,
            ]}
        >
            <TextInput
                {...inputProps}
                onChangeText={input.onChange}
                onBlur={input.onBlur}
                onFocus={input.onFocus}
                value={input.value}
                style={[
                    inputStyles.input,
                    { fontSize: 14 },
                    inputStyle && inputStyle,
                ]}
            />
        </View>
    );
}

const inputStyles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginRight: 15,
        ...Platform.select({
            ios: {
                borderBottomColor: '#393E41',
                borderBottomWidth: 1,
                marginLeft: 20,
                marginRight: 20,
            },
        }),
    },
    input: {
        ...Platform.select({
            android: {
                minHeight: 46,
                width: width - 30,
            },
            ios: {
                minHeight: 36,
                width: width,
            },
        }),
        color: '#393E41',
    },
});