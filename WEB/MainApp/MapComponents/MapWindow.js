import React, {Component} from 'react'
import {View} from 'react-native'
import {Button, Icon, Text} from 'native-base'
import Map from './Map'
import styles from './mapWindowStyles'

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
                return 'Take place'
                else return ('Take place ' + this.state.seatNumber)
        } 
    }

    takePlacePressed = () => {
        if (this.state.seatNumber === null) 
            alert("Chose workspace please!")
        else this.props.changeWorkspace(this.state.seatNumber)
    }

    setBottomButton = () => {
        if (this.props.workspaceNumber === null) {
            return (
                <Button style={{backgroundColor: 'rgba(39, 171, 227, 1)', height: '75%'}} 
                        onPress={() => this.takePlacePressed()}>
                    <Text style={styles.buttonText}>
                        {this.setButtonText()}
                    </Text>
                </Button>
            )
        } else {
            return (
                <Button style={styles.anotherPlaceButton}
                        onPress={() => this.props.changeWorkspace(null)}>
                    <Text style={styles.buttonText}>
                        Choose another
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

                <View style={{flex: 5, justifyContent: 'center', alignItems: 'center',
                            backgroundColor: 'white'}}>

                    <Map workspaceNumber={this.props.workspaceNumber} 
                        changeWorkspace={this.props.changeWorkspace}
                        setLocalSeat={this.setLocalSeat}
                        avialableSeats={this.state.avialableSeats}
                        areParamsSelected={this.props.areParamsSelected}/>
        
                </View>

                <View style={styles.bottomBlock}>
                    {this.setBottomButton()}
                </View>
            </View>
        );
    }
}

