import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';

import DetailTitle from './DetailTitle';

export default ({ details: { location, name, date, average }, subtitle, title, rightSubtitle }) => {
    const { titleWrapper, averageText } = styles;
    return (
        <View style={titleWrapper}>
            <Text style={averageText}>{ average }</Text>
            <DetailTitle
                location={subtitle || location}
                name={title || name}
                date={rightSubtitle || date}
            />
        </View>
    );
};

const styles = {
    titleWrapper: {
        height: 205,
        backgroundColor: 'white',
        justifyContent: 'flex-end',
        marginBottom: 20
    },
    averageText: {
        alignSelf: 'center',
        fontSize: 120
    }
};