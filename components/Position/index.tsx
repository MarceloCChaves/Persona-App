import { useState } from 'react';
import {View, Text, Picker, StyleSheet, TouchableOpacity} from 'react-native'
import IStep from "../../IStep";

export default function Position({nextStep}: IStep){
  const [sector, onChangeSector] = useState("Setor Administrativo");
  const [office, onChangeOffice] = useState("Desenvolvedor");
  const [officeTitle, onChangeOfficeTitle] = useState("Ceo");
  return(
    <View style={styles.Container}>
      <Text style={styles.title}>Setor na empresa</Text>
      <Picker
        selectedValue={sector}
        style={{ height: 50, width: '90%', borderWidth: 1 }}
        onValueChange={(itemValue) => onChangeSector(itemValue)}
      >
        <Picker.Item label="Setor administrativo" value="Setor Adm" />
        <Picker.Item label="Setor financeiro" value="Setor financeiro" />
        <Picker.Item label="Setor de RH" value="Setor RH" />
      </Picker>
      <Text style={styles.title}>Cargo</Text>
      <Picker
        selectedValue={office}
        style={{ height: 50, width: '90%', borderWidth: 1 }}
        onValueChange={(itemValue) => onChangeOffice(itemValue)}
      >
        <Picker.Item label="Desenvolvedor" value="Desenvolvedor" />
        <Picker.Item label="Scrum master" value="Scrum Master" />
        <Picker.Item label="Gerente de projetos" value="Gerente de Projetos" />
        <Picker.Item label="Product Owner" value="Product Owner" />
      </Picker>
      <Text style={styles.title}>Titulo de ofício</Text>
      <Picker
        selectedValue={officeTitle}
        style={{ height: 50, width: '90%', borderWidth: 1 }}
        onValueChange={(itemValue) => onChangeOfficeTitle(itemValue)}
      >
        <Picker.Item label="Ceo" value="Ceo" />
        <Picker.Item label="Diretor" value="Diretor" />
        <Picker.Item label="Presidente" value="Presidente" />
      </Picker>
      <TouchableOpacity onPress={() => { nextStep({'Setor': sector, 'Cargo': office, 'Título': officeTitle}) }}>
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