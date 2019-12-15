import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    topBlock: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // justifyContent: 'space-around',
        alignItems: 'center',
        shadowRadius: 1,
        shadowOpacity: 0.1
    },

    bottomBlock: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },

    takeButton: {
        backgroundColor: 'rgba(39, 171, 227, 1)',
        height: '75%',
        maxHeight: 60,
        borderRadius: 8
    },

    anotherPlaceButton: {
        backgroundColor: 'rgba(229, 38, 37, 1)',
        height: '75%',
        maxHeight: 60,
        borderRadius: 8
    },

    buttonText: {
        color: 'white',
        fontFamily: 'roboto-light'
    },

    // seatInput: {
    //     backgroundColor: 'white', 
    //     height: '75%', 
    //     borderRadius: 8, 
    //     width: '20%',
    //     maxWidth: 50,
    //     justifyContent: 'center',
    //     textAlign: 'center',
    //     paddingHorizontal: 7,
    //     color: 'rgba(10, 61, 179, 1.0)',
    // }
})

export default styles