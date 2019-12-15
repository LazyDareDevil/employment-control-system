import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import FooterMenu from './FooterMenu'
import { Container } from 'native-base';
import WorkspaceParameters from './ParamsWindow/WorkspaceParameters'
import MapWindow from './MapComponents/MapWindow'
import Settings from './Settings'
import MainHeader from './Header/MainHeader';


export default class MainApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            window: 'workspace',
            workspaceNumber: null,
            isWorkspaceChosen: false,
            areParamsSelected: false,
            chosenParameters: [false, false, false, false],
            avialableSeats: [],

            timerOn: false,
            timerStart: 0,
            timerTime: 0,
        }
    }

    changeWindow = e => {
        this.setState({
            window: e,
        })
    }

    changeWorkspace = (num, switchFlag) => {
        if (num !== null) {
            this.setState({
                workspaceNumber: num,
            })
        } else {
            this.setState({
                workspaceNumber: null,
                isWorkspaceChosen: false,
            })
        }
        if (switchFlag) {
            fetch(this.props.ngrokServer + 'take_place/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "token": this.props.token,
                    "place": this.state.workspaceNumber
                }),
            })
            .then((response) => {
                if (response.status == 200) {
                    this.startTimer()
                }
            })
            .catch((error) => {
                alert('error: ' + error)
            });

            // this.startTimer()
        } 
    }

    startTimer = () => {
        this.setState({
            isWorkspaceChosen: true,
            window: 'workspace',
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
        })
        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            });
        }, 1000);
    }

    leaveButtonPressed = () => {
        fetch(this.props.ngrokServer + 'leave_place/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "token": this.props.token,
                "place": this.state.workspaceNumber,
                "time": this.state.timerTime
            }),
        })
        .then((response) => {
            if (response.status == 200) {
                alert( "Your time:\n" + this.formatTime(this.state.timerTime))
                this.setState({ 
                    timerOn: false,
                    timerStart: 0,
                    timerTime: 0
                });
                clearInterval(this.timer);
                this.changeWorkspace(null)
                this.setParamsSelected(false)
            }
        })
        .catch((error) => {
            alert('error: ' + error)
        });

        // alert( "Your time:\n" + this.formatTime(this.state.timerTime))
        // this.setState({ 
        //     timerOn: false,
        //     timerStart: 0,
        //     timerTime: 0
        // });
        // clearInterval(this.timer);
        // this.changeWorkspace(null)
        // this.setParamsSelected(false)
    }

    formatTime = ms => {
        let seconds = ("0" + (Math.floor(ms / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(ms / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(ms / 3600000)).slice(-2);
        return (hours.toString() + " : " + minutes.toString() + " : " + seconds.toString())
    }

    setParamsSelected = flag => {
        if (flag) {
            fetch(this.props.ngrokServer + 'get_workplaces/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({"token": this.props.token}),
            })
            .then((response) => {
                return response.json()
            })
            .then((responseJson) => {
                let amount = responseJson.amount
                let places = responseJson.places
                let temp_array = []
                for (let i = 0; i < amount; i++) {
                    if (places[i].user_id == 0){
                        temp_array.push(places[i].id)
                    }
                }
                this.setState({
                    avialableSeats: temp_array,
                    areParamsSelected: true,
                    window: 'map'
                })
            })
            .catch((error) => {
                alert('error: ' + error)
            });

            // this.setState({
            //     avialableSeats: [1, 3, 4, 5, 8],
            //     areParamsSelected: true,
            //     window: 'map'
            // })
        } else {
            this.setState({
                areParamsSelected: false
            })
        }
    }

    changeChosenParams = index => {
        var array = this.state.chosenParameters
        if (!array[index]) {
            array[index] = true
        } else array[index] = false
        this.setState({
            chosenParameters: array
        })
    }

    setMainWindow = () => {
        if (this.state.window === 'workspace') {
            return <WorkspaceParameters setParamsSelected={this.setParamsSelected}
                                        chosenParameters={this.state.chosenParameters}
                                        changeChosenParams={this.changeChosenParams}
                                        isWorkspaceChosen={this.state.isWorkspaceChosen}
                                        leaveButtonPressed={this.leaveButtonPressed}/>
        } else if (this.state.window === 'map') {
            return <MapWindow workspaceNumber={this.state.workspaceNumber} 
                                changeWorkspace={this.changeWorkspace}
                                areParamsSelected={this.state.areParamsSelected}
                                isWorkspaceChosen={this.state.isWorkspaceChosen}
                                avialableSeats={this.state.avialableSeats}/>
        } else if (this.state.window === 'settings') {
            return <Settings checkExit={this.props.checkExit} timerOn={this.state.timerOn}/>
        }
    }

    render() {
        return (
            <Container>
                <MainHeader login={this.props.login} workspaceNumber={this.state.workspaceNumber}
                            timerOn={this.state.timerOn} timerTime={this.formatTime(this.state.timerTime)}/>

                {this.setMainWindow()}

                <FooterMenu changeWindow={this.changeWindow} 
                            currentState={this.state.window}
                            isWorkspaceChosen={this.state.isWorkspaceChosen} />
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        alignItems: 'center'
    },

    title: {
        color: 'rgba(35, 71, 152, 1.0)',
        justifyContent: 'flex-end',
        fontFamily: 'roboto-light'
    }
})
