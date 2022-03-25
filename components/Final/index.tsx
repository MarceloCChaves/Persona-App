import { View, Text, StyleSheet } from "react-native";

export default function Final(){
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Você finalizou o seu cadastro</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 20,
  },
});