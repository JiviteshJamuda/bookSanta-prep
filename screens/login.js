import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Login extends React.Component {
    render(){
        return(
            <View>
                <Text>Login screen</Text>
                <TouchableOpacity style={styles.button}>
                    <Text>LOGIN</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button : {
        borderWidth : 2,
    }
})