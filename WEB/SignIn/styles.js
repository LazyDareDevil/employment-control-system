import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: 'rgba(35, 71, 152, 1.0)',
        justifyContent: 'center',
        alignContent: 'center',
    },
    
    signWindow: {
        width: '80%',
        height: 'auto',
        flexDirection: 'column',
        alignSelf: 'center',
        justifyContent: 'space-between',
    },
      
    appName: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 35,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'white',
        borderRadius: 5,
        padding: 20,
        fontFamily: 'roboto-light'
    },
    
    authText: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center',
        marginVertical: 20,
        fontFamily: 'roboto-light'
    },
    
    form: {
        height: '30%',
        color: 'rgba(0,0,0,0.3)',
        flexDirection: 'column',
        justifyContent: "space-between",
    },
  
    field: {
        paddingLeft: 20,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowRadius: 3,
        fontFamily: 'roboto-light',
        fontSize: 15,
        borderWidth: 3,
        borderColor: 'rgba(35, 71, 152, 1.0)',
    },
    
    signInBtn: {
        marginTop: 15,
        alignSelf: 'center',
        // textAlign: 'center',
        // textAlignVertical: 'center',
        // width: 100,
        // height: 50,
        // backgroundColor: 'rgba(229, 38, 37, 1)',
        // borderRadius: 5,
        // color: 'white',
    }
});

export default styles;