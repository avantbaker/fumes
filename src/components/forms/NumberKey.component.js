import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';

class NumberKey extends Component {
    render() {

        const {
            onPress,
            value: itemValue
        } = this.props;

        let Component;
        let value;

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

        if( typeof itemValue !== 'string' ) {
            Component =  itemValue;
            value = 'X';
        } else {
            Component = <Text style={styles.number}>{ itemValue }</Text>;
            value = itemValue;
        }

        return(
            <TouchableOpacity
                onPress={propagateValue(value)}
                style={styles.numberKey}
            >
                { Component }
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
        color: '#02dccf',
        fontFamily: 'Impact',
        fontWeight: 'bold'
    },
};
