import React, { Component } from 'react';
import {
    View,
} from 'react-native';

import NumberKey from './NumberKey.component';

class NumberRow extends Component {
    render() {
        const {
            onPress,
            values
        } = this.props;
        return(
            <View style={styles.numberRow}>
                {
                    values.map((value, i) => {
                        return (
                            <NumberKey
                                key={i}
                                value={value}
                                onPress={onPress}
                            />
                        );
                    })
                }
            </View>
        );
    }
}

export default NumberRow;

const styles = {
    numberRow: {
        flex: 1,
        flexDirection: 'row',
        height: 60
    },
};