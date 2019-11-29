import {StyleSheet} from 'react-native'

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
        // backgroundColor: 'green',
        flex: 5,
        width: '80%',
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        // backgroundColor: 'yellow'
    },

    button: {
        backgroundColor: 'rgba(229, 38, 37, 1)', 
        height: '75%', 
        borderRadius: 8, 
        width: '60%',
        justifyContent: 'center',
        maxWidth: 300
    }
})

export default styles