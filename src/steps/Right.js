import React, { Component } from 'react';

import {
    Text,
    View,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';


class Right extends Component {

    constructor(props) {
        super(props);

        const formState = props.getState()[2];

        this.state = {
            sixInch: formState && formState.sixInch || null,
            twelveInch: formState && formState.twelveInch || null,
            eighteenInch: formState && formState.eighteenInch || null
        };

    }

    nextPreprocess(){
        const { sixInch, twelveInch, eighteenInch } = this.state;
        // Save step state for use in other steps of the wizard
        this.props.saveState(2, { sixInch, twelveInch, eighteenInch });
        // Go to next step
        this.props.nextFn()
    }

    previousPreprocess(){
        // Go to previous step
        this.props.prevFn()
    }

    render() {
        return (
            <View>
                <View style={[styles.container, styles.centerLabel]}>
                    <Text>Right Quadrant</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.label}>6 Inch.</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Rating"
                        onChangeText={(sixInch) => this.setState({sixInch})}
                        value={this.state.sixInch}
                    />
                </View>
                <View style={styles.container}>
                    <Text style={styles.label}>12 Inch.</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Rating"
                        onChangeText={(twelveInch) => this.setState({twelveInch})}
                        value={this.state.twelveInch}
                    />
                </View>
                <View style={styles.container}>
                    <Text style={styles.label}>18 Inch.</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Rating"
                        onChangeText={(eighteenInch) => this.setState({eighteenInch})}
                        value={this.state.eighteenInch}
                    />
                </View>
                <View style={[styles.container, styles.centerLabel]}>
                    <Button
                        title="Previous Step"
                        onPress={() => this.previousPreprocess() } />
                    <Button
                        title="Next Step"
                        onPress={() => this.nextPreprocess() } />
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 15
    },
    centerLabel: {
        justifyContent: 'center'
    },
    label: {
        flex: 2
    },
    input: {
        flex: 1
    }
});

export default Right
