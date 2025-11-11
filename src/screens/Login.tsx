import React, { useState } from 'react';
import {  
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert
} from 'react-native';

function Login(){
    return (
        <View style={styles.container}>
            <Text>Login session</Text>
            <TextInput
                style={styles.input} 
                placeholder='joe@mail.com'
                placeholderTextColor='#3e3d3dff'
            />
            <TextInput
                style={styles.input} 
                placeholder='*************'
                placeholderTextColor='#3e3d3dff'
                secureTextEntry
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.btnLoginText}>Sign in</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2}>
                <Text style={styles.btnLoginText}>Sign up</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.registerText}>
                <Text style={styles.registerText}>
                    I don't have an account 
                    <Text style={styles.registerLink}>Sign up</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 50,
        paddingTop: 80,
        paddingBottom: 40
    },
    input: {
        width: "100%",
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ddd",
        paddingHorizontal: 15,
        marginBottom: 20,
    },
    button: {
        width: "100%",
        backgroundColor: "#007BFF",
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: "center",
        marginTop: 10
    },
    button2: {
        width: "100%",
        backgroundColor: "#ff0000ff",
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: "center",
        marginTop: 10
    },
    btnLoginText: {
        color: "#f4ececff",
        fontSize: 14,
        fontWeight: "bold"
    },
    registerText:{
        color: "#292828ff",
        marginTop: 30,
        fontSize: 14,
    },
    registerLink: {
        color: "#007BFF",
        fontWeight: "bold"
    }
});