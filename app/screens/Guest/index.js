import React, { useEffect } from 'react';
import {
  View, Text, FlatList
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import style from '../../assets/styles/theme';

import GuestData from '../../assets/mock_data.json';

import { GuestListTemplate } from '../../components'


const Guest = (props) => {

  return (
    <SafeAreaView style={style.sf_wpr}>
      <View style={[style.cnt_wpr, { marginHorizontal: 0 }]}>
        <Text style={[style.header, { marginHorizontal: 10 }]}>List Of Attendees</Text>
        <View>
          <FlatList
            data={GuestData}
            renderItem={
              (item) => {
                return (<GuestListTemplate item={item.item} />)
              }
            }

          />
        </View>
      </View>
    </SafeAreaView>
  );
}


export default Guest;
