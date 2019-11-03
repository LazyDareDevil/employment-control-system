import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import FooterMenu from './FooterMenu'
import { Container, Title , Header } from 'native-base';
import WorkspaceParameters from './ParamsWindow/WorkspaceParameters'
import MapWindow from './MapComponents/MapWindow'
import Settings from './Settings'
import MainHeader from './Header/MainHeader';
import SeatTimer from './Timer/SeatTimer'


export default class MainApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            window: 'workspace',
            workspaceNumber: null,
            isWorkspaceChosen: false,
            areParamsSelected: false,

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
        if (switchFlag) this.startTimer()
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
        }, 10);
    }

    leaveButtonPressed = () => {
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

    formatTime = ms => {
        let seconds = ("0" + (Math.floor(ms / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(ms / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(ms / 3600000)).slice(-2);
        return (hours.toString() + " : " + minutes.toString() + " : " + seconds.toString())
    }

    setParamsSelected = flag => {
        if (flag) {
            this.setState({
                areParamsSelected: true,
                window: 'map'
            })
        } else {
            this.setState({
                areParamsSelected: false
            })
        }
    }

    setMainWindow = () => {
        if (this.state.window === 'workspace') {
            if (this.state.isWorkspaceChosen) 
                return <SeatTimer leaveButtonPressed={this.leaveButtonPressed}
                                    timerTime={this.state.timerTime}
                                    formatTime={this.formatTime}/>
            else return <WorkspaceParameters setParamsSelected={this.setParamsSelected}/>
        } else if (this.state.window === 'map') {
            return <MapWindow workspaceNumber={this.state.workspaceNumber} 
                                changeWorkspace={this.changeWorkspace}
                                areParamsSelected={this.state.areParamsSelected}
                                isWorkspaceChosen={this.state.isWorkspaceChosen}/>
        } else if (this.state.window === 'settings') {
            return <Settings checkExit={this.props.checkExit}/>
        }
    }

    render() {
        return (
            <Container>
                <Header transparent style={styles.header}>
                    <Title style={styles.title}>APP NAME</Title>
                </Header>

                <MainHeader login={this.props.login} workspaceNumber={this.state.workspaceNumber}/>

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
