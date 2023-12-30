import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const Listheader = () => {
  return (
   <View style ={styles.header}>
   <Text>
     Header
   </Text>
 </View>
  )
}



const styles = StyleSheet.create({
    header: {
      padding: 20,
      backgroundColor: "bisque",
    },
  
  });


export default Listheader
