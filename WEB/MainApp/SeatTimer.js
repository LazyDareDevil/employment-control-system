import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button } from 'native-base'

export default class SeatTimer extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0,
    }

    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
        });
        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            });
        }, 10);
    };

    leaveButtonPressed() {
        alert( "Your time:\n" + this.formatTime(this.state.timerTime))
        this.setState({ 
            timerOn: false,
            timerStart: 0,
            timerTime: 0
        });
        clearInterval(this.timer);

        this.props.changeWorkspace(null)
        this.props.setParamsSelected(false)
    }

    formatTime = ms => {
        let seconds = ("0" + (Math.floor(ms / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(ms / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(ms / 3600000)).slice(-2);
        return (hours.toString() + " : " + minutes.toString() + " : " + seconds.toString())
    }

    render() {
        const { timerTime } = this.state
        return(
            <View style={styles.mainView}> 
                <View style={[ {flex: 1}, styles.block ]}>
                    <Button style={{backgroundColor: 'rgba(39, 171, 227, 1)', height: '75%'}}
                            onPress={() => this.startTimer()}>
                        <Text style={styles.edgeBlockText}>Start working</Text>
                    </Button>
                </View>

                <View style={[ {flex: 5}, styles.block ]}>
                    <View style={styles.centerBlock}>
                        <Text style={styles.stopWatch}>
                            { this.formatTime(timerTime) }
                        </Text>
                    </View>
                </View>

                <View style={[ {flex: 1}, styles.block ]}>
                    <Button style={{backgroundColor: 'rgba(229, 38, 37, 1)', height: '75%'}}
                            onPress={() => this.leaveButtonPressed()}>
                        <Text style={styles.edgeBlockText}>Leave workspace</Text>
                    </Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 7,
        backgroundColor: 'gray',
    },

    block: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    centerBlock: {
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        paddingBottom: '5%',
    },

    stopWatch: {
        color: 'white',
        fontSize: 40,
        fontFamily: 'roboto-light'
    },

    edgeBlockText: {
        fontFamily: 'roboto-light'
    }
})