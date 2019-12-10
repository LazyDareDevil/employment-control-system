import {StyleSheet} from 'react-native'

const headerStyles = StyleSheet.create({
    header: {
        backgroundColor: 'rgba(10, 61, 179, 1.0)',
        height: '15%',
        maxHeight: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        // shadowRadius: 5
    },

    left: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '3%',
        marginBottom: '2%'
    },

    right: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '2%',
        marginRight: '3%',
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
