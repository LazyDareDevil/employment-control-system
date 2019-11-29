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

    setColor = index => {
        return this.props.chosenParams[index] ? 'rgba(10, 61, 179, 1.0)' : 'rgb(166, 202, 240)'
    }

    setIcon = index => {
        return this.props.chosenParams[index] ? 'add-circle' : 'remove-circle-outline'
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
                                underlayColor='transparent'
                                style={{height: '20%', width: '60%', maxWidth: 250}}>
                {/* <View style={[styles.button, {opacity: this.setOpacity(index)}]}> */}
                <View style={[styles.button, {backgroundColor: this.setColor(index)}]}>
                    <Icon style={{color: 'white', fontSize: 30}} name={this.setIcon(index)} />
                    <Text style={{color: 'white', fontSize: 12, fontFamily: 'roboto-light'}}>
                        {name}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        height: '20%', 
        width: '60%', 
        maxWidth: 250
    },

    button: {
        alignItems: 'center',
        backgroundColor: 'rgb(10, 61, 179)',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 8,
        height: '100%',
        // width: '40%',
        // aspectRatio: 1/1,
        // margin: 10
    }
})