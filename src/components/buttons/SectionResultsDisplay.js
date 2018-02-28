import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
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
            onButtonPress,
            button = false,
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
                {
                    button ?
                    <TouchableOpacity
                        {...inputProps}
                        onPress={onButtonPress}
                        style={[averageWrapper, style && style]}
                    >
                        <Text style={[averageText, style && style]}>
                            { input ? input.value : value }
                        </Text>
                    </TouchableOpacity> :
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
                }
                { children }
            </View>
        );
    }
}

export const sectionResultsDisplayStyles = {
    container: {
        height: 60,
        marginBottom: 12,
        flexDirection: 'row'
    },
    sideWrapper: {
        flex: 1,
        backgroundColor: 'rgba(0, 127, 198, 0.25)',
        borderLeftColor: '#02dccf',
        borderLeftWidth: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    sideText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'PTSans-Narrow'
    },
    averageText: {
        fontSize: 24,
        color: '#02dccf',
        fontFamily: 'Impact'
    },
    editText: {
        fontSize: 18,
        color: '#fff',
        fontFamily: 'PTSans-Narrow'
    },
    averageWrapper: {
        flex: 1,
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
