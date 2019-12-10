import React, {Component} from 'react'
import {Button, Text} from 'native-base'
import styles from './ParametersStyles'
import {Alert} from 'react-native'

export default class BottomButtom extends Component {
    leaveConfirm = () => {
        //for App
        //
        Alert.alert(
            'Are you sure?',
            '',
            [
                {text: 'Yes', onPress: () => this.props.leaveButtonPressed()},
                {
                    text: 'No',
                    style: 'cancel'
                },
            ],
            {cancelable: true},
        );

        // for web
        //
        // if (confirm('Are you sure?')) {
        //     this.props.leaveButtonPressed()
        // }
    }

    render() {
        var {isWorkspaceChosen} = this.props
        if (!isWorkspaceChosen) {
            return(
                <Button style={styles.button}
                        onPress={() => this.props.setParamsSelected(true)}>
                    <Text style={styles.edgeBlockText}>Select workspace</Text>
                </Button>
            )
        } else {
            return(
                <Button style={styles.button}
                        onPress={() => this.leaveConfirm()}>
                    <Text style={styles.edgeBlockText}>Leave workspace</Text>
                </Button>
            )
        }
    }
}
