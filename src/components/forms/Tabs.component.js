import React, { Component } from 'react';
import {
    ButtonGroup
} from 'react-native-elements';

export default class Tabs extends Component {

    static renderButtons(buttons) {
        return buttons.map(button => button.name);
    }

    render() {
        const {
            buttons,
            activeTab,
            updateActiveTab,
            containerStyle = {},
            buttonStyle = {},
            selectedButtonStyle = {},
            innerBorderStyle = {},
            selectedTextStyle = {},
            textStyle = {}
        } = this.props;

        return (
            <ButtonGroup
                onPress={ updateActiveTab }
                selectedIndex={ activeTab }
                buttons={ Tabs.renderButtons(buttons) }
                containerStyle={containerStyle}
                buttonStyle={buttonStyle}
                selectedButtonStyle={selectedButtonStyle}
                selectedTextStyle={selectedTextStyle}
                innerBorderStyle={innerBorderStyle}
                textStyle={textStyle}
            />
        );
    }

}