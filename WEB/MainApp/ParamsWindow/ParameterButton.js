import React, {Component} from 'react'
import {View, TouchableHighlight, StyleSheet} from 'react-native'
import {Icon, Text} from 'native-base'

export default class ParameterButton extends Component {
    constructor(props) {
        super(props)
    }

    setOpacity = index => {
        return this.props.chosenParams[index] ? 0.7 : 1
    }

    setIcon = index => {
        return this.props.chosenParams[index] ? 'remove-circle-outline' : 'add-circle'
    }

    render() {
        name = this.props.name.toString()
        const {index} = this.props

        return(
            <TouchableHighlight onPress={() => this.props.changeChosenParams(index)} 
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
        width: '40%',
        aspectRatio: 1/1,
        // opacity: this.setOpacity(num)
    }
})