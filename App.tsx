import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import StepIndicator from "react-native-step-indicator";
import React, { useState } from "react";
import PersonalData from "./components/personalData";
import Identification from "./components/Identification";
import Position from "./components/Position";
import Skills from "./components/Skills";
import Final from "./components/Final";

const labels = ["Identificação", "Dados", "Posicionamento", "Habilidades" ,"Finalizar"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: "#0000ff",
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: "#0000ff",
  stepStrokeUnFinishedColor: "#aaaaaa",
  separatorFinishedColor: "#0000ff",
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: "#00ffff",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: "#0000ff",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#aaaaaa",
  labelColor: "#999999",
  labelSize: 13,
  currentStepLabelColor: "#0000ff",
};
const FORMS = [
  { component: Identification },
  { component: PersonalData },
  { component: Position },
  { component: Skills },
  { component: Final },
];
export default function App() {
  function StepForm() {
    const Form = FORMS[currentStep].component;
    return (
      <>
        <Form></Form>
        <TouchableOpacity
          onPress={() => {
            nextStep();
          }}
        >
          <Text style={styles.btn}>
            {currentStep === 3 ? "Finalizar" : "Avançar"}
          </Text>
        </TouchableOpacity>
      </>
    );
  }

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < FORMS.length) setCurrentStep(currentStep + 1);
    if(currentStep+1 === FORMS.length){
      alert("Formulário finalizado")
      setCurrentStep(0)
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar hidden />
        <StepIndicator
          labels={labels}
          currentPosition={currentStep}
          customStyles={customStyles}
          stepCount={5}
        />
        <StepForm />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
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

// https://github.com/24ark/react-native-step-indicator
