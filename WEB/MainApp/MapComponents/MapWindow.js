import React, {Component} from 'react'
import {View} from 'react-native'
import {Button, Icon, Text, Container} from 'native-base'
import Map from './Map'
import styles from './MapWindowStyles'
import MapBottomButtons from './MapBottomButtons'

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

    takePlacePressed = () => {
        if (this.state.seatNumber === null) 
            alert("Chose workspace please!")
        else this.props.changeWorkspace(this.state.seatNumber, false)
    }

    render() {
        return(
            <Container style={{flex: 7, backgroundColor: 'rgba(211, 211, 211, 0.4)' }}>
                <View style={styles.topBlock}>
                    <Button transparent icon style={{height: '100%'}}>
                        <Icon name='navigate' style={{color: 'rgba(39, 171, 227, 1)', fontSize: 35}} />
                    </Button>
                </View>

                <View style={{flex: 5, justifyContent: 'center', alignContent: 'center'}}>

                    <Map workspaceNumber={this.props.workspaceNumber} 
                        changeWorkspace={this.props.changeWorkspace}
                        setLocalSeat={this.setLocalSeat}
                        avialableSeats={this.state.avialableSeats}
                        areParamsSelected={this.props.areParamsSelected}
                        isWorkspaceChosen={this.props.isWorkspaceChosen}/>
        
                </View>

                <MapBottomButtons workspaceNumber={this.props.workspaceNumber}
                                    areParamsSelected={this.props.areParamsSelected}
                                    isWorkspaceChosen={this.props.isWorkspaceChosen}
                                    seatNumber={this.state.seatNumber}
                                    takePlacePressed={this.takePlacePressed}
                                    changeWorkspace={this.props.changeWorkspace} />
            </Container>
        );
    }
}




