import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { entryListStyles } from '../../components/buttons/EntryListItem';

class SectionResultsDisplay extends Component {
    render() {
        const { average, side } = this.props;
        const { container, sideWrapper, sideText, averageWrapper, averageText, editWrapper, editText } = sectionResultsDisplayStyles;
        return (
            <View style={container}>
                <View style={sideWrapper}>
                    <Text style={sideText}>{ side }</Text>
                </View>
                <View style={averageWrapper}>
                    <Text style={averageText}>{ average }</Text>
                </View>
                <TouchableOpacity
                    style={editWrapper}
                    onPress={this.props.onPress}
                >
                    <Text style={editText}>Edit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const sectionResultsDisplayStyles = {
    container: {
        height: 85,
        marginBottom: 10,
        backgroundColor: '#a8a8a8',
        justifySelf: 'end',
        flexDirection: 'row'
    },
    sideWrapper: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    sideText: {
        fontSize: 18
    },
    averageText: {
        fontSize: 24
    },
    editText: {
        fontSize: 18
    },
    averageWrapper: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    editWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
};

const DetailTitle = ({ location, name, date }) => {
    return (
        <View style={[entryListStyles.contentWrapper, { backgroundColor: '#a8a8a8', padding: 10 }]}>
            <View style={entryListStyles.spacing}>
                <Text style={entryListStyles.location}>{ location }</Text>
                <Text style={entryListStyles.name}>{ name }</Text>
            </View>
            <View style={entryListStyles.spacing}>
                <Text style={entryListStyles.date}>{ date }</Text>
            </View>
        </View>
    );
};

const DetailCard = ({ details: { location, name, date }}) => {
    return (
        <View style={{ flex: 4, backgroundColor: 'white', justifyContent: 'flex-end', marginBottom: 20 }}>
            <Text style={{ alignSelf: 'center', fontSize: 120 }}>100</Text>
            <DetailTitle
                location={location}
                name={name}
                date={date}
            />
        </View>
    );
};

export default class DetailsScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${ navigation.state.params.name }`,
    });

    constructor(props) {
        super(props);
        const { params } = this.props.navigation.state;
        this.data = params;
        this._goToEdit = this._goToEdit.bind(this);
    }

    _goToEdit(data) {
        const { navigate } = this.props.navigation;
        return () => {
            console.log('What the fuck');
            navigate('Edit', data);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <DetailCard details={this.data} />
                <View style={{ flex: 7 }}>
                    <SectionResultsDisplay
                        side="Left"
                        average={this.data.left.average}
                        onPress={this._goToEdit(this.data.left)}
                    />
                    <SectionResultsDisplay
                        side="Middle"
                        average={this.data.middle.average}
                        onPress={this._goToEdit(this.data.middle)}
                    />
                    <SectionResultsDisplay
                        side="Right"
                        average={this.data.right.average}
                        onPress={this._goToEdit(this.data.right)}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    }
});