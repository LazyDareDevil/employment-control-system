import React, {Component} from 'react'
import {View} from 'react-native'
import {Button, Icon, Text} from 'native-base'
import Map from './Map'
import styles from './MapWindowStyles'

export default class MapWindow extends Component {
    constructor(props){
        super(props)
    }

    state = {
        seatNumber: this.props.workspaceNumber,
        avialableSeats: [1, 3, 5, 7] // буду получать
    }

    setLocalSeat = (num) => {
        this.setState({
            seatNumber: num
        })
    }

    setButtonText = () => {
        if (!this.state.isSeatChosen) {
            if (this.state.seatNumber === null)
                return 'Long press to choose'
                else return ('Take place ' + this.state.seatNumber)
        } 
    }

    takePlacePressed = () => {
        if (this.state.seatNumber === null) 
            alert("Chose workspace please!")
        else this.props.changeWorkspace(this.state.seatNumber, false)
    }

    setBottomButton = () => {
        if (this.props.workspaceNumber === null && this.props.areParamsSelected) {
            return (
                <Button style={{backgroundColor: 'rgba(39, 171, 227, 1)', height: '75%'}} 
                        onPress={() => this.takePlacePressed()}>
                    <Text style={styles.buttonText}>
                        {this.setButtonText()}
                    </Text>
                </Button>
            )
        } else if (this.props.areParamsSelected && !this.props.isWorkspaceChosen) {
            return (
                <Button style={styles.anotherPlaceButton}
                        onPress={() => this.props.changeWorkspace(this.state.seatNumber, true)}>
                    <Text style={styles.buttonText}>
                        Switch on
                    </Text>
                </Button>
            )
        }
    }

    render() {
        return(
            <View style={{flex: 7, backgroundColor: '#F0FFFF' }}>
                <View style={styles.topBlock}>
                    <Button transparent icon style={{height: '100%'}}>
                        <Icon name='navigate' style={{color: 'rgba(39, 171, 227, 1)', fontSize: 35}} />
                    </Button>
                </View>

                <View style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>

                    <Map workspaceNumber={this.props.workspaceNumber} 
                        changeWorkspace={this.props.changeWorkspace}
                        setLocalSeat={this.setLocalSeat}
                        avialableSeats={this.state.avialableSeats}
                        areParamsSelected={this.props.areParamsSelected}
                        isWorkspaceChosen={this.props.isWorkspaceChosen}/>
        
                </View>

                <View style={styles.bottomBlock}>
                    {this.setBottomButton()}
                </View>
            </View>
        );
    }
}

