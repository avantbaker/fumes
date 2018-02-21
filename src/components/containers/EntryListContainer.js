import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { ListItem, List } from 'react-native-elements';

export default ({ items, listItemComponent, navigation }) => {

    // create a function that takes an object and returns a function that navigates to same page with the object as the params ( Details )
    const { cardContainerStyles, listItemContainerStyles } = styles;

    const _goToDetails = (item) => () => navigation.navigate('Details', item);

    return (
        <List containerStyle={cardContainerStyles}>
            {
                Object.keys(items).map((key, i) => {
                    let item = items[key];
                    item = Object.assign({}, item, { id: key });
                    return (
                        <ListItem
                            key={i}
                            attributes={item}
                            component={listItemComponent}
                            containerStyle={listItemContainerStyles}
                            onPress={_goToDetails(item)}
                        />
                    )
                })
            }
        </List>
    );
};

const styles = StyleSheet.create({
    cardContainerStyles: {
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        flex: 1,
        marginTop: 0
    },
    listItemContainerStyles: {
        backgroundColor: 'white',
        borderBottomWidth: 0,
        borderBottomColor: 'transparent'
    },
});