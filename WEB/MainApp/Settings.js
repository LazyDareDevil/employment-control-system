import React, {Component} from 'react'
import {View, StyleSheet, Alert } from 'react-native'
import { Button, Text, Container } from 'native-base'

export default class Workspace extends Component {
    constructor(props){
        super(props)
    }

    // confirmExit = () => {
    //     let checking = Alert.alert(
    //         'Are you sure?',
    //         '',
    //         [
    //             {text: 'Yes', onPress: () => true},
    //             {text: 'No', onPress: () => false, style: 'cancel'},
    //         ],
    //         {cancelable: false},
    //     );
        
    //     return checking
    // }

    render() {
        const {checkExit} = this.props
        return(
            <Container style={{flex: 12, backgroundColor: 'rgba(211, 211, 211, 0.4)'}}>
                <View style={{flex: 1}}></View>
                <View style={styles.mainView}>
              
                        <Button style={{backgroundColor: 'rgba(39, 171, 227, 1)', height: '15%'}}>
                            <Text style={styles.text}>View history</Text>
                        </Button>
                        <Button style={{backgroundColor: 'rgba(39, 171, 227, 1)', height: '15%'}}>
                            <Text style={styles.text}>Set default parameters</Text>
                        </Button>
                        <Button style={{backgroundColor: 'rgba(39, 171, 227, 1)', height: '15%'}}>
                            <Text style={styles.text}>Sth else</Text>
                        </Button>

                        <Button style={{backgroundColor: 'rgba(229, 38, 37, 1)', height: '15%'}}
                                onPress={() => checkExit(true)}>
                            <Text style={styles.text}>Exit</Text>
                        </Button>
                  
                </View>
                <View style={{flex: 1}}></View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 10,
        alignItems: 'center', 
        justifyContent: "space-around",
    },

    text: {
        color: 'white',
        fontFamily: 'roboto-light'
    }
})