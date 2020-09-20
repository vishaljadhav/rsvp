import React, { useEffect } from 'react';
import {
  View, Text
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import style from '../../assets/styles/theme';

const Stats = (props) => {
  return (
    <SafeAreaView style={style.sf_wpr}>
      <View style={style.cnt_wpr}>
        <Text>Stats</Text>
      </View>
    </SafeAreaView>
  );
}

export default Stats;
