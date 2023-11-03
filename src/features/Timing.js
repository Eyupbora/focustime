import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RoundedButton } from '../components/RoundedButton'
import { fontSizes, spacing } from '../utils/sizes'

export default function Timing({onChangeTime}) {
  return (
    <View style={styles.timingButton}>
      <RoundedButton size={75} title='10' onPress={() => onChangeTime(10)}/>
      <RoundedButton size={75} title='15' onPress={() => onChangeTime(15)}/>
      <RoundedButton size={75} title='20' onPress={() => onChangeTime(20)}/>
    </View>
  )
}

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    flexDirection: 'row',
    gap: spacing.xxl,
  }
})