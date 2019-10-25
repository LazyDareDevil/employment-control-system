import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import FooterMenu from './FooterMenu'
import { Container, Title , Header } from 'native-base';
import WorkspaceParameters from './ParamsWindow/WorkspaceParameters'
import MapWindow from './MapComponents/MapWindow'
import Settings from './Settings'
import MainHeader from './MainHeader';
import SeatTimer from './SeatTimer'


export default class MainApp extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        window: 'workspace',
        workspaceNumber: null,
        isWorkspaceChosen: false,
        areParamsSelected: false
    }

    changeWindow = e => {
        this.setState({
            window: e,
        })
    }

    changeWorkspace = num => {
        if (num !== null) {
            this.setState({
                workspaceNumber: num,
                isWorkspaceChosen: true,
                window: 'workspace'
            })
        } else {
            this.setState({
                workspaceNumber: null,
                isWorkspaceChosen: false,
            })
        }
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
                return <SeatTimer changeWorkspace={this.changeWorkspace} 
                                    isWorkspaceChosen={this.state.isWorkspaceChosen}
                                    setParamsSelected={this.setParamsSelected}/>
            else return <WorkspaceParameters setParamsSelected={this.setParamsSelected}/>
        } else if (this.state.window === 'map') {
            return <MapWindow workspaceNumber={this.state.workspaceNumber} 
                                changeWorkspace={this.changeWorkspace}
                                areParamsSelected={this.state.areParamsSelected}/>
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

                <FooterMenu changeWindow={this.changeWindow} currentState={this.state.window} />
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
