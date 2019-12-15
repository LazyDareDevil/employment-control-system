import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {Button, Text, Container} from 'native-base'
import ParameterButton from './ParameterButton'
import styles from './ParametersStyles'
import BottomButton from './BottomButton'

export default class WorkspaceParameters extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        var { chosenParameters } = this.props
        var { changeChosenParams } = this.props
        var { isWorkspaceChosen } = this.props
        return(
            <Container style={{flex: 7, backgroundColor: 'rgba(211, 211, 211, 0.4)'}}>
                <View style={styles.edgeBlock}>
                    <Button full disabled style={styles.topButton}>
                        <Text style={styles.edgeBlockText}>
                            {isWorkspaceChosen ? 'Chosen parameters' : 'Choose parameters'}
                        </Text>
                    </Button>
                </View>

                <View style={styles.centerBlock}>
                    <ParameterButton name='Parameter #1' index={0} chosenParams={chosenParameters}
                                        changeChosenParams={changeChosenParams}
                                        isWorkspaceChosen={isWorkspaceChosen}/>
                    <ParameterButton name='Parameter #2' index={1} chosenParams={chosenParameters}
                                        changeChosenParams={changeChosenParams}
                                        isWorkspaceChosen={isWorkspaceChosen}/>
                    <ParameterButton name='Parameter #3' index={2} chosenParams={chosenParameters}
                                        changeChosenParams={changeChosenParams}
                                        isWorkspaceChosen={isWorkspaceChosen}/> 
                    <ParameterButton name='Parameter #4' index={3} chosenParams={chosenParameters}
                                        changeChosenParams={changeChosenParams}
                                        isWorkspaceChosen={isWorkspaceChosen}/> 
                </View>

                <View style={styles.edgeBlock}>
                    <BottomButton isWorkspaceChosen={isWorkspaceChosen}
                                    setParamsSelected={this.props.setParamsSelected}
                                    leaveButtonPressed={this.props.leaveButtonPressed} />
                </View>
            </Container>
        );
    }
}

// const styles = StyleSheet.create({
//     edgeBlock: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },

//     edgeBlockText: {
//         color: 'white',
//         fontFamily: 'roboto-light'
//     },

//     centerBlock: {
//         // backgroundColor: 'green',
//         flex: 5,
//         width: '80%',
//         alignSelf: 'center',
//         alignItems: 'baseline',
//         flexDirection: 'row',
//         alignContent: 'space-around',
//         justifyContent: 'space-around',
//         flexWrap: 'wrap'
//     }

// })