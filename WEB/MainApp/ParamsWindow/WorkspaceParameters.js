import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {Button, Text} from 'native-base'
import ParameterButton from './ParameterButton'

export default class WorkspaceParameters extends Component {
    constructor(props){
        super(props)
    }

    state = {
        chosenParams: [false, false, false, false]
    }

    changeChosenParams = index => {
        var array = this.state.chosenParams
        if (!array[index]) {
            array[index] = true
        } else array[index] = false
        this.setState({
            chosenParams: array
        })
    }
    
    render() {
        return(
            <View style={{flex: 7, backgroundColor: '#F0FFFF' }}>
                <View style={styles.edgeBlock}>
                    <Button full disabled style={{backgroundColor: 'rgba(39, 171, 227, 1)', height: '75%'}}>
                        <Text style={styles.edgeBlockText}>Choose parameters</Text>
                    </Button>
                </View>

                <View style={styles.centerBlock}>
                
                    <ParameterButton name='Parameter #1' index={0} chosenParams={this.state.chosenParams}
                                        changeChosenParams={this.changeChosenParams}/>
                    <ParameterButton name='Parameter #2' index={1} chosenParams={this.state.chosenParams}
                                        changeChosenParams={this.changeChosenParams}/>
                    <ParameterButton name='Parameter #3' index={2} chosenParams={this.state.chosenParams}
                                        changeChosenParams={this.changeChosenParams}/> 
                    <ParameterButton name='Parameter #4' index={3} chosenParams={this.state.chosenParams}
                                        changeChosenParams={this.changeChosenParams}/> 

                </View>

                <View style={styles.edgeBlock}>
                    <Button style={{backgroundColor: 'rgba(229, 38, 37, 1)', height: '75%'}}
                            onPress={() => this.props.setParamsSelected(true)}>
                        <Text style={styles.edgeBlockText}>Select workspace</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    edgeBlock: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    edgeBlockText: {
        color: 'white',
        fontFamily: 'roboto-light'
    },

    centerBlock: {
        flex: 5,
        width: '80%',
        alignSelf: 'center',
        alignItems: 'baseline',
        alignContent: 'space-around',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    }

})