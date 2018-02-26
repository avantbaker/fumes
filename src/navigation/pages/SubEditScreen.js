import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';

class SubEdit extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.name }`,
    });

    render() {
        return (
            <View style={{ flex: 1}}>
                <View style={{flex: 3, flexDirection: 'column' }}>
                    <Text>78.8</Text>
                </View>
                <View style={{flex: 10, flexDirection: 'column' }}>
                    <View style={styles.numberRow}>
                        <TouchableOpacity style={{ height: 40, flex: 1 }}>
                            <Text>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 40, flex: 1 }}>
                            <Text>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 40, flex: 1 }}>
                            <Text>3</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.numberRow}>
                        <TouchableOpacity style={{ height: 40, flex: 1 }}>
                            <Text>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 40, flex: 1 }}>
                            <Text>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 40, flex: 1 }}>
                            <Text>6</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.numberRow}>
                        <TouchableOpacity style={{ height: 40, flex: 1 }}>
                            <Text>7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 40, flex: 1 }}>
                            <Text>8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 40, flex: 1 }}>
                            <Text>9</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.numberRow}>
                        <TouchableOpacity style={{ height: 40, flex: 1 }}>
                            <Text>.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 40, flex: 1 }}>
                            <Text>0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 40, flex: 1 }}>
                            <Text>X</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'column' }}>
                    <Text>Submit</Text>
                </View>
            </View>
        );
    }
}

export default SubEdit;

const styles = {
    numberRow: {
        flex: 1,
        flexDirection: 'row',
        height: 60
    }
}