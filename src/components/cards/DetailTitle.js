import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';

import { entryListStyles } from '../buttons/EntryListItem';

const DetailTitle = ({ location, name, date }) => {
    return (
        <View style={[entryListStyles.contentWrapper, { backgroundColor: '#a8a8a8', padding: 10 }]}>
            <View style={entryListStyles.spacing}>
                <Text style={entryListStyles.location}>{ location }</Text>
                <Text style={entryListStyles.name}>{ name }</Text>
            </View>
            <View style={entryListStyles.spacing}>
                <Text style={entryListStyles.date}>{ date }</Text>
            </View>
        </View>
    );
};

export default DetailTitle;