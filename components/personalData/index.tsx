import React, { useState } from 'react';
import IStep from "../../IStep";
import {View, Text, TextInput, StyleSheet, Picker, TouchableOpacity} from 'react-native'

export default function PersonalData({nextStep}: IStep){
  const [text, onChangeText] = useState("");
  const [phone, onChangePhone] = useState("");
  const [email, onChangeEmail] = useState("");
  const [selectedValueSex, setSelectedValueSex] = useState("Masculino");
  const [selectedValueSchooling, setSelectedSchooling] = useState("Analfabeto");
  return(
    <View style={styles.Container}>
      <Text style={styles.title}>Idade</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Insira sua idade"
        keyboardType='numeric'
      />
      <Text style={styles.title}>Sexo</Text>
      <Picker
        selectedValue={selectedValueSex}
        style={{ height: 50, width: '90%', borderWidth: 1 }}
        onValueChange={(itemValue) => setSelectedValueSex(itemValue)}
      >
        <Picker.Item label="Masculino" value="Masculino" />
        <Picker.Item label="Feminino" value="Feminino" />
        <Picker.Item label="Outro" value="Outro" />
      </Picker>
      <Text style={styles.title}>Grau de escolaridade</Text>
      <Picker
        selectedValue={selectedValueSchooling}
        style={{ height: 50, width: '90%', borderWidth: 1 }}
        onValueChange={(itemValue) => setSelectedSchooling(itemValue)}
      >
        <Picker.Item label="Analfabeto" value="Analfabeto" />
        <Picker.Item label="Ensino fundamental incompleto" value="Ensino Fundamental Incompleto" />
        <Picker.Item label="Ensino fundamental completo" value="Ensino Fundamental Completo" />
        <Picker.Item label="Ensino médio incompleto" value="Ensino Médio Incompleto" />
        <Picker.Item label="Ensino médio completo" value="Ensino Médio Completo" />
        <Picker.Item label="Superior completo (ou graduação)" value="Superior Completo" />
        <Picker.Item label="Pós-graduação" value="Pós Graduação" />
      </Picker>
      <Text style={styles.title}>Telefone</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangePhone}
        value={phone}
        placeholder="Insira o seu telefone"
        keyboardType='phone-pad'
      />
      <Text style={styles.title}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Insira o seu email"
        keyboardType='email-address'
      />
      <TouchableOpacity onPress={() => { nextStep({'email': email, 'phone': text, 'Idade': text , 'sexo': selectedValueSex, 'Grau': selectedValueSchooling}) }}>
        <Text style={styles.btn}>Avançar</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  Container:{
    alignItems: "center",
    justifyContent: 'center'
  },
  title:{
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 20
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    width: '90%'
  },
  btn: {
    backgroundColor: "#00ff",
    padding: 20,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
})