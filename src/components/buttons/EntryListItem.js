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
    } = styles;
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

const styles = {
    container: {
        height: 60,
        backgroundColor: 'white',
        marginBottom: 12,
        padding: 8,
        borderLeftWidth: 4,
        borderLeftColor: 'black'
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
        fontSize: 12
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    date: {
        textAlign: 'right',
        fontSize: 10,
        marginRight: 2
    },
    average: {
        textAlign: 'right',
        fontSize: 30
    }
};