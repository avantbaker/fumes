import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import NumberRow from "../../components/forms/NumberRow.component";

class SubEdit extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.name }`,
    });

    constructor(props) {
        super(props);

        this.state = {
            text: props.initialValues.sectionValue
        };

        this.updateInput = this.updateInput.bind(this);
    }

    updateInput(val) {
        let curText = this.state.text;
        if (isNaN(val)) {
            switch(val) {
                case 'back':
                    curText = curText.slice(0, -1);
                    break;
                case 'dec':
                    curText += '.';
                    break;
                default:
                    curText += val;
                    break;
            }
        } else {
            curText += val;
        }
        this.setState({ text: curText });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.numberInput}>
                    <Text style={styles.numberInputText}>{ this.state.text }</Text>
                </View>
                <View style={styles.numberPadContainer}>
                    <NumberRow
                        values={['1', '2', '3']}
                        onPress={this.updateInput}
                    />
                    <NumberRow
                        values={['4', '5', '6']}
                        onPress={this.updateInput}
                    />
                    <NumberRow
                        values={['7', '8', '9']}
                        onPress={this.updateInput}
                    />
                    <NumberRow
                        values={['.', '0', 'X']}
                        onPress={this.updateInput}
                    />
                </View>
                <View style={styles.submitContainer}>
                    <Text style={styles.submitText}>Submit</Text>
                </View>
            </View>
        );
    }
}

SubEdit = reduxForm({ form: 'subEdit' })(SubEdit);

export default connect(
    (state) => ({
        initialValues: {
            sectionValue: '74.8',
        }
    })
)(SubEdit);

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#00171f'
    },
    numberInputText: {
        fontSize: 110,
        fontFamily: 'Impact',
        color: '#02dccf',
    },
    numberInputTextContainer: {
        borderBottomWidth: 0
    },
    numberInput: {
        flex: 4,
        paddingTop: 14,
        flexDirection: 'column',
        alignItems: 'center'
    },
    numberPadContainer: {
        flex: 8,
        flexDirection: 'column'
    },
    numberRow: {
        flex: 1,
        flexDirection: 'row',
        height: 60
    },
    numberKey: { 
        height: 40, 
        flex: 1, 
        alignItems: 'center',
    },
    number: {
        fontSize: 32,
        color: '#fff',
        fontFamily: 'Impact',
        fontWeight: 'bold'
    },
    submitContainer: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center'
    },
    submitText: {
        color: '#02dccf',
        fontFamily: 'Impact',
        fontSize: 30
    }
}