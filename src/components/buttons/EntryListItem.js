import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

export default ({ attributes, onPress }) => {
    const {
        container,
        contentWrapper,
        spacing,
        location,
        name,
        date,
        average
    } = entryListStyles;
    return(
        <TouchableOpacity
            style={container}
            onPress={onPress}
        >
            <View style={contentWrapper}>
                <View style={spacing}>
                    <Text style={location}>{ attributes.location }</Text>
                    <Text style={name}>{ attributes.name }</Text>
                </View>
                <View style={spacing}>
                    <Text style={date}>{ attributes.date }</Text>
                    <Text style={average}>{ attributes.average }</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export const entryListStyles = {
    container: {
        height: 60,
        backgroundColor: 'rgba(0, 127, 198, 0.25)',
        marginBottom: 12,
        padding: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#02dccf'
    },
    contentWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    spacing: {
        justifyContent: 'space-between'
    },
    location: {
        fontSize: 12,
        color: '#007fc6'
    },
    name: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    date: {
        textAlign: 'right',
        fontSize: 10,
        marginRight: 2,
        color: '#007fc6'
    },
    average: {
        textAlign: 'right',
        color: '#02dccf',
        fontSize: 30
    }
};