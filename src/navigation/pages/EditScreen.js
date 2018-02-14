import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

import DetailCard from '../../components/cards/DetailCard';
import EditForm from '../../components/forms/EditForm.component';

class EditScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${ navigation.state.params.name }`,
    });

    constructor(props) {
        super(props);
        const { params } = this.props.navigation.state;
        this.data = params;
    }

    _handleSubmit(values) {
        console.log("Should be submitting", values);
    }

    render() {
        return (
            <View style={styles.container}>
                <DetailCard
                    details={this.data.full}
                    subtitle={this.data.full.name}
                    title="Final Average"
                />
                <EditForm
                    {...this.data}
                    style={{ flex: 5 }}
                    onSubmit={this._handleSubmit}
                />
            </View>
        );
    }
}

const mapStateToProps = ({ firebase: { auth } }) => ({ auth });
export default compose(
    firebaseConnect(),
    connect(mapStateToProps)
)(EditScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    submitContainer: {
        flex: 1,
    }
});