import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Checkbox } from 'react-native-paper';

const MyComponent = () => {
  const [checkedComunicative, setCheckedComunicative] = useState(false);
  const [checkedColaborative, setCheckedColaborative] = useState(false);
  const [checkedCreative, setCheckedCreative] = useState(false);
  const [checkedDecision, setCheckedDecision] = useState(false);
  const [checkedProjects, setCheckedProjects] = useState(false);
  const [checkedLeader, setCheckedLeader] = useState(false);

  return (
    <View style={styles.Container}>
      <Text style={styles.title}>Marque algumas de suas habilidades</Text>
      <View style={styles.alternative}>
      <Checkbox
        status={checkedComunicative ? 'checked' : 'unchecked'}
        onPress={() => {
          setCheckedComunicative(!checkedComunicative);
        }}
      />
      <Text style={{ display: 'flex', alignItems: 'center'}}>Comunicativo</Text>
      </View>
      <View style={styles.alternative}>
      <Checkbox
        status={checkedColaborative ? 'checked' : 'unchecked'}
        onPress={() => {
          setCheckedColaborative(!checkedColaborative);
        }}
      />
      <Text style={{ display: 'flex', alignItems: 'center'}}>Colaborativo</Text>
      </View>
      <View style={styles.alternative}>
      <Checkbox
        status={checkedCreative ? 'checked' : 'unchecked'}
        onPress={() => {
          setCheckedCreative(!checkedCreative);
        }}
      />
      <Text style={{ display: 'flex', alignItems: 'center'}}>Criativo</Text>
      </View>
      <View style={styles.alternative}>
      <Checkbox
        status={checkedDecision ? 'checked' : 'unchecked'}
        onPress={() => {
          setCheckedDecision(!checkedDecision);
        }}
      />
      <Text style={{ display: 'flex', alignItems: 'center'}}>Tomada de decisão</Text>
      </View>
      <View style={styles.alternative}>
      <Checkbox
        status={checkedProjects ? 'checked' : 'unchecked'}
        onPress={() => {
          setCheckedProjects(!checkedProjects);
        }}
      />
      <Text style={{ display: 'flex', alignItems: 'center'}}>Gestor de projetos</Text>
      </View>
      <View style={styles.alternative}>
      <Checkbox
        status={checkedLeader ? 'checked' : 'unchecked'}
        onPress={() => {
          setCheckedLeader(!checkedLeader);
        }}
      />
      <Text style={{ display: 'flex', alignItems: 'center'}}>Liderança técnica</Text>
      </View>
    </View>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignContent: 'center'
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 20,
  },
  alternative: {
    flexDirection: 'row',
  }
});