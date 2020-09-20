import React from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { openURL } from '../../utils/Utility'

const GuestList = (props) => {
    let item = props.item;

    return (
        <View key={item.id} style={Style.card}>
            <Text style={Style.name}>{item.name}</Text>
            <TouchableOpacity style={Style.button} onPress={() => {
                openURL("mailto:" + item.email);
            }}>
                <Text style={Style.email}>{item.email}</Text>
            </TouchableOpacity>
        </View>
    )
}

const Style = StyleSheet.create({
    card: {
        marginBottom: 20, marginHorizontal: 15, padding: 15, borderRadius: 5, borderWidth: 1, borderColor: "#cccccc",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: Platform.OS == 'ios' ? 1 : 4,
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16
    },
    button: {
        padding: 5,
        marginVertical: 4
    },
    email: {
        color: "rgb(100, 149, 237)"
    }
});


export default GuestList;