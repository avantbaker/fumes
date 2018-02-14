import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import DetailCard from '../../components/cards/DetailCard';
import SectionResultsDisplay from '../../components/buttons/SectionResultsDisplay';

export default class DetailsScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${ navigation.state.params.name }`,
    });

    constructor(props) {
        super(props);
        const { params } = this.props.navigation.state;
        this.data = params;

        this.state = {
            six: this.data.details.six,
            twelve: this.data.details.twelve,
            eighteen: this.data.details.eighteen
        };

        this.updateAverage = this.updateAverage.bind(this);
    }

    updateAverage(height) {
        const _this = this;
        return (v) => {
            _this.setState({
                [height]: v
            })
        }
    }

    render() {
        console.log(this.data);
        return (
            <View style={styles.container}>
                <DetailCard
                    details={this.data.full}
                    subtitle={this.data.full.name}
                    title="Final Average"
                />
                <View style={{ flex: 7 }}>
                    <SectionResultsDisplay
                        editable
                        title="6 in."
                        value={this.state.six}
                        onChangeText={this.updateAverage('six')}
                    />
                    <SectionResultsDisplay
                        editable
                        title="12 in."
                        value={this.state.twelve}
                        onChangeText={this.updateAverage('twelve')}
                    />
                    <SectionResultsDisplay
                        editable
                        title="18 in."
                        value={this.state.eighteen}
                        onChangeText={this.updateAverage('eighteen')}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    }
});