import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    topBlock: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    bottomBlock: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    takeButton: {
        backgroundColor: 'rgba(39, 171, 227, 1)',
        height: '75%'
    },

    anotherPlaceButton: {
        backgroundColor: 'rgba(229, 38, 37, 1)',
        height: '75%'
    },

    buttonText: {
        color: 'white',
        fontFamily: 'roboto-light'
    }
})

export default styles