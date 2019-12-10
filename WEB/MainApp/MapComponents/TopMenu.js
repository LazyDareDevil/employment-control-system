import React, { Component } from 'react'
import styles from './MapWindowStyles'
import {View, TextInput} from 'react-native'
import {Button, Icon, Text} from 'native-base'

export default class TopMenu extends Component {
    state = {
        isEditable: this.props.workspaceNumber === null ? true : false
    }


    render() {
        if (this.props.areParamsSelected) {
            return (
                <View style={styles.topBlock}>
                    {/* <TextInput style={styles.seatInput}
                                placeholder='№'
                                onChangeText={val => this.props.setLocalSeat(parseInt(val))}
                                maxLength={1}
                                editable={this.state.isEditable}
                                /> */}
                    <Button transparent icon style={{height: '100%'}}>
                        <Icon name='navigate' style={{color: 'rgba(39, 171, 227, 1)', fontSize: 35}} />
                    </Button>
                </View>
            )
        } else return (
            <View style={styles.topBlock}></View>
        )
    }
}