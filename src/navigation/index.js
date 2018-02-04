import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { connect } from 'react-redux';
import { rootReducer, middleware, addListener } from "./reducers/root";
import Navigator from './pages/index';

export const store = createStore( rootReducer, applyMiddleware(middleware) );

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Navigator navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav,
                    addListener,
                })} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

const mapStateToProps = (state) => ({
    nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export default AppWithNavigationState;

