import React, {Component} from 'react'
import {View, TouchableHighlight, StyleSheet} from 'react-native'
import {Icon, Text} from 'native-base'

export default class ParameterButton extends Component {
    constructor(props) {
        super(props)
    }

    setOpacity = index => {
        return this.props.chosenParams[index] ? 1 : 0.5
    }

    setIcon = index => {
        return this.props.chosenParams[index] ? 'remove-circle-outline' : 'add-circle'
    }

    buttonPressed = index => {
        if (!this.props.isWorkspaceChosen) {
            this.props.changeChosenParams(index)
        }
    }

    render() {
        name = this.props.name.toString()
        const {index} = this.props
        return(
            <TouchableHighlight onPress={() => this.buttonPressed(index)} 
                                underlayColor='transparent'>
                <View style={[styles.button, {opacity: this.setOpacity(index)}]}>
                    <Icon style={{color: 'white', fontSize: 50}} name={this.setIcon(index)} />
                    <Text style={{color: 'white', fontSize: 12, fontFamily: 'roboto-light'}}>
                        {name}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'rgba(35, 71, 152, 1.0)',
        justifyContent: 'space-around',
        borderRadius: 5,
        height: '35%',
        aspectRatio: 1/1,
    }
})