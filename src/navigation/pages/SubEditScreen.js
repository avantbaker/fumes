import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, change } from 'redux-form';
import { firebaseConnect } from 'react-redux-firebase';

import { Icon } from 'react-native-elements';

import NumberRow from "../../components/forms/NumberRow.component";
import {updateEntry} from "../../actions/CurrentEntryActions";

class SubEdit extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.name }`
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
        let curText = this.state.text.toString();
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

        if( curText.length < 6 || curText.length === 6) {
            this.setState({ text: curText });
        }

    }

    submit() {

        const { text } = this.state;

        if ( isNaN(parseFloat(text)) ) {
            console.log('denied')
            return;
        }

        const {
            entry,
            firebase,
            user,
            navigation: { state: { params } },
            updateCurrentEntry,
            navigation,
            onChange
        } = this.props;

        const currentSection = entry.currentSection;
        const currentField = params.field;
        const currentSubSection = this.combine(entry[entry.currentSection], { [currentField]: text });

        delete currentSubSection.average;

        const newDetails = this.combine(currentSubSection, { average: this.computeAverage(currentSubSection) });
        const updatedEntry = this.combine(entry, { [currentSection]: newDetails });

        const updatedEntryAverages = [
            updatedEntry.left.average.toString(),
            updatedEntry.middle.average.toString(),
            updatedEntry.right.average.toString()
        ];

        updatedEntry.average = this.computeAverage(updatedEntryAverages);

        firebase.update(`entries/${user.uid}/${entry.id}`, updatedEntry).then(() => {
            updateCurrentEntry(updatedEntry);
        });

        onChange('edit', currentField, text);
        navigation.goBack();
    }

    combine(base, update) {
        return Object.assign({}, base, update);
    }

    computeAverage(averages) {

        let value;

        if(averages && typeof averages === 'object') {
            value = (Object.values(averages).reduce((p,c) => parseFloat(p) + parseFloat(c)) / 3).toFixed(1).toString();
            console.log(Object.values(averages).reduce((p,c) => parseFloat(p) + parseFloat(c)));
        }

        if(averages && Array.isArray(averages)) {
            value = (averages.reduce((p,c) => parseFloat(p) + parseFloat(c)) / 3).toFixed(1).toString();
            console.log(averages.reduce((p,c) => parseFloat(p) + parseFloat(c)));
        }

        return value;
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
                        values={['.', '0', <Icon
                                                containerStyle={{ marginTop: 2 }}
                                                name="angle-double-left"
                                                type="font-awesome"
                                                color="white"
                                                size={32}
                                            />
                        ]}
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

export default compose(
    firebaseConnect(),
    connect(
        ({ form: { edit }, entry, user }, { navigation: { state: { params }}}) => ({
            field: params.field,
            initialValues: {
                sectionValue: edit && edit.values[params.field],
            },
            entry,
            user
        }),
        (dispatch) => ({
            onChange: (form, field, value) => dispatch(change(form, field, value)),
            updateCurrentEntry: (entry) => dispatch(updateEntry(entry))
        })
    )
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