import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const Listfooter = () => {
  return (
   <View style ={styles.footer}>
   <Text>
     Footer
   </Text>
 </View>
  )
}



const styles = StyleSheet.create({
    footer: {
      padding: 20,
      backgroundColor: "yellow",
    },
  
  });


export default Listfooter
