import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from 'react-native';

import DetailCard from '../../components/cards/DetailCard';
import SectionResultsDisplay from '../../components/buttons/SectionResultsDisplay';
import TouchableSectionResultsDisplay from '../../components/buttons/TouchableSectionResultsDisplay';

import { sectionResultsDisplayStyles } from '../../components/buttons/SectionResultsDisplay';

const { editWrapper, editText } = sectionResultsDisplayStyles;

const DisplayForm = (props) => {
    return (
        <View style={{ flex: 5 }}>
            <TouchableSectionResultsDisplay
                title="left"
                value={this.data.left.average}
                onPress={this._goToEdit("Left", this.data.left)}
            />
            <TouchableSectionResultsDisplay
                title="Middle"
                value={this.data.middle.average}
                onPress={this._goToEdit("Middle", this.data.middle)}
            />
            <TouchableSectionResultsDisplay
                title="Right"
                value={this.data.right.average}
                onPress={this._goToEdit("Right", this.data.right)}
            />
        </View>
    );
}
class DetailsScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${ navigation.state.params.name }`,
    });

    constructor(props) {
        super(props);
        const { params } = this.props.navigation.state;
        this.data = params;
    }

    _goToEdit(title, data) {
        const { navigate, state: { params } } = this.props.navigation;
        return () => {
            navigate('Edit', {
                details: data,
                full: this.data,
                name: title
            });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <DetailCard details={this.data} />
                <View style={{ flex: 7 }}>
                    <TouchableSectionResultsDisplay
                        title="left"
                        value={this.data.left.average}
                        onPress={this._goToEdit("Left", this.data.left)}
                    />
                    <TouchableSectionResultsDisplay
                        title="Middle"
                        value={this.data.middle.average}
                        onPress={this._goToEdit("Middle", this.data.middle)}
                    />
                    <TouchableSectionResultsDisplay
                        title="Right"
                        value={this.data.right.average}
                        onPress={this._goToEdit("Right", this.data.right)}
                    />
                </View>
            </View>
        );
    }
}

export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    }
});