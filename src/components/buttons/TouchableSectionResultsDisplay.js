import React from 'react';
import {
    TouchableOpacity,
    Text
} from 'react-native';

import SectionResultsDisplay, { sectionResultsDisplayStyles } from './SectionResultsDisplay';
const { editWrapper, editText } = sectionResultsDisplayStyles;

const TouchableSectionResultsDisplay = ({ value, title, onPress }) => {
    return (
        <SectionResultsDisplay
            title={title}
            value={value.toString()}
        >
            <TouchableOpacity
                style={editWrapper}
                onPress={onPress}
            >
                <Text style={editText}>Edit</Text>
            </TouchableOpacity>
        </SectionResultsDisplay>
    )
};

export default TouchableSectionResultsDisplay;