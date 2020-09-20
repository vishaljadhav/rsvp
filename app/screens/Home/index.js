import React, { useEffect, useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, Alert
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

import * as action from '../../store/actions';

import { Input, Date } from '../../components';

import style from '../../assets/styles/theme';
import { TouchableHighlight } from 'react-native-gesture-handler';

const Home = (props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [profession, setProfession] = useState('');
  const [locality, setLocality] = useState('');
  const [noOfGuests, setNoOfGuests] = useState(0);
  const [address, setAddress] = useState('');


  const dispatch = useDispatch();
  const saveGuest = useSelector(state => state.create_guest_reducer);

  useEffect(() => {

    if (saveGuest.isSuccess === true & saveGuest.data) {
      Alert.alert(
        "Create Guest",
        "Record Saved",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
      dispatch(action.resetCreatGuest())
    }
  })

  const __onPress = () => {
    try {
      dispatch(action.creatGuest({ name, age, profession, locality, noOfGuests, address }))
    } catch (e) {
      console(e)
    }
  }

  return (
    <SafeAreaView style={style.sf_wpr}>
      <ScrollView>
        <View style={style.cnt_wpr}>
          <Text style={style.header}>Add Guest</Text>
          <Input
            onChangeText={(res) => {
              setName(res)
            }} label="Guest Name"
            required={true} />

          <Input onChangeText={(res) => {
            setAge(res)
          }} label="Age" keyboard="number"
            required={true} />

          <Date label="Date" />

          <Input onChangeText={(res) => {
            setProfession(res)
          }} label="Profession" />

          <Input onChangeText={(res) => {
            setLocality(res)
          }} label="Locality" />

          <Input onChangeText={(res) => {
            setNoOfGuests(res)
          }} label="No of Guests" keyboard="number" />

          <Input onChangeText={(res) => {
            setAddress(res)
          }} label="Address" />


          <TouchableHighlight style={Style.button} onPress={__onPress}>
            <Text style={Style.buttonText}>Submit</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Style = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#FFcc00'
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold"
  }
})

export default Home;