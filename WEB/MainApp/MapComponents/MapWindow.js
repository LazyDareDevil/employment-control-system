import React, {Component} from 'react'
import {View, TextInput} from 'react-native'
import {Button, Icon, Text, Container} from 'native-base'
import Map from './Map'
import styles from './MapWindowStyles'
import MapBottomButtons from './MapBottomButtons'
import TopMenu from './TopMenu'

export default class MapWindow extends Component {
    constructor(props){
        super(props)
    }

    state = {
        seatNumber: this.props.workspaceNumber,
    }

    setLocalSeat = (num) => {
        this.setState({
            seatNumber: num
        })
    }

    takePlacePressed = () => {
        let seat = this.state.seatNumber
        if (seat === null) 
            alert("Chose workspace please!")
        else if (seat > 0 && seat <= 8) {
            if (this.props.avialableSeats.indexOf(seat) !== -1) {
                this.props.changeWorkspace(this.state.seatNumber, false)
            } else {
                alert("You can't chose it")
            }
        }
    }

    showInput = () => {
        if (this.props.areParamsSelected) {
            return (
                <View style={styles.topBlock}>
                    <TextInput style={styles.seatInput}
                                placeholder='№'
                                onChangeText={val => this.setLocalSeat(parseInt(val))}
                                maxLength={1}
                                />
                    <Button transparent icon style={{height: '100%'}}>
                        <Icon name='navigate' style={{color: 'rgba(39, 171, 227, 1)', fontSize: 35}} />
                    </Button>
                </View>
            )
        } else return (
            <View style={styles.topBlock}></View>
        )
    }

    render() {
        return(
            <Container style={{flex: 7, backgroundColor: 'rgba(211, 211, 211, 0.4)' }}>
                {/* <View style={styles.topBlock}>
                    <Button transparent icon style={{height: '100%'}}>
                        <Icon name='navigate' style={{color: 'rgba(39, 171, 227, 1)', fontSize: 35}} />
                    </Button>
                </View> */}
                {/* {this.showInput()} */}
                <TopMenu workspaceNumber={this.props.workspaceNumber}
                        areParamsSelected={this.props.areParamsSelected}
                        setLocalSeat={this.setLocalSeat}
                        isWorkspaceChosen={this.props.isWorkspaceChosen} />

                <View style={{flex: 5, justifyContent: 'center', alignContent: 'center'}}>

                    <Map workspaceNumber={this.props.workspaceNumber} 
                        changeWorkspace={this.props.changeWorkspace}
                        setLocalSeat={this.setLocalSeat}
                        avialableSeats={this.props.avialableSeats}
                        areParamsSelected={this.props.areParamsSelected}
                        isWorkspaceChosen={this.props.isWorkspaceChosen}
                        seatNumber={this.state.seatNumber}/>
        
                </View>

                <MapBottomButtons workspaceNumber={this.props.workspaceNumber}
                                    areParamsSelected={this.props.areParamsSelected}
                                    isWorkspaceChosen={this.props.isWorkspaceChosen}
                                    seatNumber={this.state.seatNumber}
                                    takePlacePressed={this.takePlacePressed}
                                    changeWorkspace={this.props.changeWorkspace} 
                                    setLocalSeat={this.setLocalSeat}/>
            </Container>
        );
    }
}




