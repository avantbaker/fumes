import React, { Component } from 'react';
import { View } from 'react-native';
import TouchableSectionResultsDisplay from '../../components/buttons/TouchableSectionResultsDisplay';

const DisplayForm = ({ entry, navigator, style }) => {
    return (
        <View style={style}>
            <TouchableSectionResultsDisplay
                title="left"
                value={entry.left.average}
                onPress={navigator("Left", entry.left)}
            />
            <TouchableSectionResultsDisplay
                title="Middle"
                value={entry.middle.average}
                onPress={navigator("Middle", entry.middle)}
            />
            <TouchableSectionResultsDisplay
                title="Right"
                value={entry.right.average}
                onPress={navigator("Right", entry.right)}
            />
        </View>
    );
};

export default DisplayForm;