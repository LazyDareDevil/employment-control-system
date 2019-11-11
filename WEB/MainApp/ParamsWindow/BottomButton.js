import React, {Component} from 'react'
// import {View} from 'react-native'
import {Button, Text} from 'native-base'
import styles from './ParametersStyles'

export default class BottomButtom extends Component {
    render() {
        var {isWorkspaceChosen} = this.props
        if (!isWorkspaceChosen) {
            return(
                <Button style={{backgroundColor: 'rgba(229, 38, 37, 1)', height: '75%'}}
                        onPress={() => this.props.setParamsSelected(true)}>
                    <Text style={styles.edgeBlockText}>Select workspace</Text>
                </Button>
            )
        } else {
            return(
                <Button style={{backgroundColor: 'rgba(229, 38, 37, 1)', height: '75%'}}
                        onPress={() => this.props.leaveButtonPressed()}>
                    <Text style={styles.edgeBlockText}>Leave workspace</Text>
                </Button>
            )
        }
    }
}