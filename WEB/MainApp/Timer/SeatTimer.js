import React, { Component } from 'react'
import { View } from 'react-native'
import { Text, Button, Container } from 'native-base'
import timerStyles from './TimerStyles'

export default class SeatTimer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { timerTime } = this.props
        return(
            <Container style={timerStyles.mainView}> 
                <View style={[ {flex: 1}, timerStyles.block ]}>
                    <Button full disabled style={timerStyles.yourTimeButton}>
                            
                        <Text style={timerStyles.edgeBlockText}>Your time</Text>
                    </Button>
                </View>

                <View style={[ {flex: 5}, timerStyles.block ]}>
                    <View style={timerStyles.centerBlock}>
                        <Text style={timerStyles.stopWatch}>
                            { this.props.formatTime(timerTime) }
                        </Text>
                    </View>
                </View>

                <View style={[ {flex: 1}, timerStyles.block ]}>
                    <Button style={timerStyles.leaveButton}
                            onPressIn={() => this.props.leaveButtonPressed()}>
                        <Text style={timerStyles.edgeBlockText}>Leave workspace</Text>
                    </Button>
                </View>
            </Container>
            
        )
    }
}