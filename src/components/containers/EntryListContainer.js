import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { ListItem, List } from 'react-native-elements';
import { connect } from 'react-redux';

import { updateEntry } from "../../actions/CurrentEntryActions";
import { formatDate } from "../../utilities";

const EntryListContainer = ({ items, listItemComponent, navigation, updateCurrentEntry }) => {

    // create a function that takes an object and returns a function that navigates to same page with the object as the params ( Details )
    const { cardContainerStyles, listItemContainerStyles } = styles;

    const _goToDetails = (item) => (e) => {
        updateCurrentEntry(item);
        navigation.navigate('Details', item);
    };

    return (
        <List containerStyle={cardContainerStyles}>
            {
                Object.keys(items).map((key, i) => {
                    let item = items[key];
                    item = Object.assign({}, item, { id: key, date: formatDate(item.createdAt) });
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

export default connect(
    null,
    (dispatch) => ({ updateCurrentEntry: (entry) => dispatch(updateEntry(entry)) })
)(EntryListContainer);

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