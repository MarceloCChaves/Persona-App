import { useState } from 'react';
import {View, Text, Picker, StyleSheet} from 'react-native'

export default function Position(){
  const [sector, onChangeSector] = useState("");
  const [office, onChangeOffice] = useState("");
  const [officeTitle, onChangeOfficeTitle] = useState("");
  return(
    <View style={styles.Container}>
      <Text style={styles.title}>Setor na empresa</Text>
      <Picker
        selectedValue={sector}
        style={{ height: 50, width: '90%', borderWidth: 1 }}
        onValueChange={(itemValue) => onChangeSector(itemValue)}
      >
        <Picker.Item label="Setor administrativo" value="SA" />
        <Picker.Item label="Setor financeiro" value="SF" />
        <Picker.Item label="Setor de RH" value="RH" />
      </Picker>
      <Text style={styles.title}>Cargo</Text>
      <Picker
        selectedValue={office}
        style={{ height: 50, width: '90%', borderWidth: 1 }}
        onValueChange={(itemValue) => onChangeOffice(itemValue)}
      >
        <Picker.Item label="Desenvolvedor" value="Desenvolvedor" />
        <Picker.Item label="Scrum master" value="SM" />
        <Picker.Item label="Gerente de projetos" value="GP" />
        <Picker.Item label="Product Owner" value="PO" />
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
})