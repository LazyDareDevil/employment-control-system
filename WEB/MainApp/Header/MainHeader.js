import React, { Component } from 'react'
import { View } from 'react-native'
import { Icon, Text } from 'native-base'
import headerStyles from './HeaderStyles'

export default class MainHeader extends Component {
    constructor(props) {
        super(props)
    }

    setWorkspaceText = () => {
        const {workspaceNumber} = this.props
        if (workspaceNumber === null) 
            return 'Not chosen'
        else return workspaceNumber.toString()
    }

    setTimer = (timerOn) => {
        if (timerOn) {
            return(
                <View style={headerStyles.left}>
                    <Icon style={{color: 'white'}} name='alarm' />
                    <Text style={headerStyles.text}>
                        {this.props.timerTime}
                    </Text>
                </View>
            )
        }
    }
    
    render() {
        const {login} = this.props
        return(
            <View style={headerStyles.header}>
                <View style={headerStyles.left}>
                    <Icon style={{color: 'white'}} name='tv' />
                    <Text style={headerStyles.text}>
                        {this.setWorkspaceText()}
                    </Text>
                </View>

                {this.setTimer(this.props.timerOn)}

                <View style={headerStyles.right}>
                    <Icon style={{ color: 'white'}} name='contact' />
                    <Text style={[ headerStyles.text]}>
                        {login.toString().length < 15 ? login : login.substr(0, 12) + '...'}
                    </Text>
                </View>
            </View>
        );
    }
}