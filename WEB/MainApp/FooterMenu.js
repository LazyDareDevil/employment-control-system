import React, {Component} from 'react';
import { Footer, FooterTab, Button, Icon, Text} from 'native-base'

export default class FooterMenu extends Component {
    constructor(props) {
        super(props)
    }

    setColor = (buttonName) => {
        var state = this.props.currentState
        if (state === buttonName)
            return ({color: 'rgba(39, 171, 227, 1)'})
        else return ({color: 'rgba(10, 61, 179, 1.0)'})
    }

    textStyle = (buttonName) => {
        return ([ {fontSize: 12, fontFamily: 'roboto-light'}, this.setColor(buttonName) ])
    }

    render() {
        var changeWindow = this.props.changeWindow
        let firstButtonText = this.props.isWorkspaceChosen ? 'Time' : 'Parameters'
        return(
            <Footer>
                <FooterTab style={{backgroundColor: 'white'}}>

                    <Button vertical onPress={() => changeWindow('workspace')}>
                        <Icon name='tv' style={this.setColor('workspace')} />
                        <Text style={this.textStyle('workspace')} >
                            {firstButtonText}
                        </Text>
                    </Button>

                    <Button vertical onPress={() => changeWindow('map')}>
                        <Icon name='pin' style={this.setColor('map')} />
                        <Text style={this.textStyle('map')} >
                            Map
                        </Text>
                    </Button>

                    <Button vertical onPress={() => changeWindow('settings')}>
                        <Icon name='settings' style={this.setColor('settings')} />
                        <Text style={this.textStyle('settings')} >
                            Settings
                        </Text>
                    </Button>

                </FooterTab>
            </Footer>
        );
    }
}

