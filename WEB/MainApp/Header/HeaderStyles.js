import {StyleSheet} from 'react-native'

const headerStyles = StyleSheet.create({
    header: {
        backgroundColor: 'rgba(35, 71, 152, 1.0)',
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    left: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '5%'
    },

    right: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: '5%'
    },

    elem: {
        alignItems: 'center',
        marginBottom: '5%',
        marginRight: '5%',
        marginLeft: '3%'
    },

    text: {
        color: 'white',
        fontFamily: 'roboto-light'
    }
})

export default headerStyles
