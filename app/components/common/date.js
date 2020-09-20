import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePkr = (props) => {
    const [date, setDate] = useState(new Date());
    const [displayDate, setDisplayDate] = useState(false);

    const onChange = (res, selectedDate) => {
        const currentDate = selectedDate || date;
        console.log(currentDate)
        setDisplayDate(!displayDate)
        setDate(currentDate)
        // props.onChange(res)
    }
    return (
        <View>
            <View style={Style.FieldBox}>
                <Text style={Style.Label}>{props.label}</Text>
                <TouchableOpacity
                    style={Style.Input}
                    onPress={() => {
                        setDisplayDate(!displayDate)
                    }}
                ><Text style={{ color: "#cccccc" }}>{props.label}</Text></TouchableOpacity>

            </View>
            {
                displayDate &&

                <DateTimePicker
                    testID="dateTimePicker"
                    value={new Date()}
                    mode={'date'}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />

            }</View>
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

export default DatePkr;