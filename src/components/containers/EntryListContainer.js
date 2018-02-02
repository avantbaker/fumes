import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { ListItem, List } from 'react-native-elements';

export default ({ items, listItemComponent }) => {
    const { cardContainerStyles, listItemContainerStyles } = styles;
    return (
        <List containerStyle={cardContainerStyles}>
            {
                items.map((item, i) => (
                    <ListItem
                        key={i}
                        attributes={item}
                        component={listItemComponent}
                        containerStyle={listItemContainerStyles}
                        onPress={() => console.log('Working')}
                    />
                ))
            }
        </List>
    );
};

const styles = StyleSheet.create({
    cardContainerStyles: {
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        padding: 10,
        flex: 1,
        marginTop: 0
    },
    listItemContainerStyles: {
        backgroundColor: 'white',
        borderBottomWidth: 0,
        borderBottomColor: 'transparent'
    },
});