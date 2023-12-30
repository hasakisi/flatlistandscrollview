import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

const Listitem = ({item}) => {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  export default Listitem
