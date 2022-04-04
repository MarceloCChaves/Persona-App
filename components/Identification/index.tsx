import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { BigHead } from "react-native-bigheads";
import { RadioButton } from "react-native-paper";
import IStep from "../../IStep";

export default function Identification({nextStep}: IStep) {
  const [text, onChangeText] = useState("");
  const [value, setValue] = useState('');
  const [checkedReact, setCheckedReact] = useState(false);
  const [checkedGraph, setCheckedGraph] = useState(false);
  const [checkedVue, setCheckedVue] = useState(false);
  return (
    <View style={styles.Container}>
      <Text style={styles.title}>1. Insira um nome</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Insira seu nome"
      />
      <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
      <Text style={styles.title}>2. Selecione o seu avatar</Text>
      <BigHead
        accessory="none"
        bgColor="blue"
        bgShape="circle"
        body="chest"
        clothing="shirt"
        clothingColor="black"
        eyebrows="serious"
        eyes="normal"
        facialHair="none"
        graphic="react"
        hair="short"
        hairColor="blonde"
        hat="none"
        hatColor="green"
        lashes={false}
        lipColor="purple"
        mouth="openSmile"
        showBackground={true}
        size={300}
        skinTone="light"
      />
      <View style={{ display: "flex", alignItems: "center" }}>
        <RadioButton
          value="React"
          status={checkedReact ? "checked" : "unchecked"}
          onPress={() => {
            setCheckedReact(!checkedReact);
          }}
        />
        <Text>React Avatar</Text>
      </View>
      <BigHead
        accessory="none"
        bgColor="red"
        bgShape="circle"
        body="chest"
        clothing="shirt"
        clothingColor="black"
        eyebrows="serious"
        eyes="normal"
        facialHair="none"
        graphic="graphQL"
        hair="short"
        hairColor="blonde"
        hat="none"
        hatColor="green"
        lashes={false}
        lipColor="purple"
        mouth="openSmile"
        showBackground={true}
        size={300}
        skinTone="light"
      />
      <View style={{ display: "flex", alignItems: "center" }}>
        <RadioButton
          value="GraphQl"
          status={checkedGraph ? "checked" : "unchecked"}
          onPress={() => {
            setCheckedGraph(!checkedGraph);
          }}
        />
        <Text>GraphQL Avatar</Text>
      </View>
      <BigHead
        accessory="none"
        bgColor="green"
        bgShape="circle"
        body="chest"
        clothing="shirt"
        clothingColor="black"
        eyebrows="serious"
        eyes="normal"
        facialHair="none"
        graphic="vue"
        hair="short"
        hairColor="blonde"
        hat="none"
        hatColor="green"
        lashes={false}
        lipColor="purple"
        mouth="openSmile"
        showBackground={true}
        size={300}
        skinTone="light"
      />
      <View style={{ display: "flex", alignItems: "center" }}>
        <RadioButton
          value="Vue"
          status={checkedVue ? "checked" : "unchecked"}
          onPress={() => {
            setCheckedVue(!checkedVue);
          }}
        />
        <Text>Vue Avatar</Text>
      </View>
      </RadioButton.Group>
      <TouchableOpacity onPress={() => { nextStep({'Nome' : text, 'avatar': value}) }}>
        <Text style={styles.btn}>Avançar</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    width: "90%",
  },
  btn: {
    backgroundColor: "#00ff",
    padding: 20,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});
