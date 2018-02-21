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
            style,
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
                    style={[averageWrapper, averageText, style && style]}
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
        flexDirection: 'row'
    },
    sideWrapper: {
        flex: 2,
        backgroundColor: 'rgba(0, 127, 198, 0.25)',
        borderLeftColor: '#02dccf',
        borderLeftWidth: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    sideText: {
        color: '#fff',
        fontSize: 18
    },
    averageText: {
        fontSize: 24,
        color: '#02dccf'
    },
    editText: {
        fontSize: 18,
        color: '#fff'
    },
    averageWrapper: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftColor: 'rgba(2,220,207,0.25)',
        borderLeftWidth: 3,
        backgroundColor: 'rgba(0, 127, 198, 0.05)'
    },
    editWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftColor: '#02dccf',
        borderLeftWidth: 3,
        backgroundColor: 'rgba(0, 127, 198, 0.25)',
    }
};
