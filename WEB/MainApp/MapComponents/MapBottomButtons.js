import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import { Button, Text } from 'native-base'
import styles from './MapWindowStyles'

export default class MapBottomButtons extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        let { workspaceNumber } = this.props
        let { areParamsSelected } = this.props
        let { isWorkspaceChosen } = this.props
        let { seatNumber } = this.props
        if (workspaceNumber === null && areParamsSelected) {
            return (
                <View style={styles.bottomBlock}>
                    <Button style={styles.takeButton} 
                            onPress={() => this.props.takePlacePressed()}>
                        <Text style={styles.buttonText}>
                            {seatNumber === null || isNaN(seatNumber) ? 'Choose number' : 'Take place ' + seatNumber}
                        </Text>
                    </Button>
                </View>

            )
        } else if (areParamsSelected && !isWorkspaceChosen) {
            return (
                <View style={styles.bottomBlock}>
                    <Button style={styles.takeButton}
                            onPress={() => this.props.changeWorkspace(this.props.seatNumber, true)}>
                        <Text style={styles.buttonText}>
                            Switch on
                        </Text>
                    </Button>
                    <Button style={styles.anotherPlaceButton}
                            onPress={() => this.props.changeWorkspace(null, false)}>
                        <Text style={styles.buttonText}>
                            Choose another
                        </Text>
                    </Button>
                </View>
            )
        } else return <View style={styles.bottomBlock}></View>
    }
}