import React, { Component } from 'react';

import {
    Text,
    View,
    Button,
    StyleSheet
} from 'react-native';


class Final extends Component {

    constructor(props) {
        super(props);

    }

    previousPreprocess(){
        // Go to previous step
        this.props.prevFn()
    }


    calculateAirFlow() {
        const formState = this.props.getState();

        return formState.map((form) =>  Object.values(form).reduce((p,c) => parseInt(p) + parseInt(c)) / 3)
                .reduce((prev,curr) => prev + curr) / 3;
    }

    render() {
        return (
            <View>
                <View style={[styles.container, styles.centerLabel]}>
                    <Text>Final Calculations</Text>
                </View>
                <Text>{ this.calculateAirFlow() }</Text>
                <Button
                    title="Previous Step"
                    onPress={() => this.previousPreprocess() } />
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

export default Final
