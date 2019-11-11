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
        alignItems: 'baseline',
        flexDirection: 'row',
        alignContent: 'space-around',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    }

})

export default styles