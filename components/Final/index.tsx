import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Final(){
  return(
    <View style={styles.Container}>
      <Text style={styles.text}>Voce finalizou o cadastro</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24
  }
})