import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';


const Input = (props) => {

    var { keyboard } = props;

    const __getKeyboard = (keyboard) => {
        let kT = 'default';

        switch (keyboard) {
            case 'email':
                kT = 'email-address';
                break;

            case 'number':
                kT = 'number-pad';
                break;

            case 'phone':
                kT = 'phone-pad';
                break;

            case 'decimal':
                kT = 'decimal-pad';
                break;
        }
        return (kT);
    }

    return (
        <View style={Style.FieldBox}>
            <Text style={Style.Label}>{props.label}</Text>
            <TextInput
                style={Style.Input}
                placeholder={props.label}
                keyboardType={__getKeyboard(keyboard)}

                onChangeText={(res) => {
                    props.onChangeText(res)
                }}
            />
        </View>
    )
}

const Style = StyleSheet.create({
    FieldBox: {
        padding: 4,
        marginBottom: 10
    },
    Label: {
        marginBottom: 5
    },
    Input: {
        fontSize: 18,
        borderColor: "#cccccc",
        borderWidth: 1,
        padding: 8
    }
})

export default Input;