import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';

import { entryListStyles } from '../buttons/EntryListItem';

const DetailTitle = ({ location, name, date }) => {
    return (
        <View style={[entryListStyles.contentWrapper, styles.wrapper]}>
            <View style={entryListStyles.spacing}>
                <Text style={entryListStyles.location}>{ location }</Text>
                <Text style={[entryListStyles.name, styles.name ]}>{ name }</Text>
            </View>
            <View style={entryListStyles.spacing}>
                <Text style={entryListStyles.date}>{ date }</Text>
            </View>
        </View>
    );
};

export default DetailTitle;

const styles = {
    wrapper: {
        borderTopColor: '#02dccf',
        borderTopWidth: 3,
        padding: 10
    },
    name: {
        paddingTop: 0,
        paddingBottom: 16
    }
};