import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import { addListener } from "../reducers/root";
import Navigator from './pages/index';

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

