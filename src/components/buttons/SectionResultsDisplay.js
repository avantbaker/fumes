import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
} from 'react-native';
import { FormInput } from 'react-native-elements';

export default class SectionResultsDisplay extends Component {

    render() {

        const {
            title,
            value,
            children,
            editable = false,
            input,
            ...inputProps
        } = this.props;
        const {
            container,
            sideWrapper,
            sideText,
            averageWrapper,
            averageText
        } = sectionResultsDisplayStyles;
        return (
            <View style={container}>
                <View style={sideWrapper}>
                    <Text style={sideText}>{ title }</Text>
                </View>
                <TextInput
                    {...inputProps}
                    textAlign="center"
                    editable={editable}
                    onChangeText={input && input.onChange}
                    onBlur={input && input.onBlur}
                    onFocus={input && input.onFocus}
                    value={input ? input.value : value }
                    style={[averageWrapper, averageText]}
                />
                { children }
            </View>
        );
    }
}

export const sectionResultsDisplayStyles = {
    container: {
        height: 85,
        marginBottom: 10,
        backgroundColor: '#a8a8a8',
        // justifySelf: 'end',
        flexDirection: 'row'
    },
    sideWrapper: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    sideText: {
        fontSize: 18
    },
    averageText: {
        fontSize: 24,
        color: 'black'
    },
    editText: {
        fontSize: 18
    },
    averageWrapper: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    editWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
};
