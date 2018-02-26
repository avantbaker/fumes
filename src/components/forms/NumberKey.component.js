import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
} from 'react-native';

class NumberKey extends Component {
    render() {
        const {
            onPress,
            value
        } = this.props;

        function propagateValue(value) {
            return () => {
                switch(value) {
                    case '.':
                        return onPress('dec');
                    case 'X':
                        return onPress('back');
                    default:
                        return onPress(value)
                }
            }
        }

        return(
            <TouchableOpacity
                onPress={propagateValue(value)}
                style={styles.numberKey}
            >
                <Text style={styles.number}>{ value }</Text>
            </TouchableOpacity>
        );
    }
}

export default NumberKey;

const styles = {
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
};
