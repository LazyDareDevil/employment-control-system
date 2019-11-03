import {StyleSheet} from 'react-native'

const timerStyles = StyleSheet.create({
    mainView: {
        flex: 7,
        backgroundColor: 'gray',
    },

    block: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    centerBlock: {
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        paddingBottom: '5%',
    },

    stopWatch: {
        color: 'white',
        fontSize: 40,
        fontFamily: 'roboto-light'
    },

    edgeBlockText: {
        fontFamily: 'roboto-light'
    },

    leaveButton: {
        backgroundColor: 'rgba(229, 38, 37, 1)', 
        height: '75%'
    },

    yourTimeButton: {
        backgroundColor: 'rgba(39, 171, 227, 1)', 
        height: '75%'
    }
})

export default timerStyles