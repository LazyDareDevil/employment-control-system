import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import { Icon, Text } from 'native-base'

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

    render() {
        const {login} = this.props
        return(
            <View style={headerStyles.header}>
                <View style={headerStyles.left}>
                    <Icon style={{color: 'white'}} name='tv' />
                    <Text style={[ headerStyles.text, {fontSize: 14} ]}>
                        {this.setWorkspaceText()}
                    </Text>
                </View>
                <View style={headerStyles.right}>
                    <Text style={[ headerStyles.text, {marginRight: '5%', fontSize: 15} ]}>
                        {login.toString()}
                    </Text>
                    <Icon style={{ color: 'white', fontSize: 40}} name='contact' />
                </View>
            </View>
        );
    }
}

const headerStyles = StyleSheet.create({
    header: {
        backgroundColor: 'rgba(35, 71, 152, 1.0)',
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    left: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '5%'
    },

    right: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: '5%'
    },

    elem: {
        alignItems: 'center',
        marginBottom: '5%',
        marginRight: '5%',
        marginLeft: '3%'
    },

    text: {
        color: 'white',
        fontFamily: 'roboto-light'
    }
})