import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: 'rgba(10, 61, 179, 1.0)',
        justifyContent: 'center',
        alignContent: 'center',
    },
    
    signWindow: {
        width: '80%',
        maxWidth: 300,
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
        fontFamily: 'roboto-light',
        shadowRadius: 5,
        shadowOpacity: 1
    },
    
    authText: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center',
        marginVertical: '5%',
        fontFamily: 'roboto-light',
        textShadowRadius: 5,
        textShadowColor: 'black'
        // shadowRadius: 3,
        // shadowOpacity: 1
    },
    
    form: {
        height: '40%',
        flexDirection: 'column',
        justifyContent: "flex-start",
    },
  
    field: {
        paddingLeft: 20,
        minHeight: 50,
        height: '30%',
        maxHeight: 60,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowRadius: 10,
        shadowOpacity: 0.5,
        fontFamily: 'roboto-light',
        fontSize: 15,
        marginBottom: '3%',
        
    },
    
    signInBtn: {
        marginTop: '3%',
        alignSelf: 'center',
        backgroundColor: 'rgba(229, 38, 37, 1)',
        justifyContent: 'center',
        minHeight: 50,
        maxHeight: 50,
        alignContent: 'center',
        height: '12%',
        width: '35%',
        borderRadius: 100,
        shadowRadius: 10,
        shadowOpacity: 0.5,
    }
});

export default styles;