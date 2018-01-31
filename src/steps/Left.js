import React, { Component } from 'react';

import {
    Text,
    View,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';

class Left extends Component {

    constructor(props) {
        super(props);

        const formState = props.getState()[0];

        this.state = {
            sixInch: formState && formState.sixInch || null,
            twelveInch: formState && formState.twelveInch || null,
            eighteenInch: formState && formState.eighteenInch || null
        };

    }

    nextPreprocess(){
        const { sixInch, twelveInch, eighteenInch } = this.state;
        // Save step state for use in other steps of the wizard
        this.props.saveState(0, { sixInch, twelveInch, eighteenInch });
        // Go to next step
        this.props.nextFn()
    }

    render() {
        return (
            <View>
                <View style={[styles.container, styles.centerLabel]}>
                    <Text>Left Quadrant</Text>
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
                        title="Next Step"
                        onPress={() => this.nextPreprocess()} />
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


export default Left
