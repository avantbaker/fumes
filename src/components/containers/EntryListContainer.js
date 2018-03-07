import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';

import { ListItem, List } from 'react-native-elements';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

import Swipeout from 'react-native-swipeout';

import { updateEntry } from "../../actions/CurrentEntryActions";
import { formatDate } from "../../utilities";

const EntryListContainer = ({
    items,
    listItemComponent,
    navigation,
    updateCurrentEntry,
    firebase,
    user
}) => {

    let finalItems;
    // create a function that takes an object and returns a function that navigates to same page with the object as the params ( Details )
    const { cardContainerStyles, listItemContainerStyles } = styles;

    const _goToDetails = (item) => (e) => {
        updateCurrentEntry(item);
        navigation.navigate('Details', item);
    };

    const keyExtractor = item => item.id;

    const renderListItem = (current) => {

        const deleteItem = (item) => {
            return () => {
                firebase
                    .remove(`entries/${user.uid}/${item.id}`)
                    .then(() => console.log('done'));
            }
        };

        const Component = (
            <TouchableOpacity
                style={styles.swipeButton}
                onPress={deleteItem(current.item)}
            >
                <Text style={{ color: 'white' }}>Delete</Text>
            </TouchableOpacity>
        );

        let swipeButtons = [{
            text: 'Delete',
            component: Component,
            backgroundColor: 'red',
        }];

        return (
            <Swipeout
                right={swipeButtons}
                autoClose={true}
                style={styles.swipeContainer}
            >
                <ListItem
                    key={current.item.id}
                    attributes={current.item}
                    component={listItemComponent}
                    containerStyle={listItemContainerStyles}
                    onPress={_goToDetails(current.item)}
                />
            </Swipeout>
        );
    };

    finalItems = Object.keys(items)
        .map((key, i) => Object.assign({}, items[key], { id: key, date: formatDate(items[key].createdAt) }))
        .reverse();

    return (
        <FlatList
            data={finalItems}
            contentContainerStyle={ cardContainerStyles }
            keyExtractor={keyExtractor}
            renderItem={renderListItem}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default compose(
    firebaseConnect(),
    connect(
        ({ user }) => ({ user }),
        (dispatch) => ({ updateCurrentEntry: (entry) => dispatch(updateEntry(entry)) })
    )
)(EntryListContainer)



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
    swipeContainer: {
        backgroundColor: '#00171f',
        height: 60,
        marginBottom: 12
    },
    swipeButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12
    }
});