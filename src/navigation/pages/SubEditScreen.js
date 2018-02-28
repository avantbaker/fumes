import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { reduxForm, change } from 'redux-form';

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
        this.submit = this.submit.bind(this);
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

    submit() {
        this.props.onChange('edit', this.props.field, this.state.text);
        this.props.navigation.goBack();
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
                <TouchableOpacity
                    style={styles.submitContainer}
                    onPress={this.submit}
                >
                    <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

SubEdit = reduxForm({ form: 'subEdit' })(SubEdit);

export default connect(
    ({ form: { edit }}, { navigation: { state: { params }}}) => ({
        field: params.field,
        initialValues: {
           sectionValue: edit && edit.values[params.field],
        }
    }),
    (dispatch) => ({
        onChange: (form, field, value) => dispatch(change(form, field, value))
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
        color: '#fff',
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
        color: '#fff',
        fontFamily: 'Impact',
        fontSize: 30
    }
}