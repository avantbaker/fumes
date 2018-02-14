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
            value,
            title,
            onChangeText,
            children,
            editable = false
        } = this.props;
        const {
            container,
            sideWrapper,
            sideText,
            averageWrapper,
            averageText
        } = sectionResultsDisplayStyles;
        console.log(this.props);
        return (
            <View style={container}>
                <View style={sideWrapper}>
                    <Text style={sideText}>{ title }</Text>
                </View>
                <TextInput
                    value={value}
                    textAlign="center"
                    editable={editable}
                    onChangeText={onChangeText}
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
        justifySelf: 'end',
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
