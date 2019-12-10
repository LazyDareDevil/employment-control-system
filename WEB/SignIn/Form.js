import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles'

const Form = ({loginInput, passwordInput, serverInput}) => (
    <View style={styles.form}>
        <TextInput style={styles.field}
            placeholder={'login'} 
            textContentType={"username"}
            onChangeText={val => loginInput(val)}
        />
        <TextInput style={styles.field}
            placeholder={'password'}
            textContentType={'password'}
            onChangeText={val => passwordInput(val)}
            secureTextEntry={true}
        />
        <TextInput style={styles.field}
            placeholder={'server'}
            onChangeText={val => serverInput(val)}
        />
    </View>
)

export default Form;
