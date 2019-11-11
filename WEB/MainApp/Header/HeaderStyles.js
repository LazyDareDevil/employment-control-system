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
        marginLeft: '3%'
    },

    right: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',

        marginRight: '3%',
        // maxWidth: '50%'
    },

    elem: {
        alignItems: 'center',
        marginBottom: '5%',
        marginRight: '5%',
        marginLeft: '3%'
    },

    text: {
        color: 'white',
        fontFamily: 'roboto-light',
        fontSize: 15
    }
})

export default headerStyles
