import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import StepIndicator from "react-native-step-indicator";
import React, { useState } from "react";
import PersonalData from "./components/personalData";
import Identification from "./components/Identification";
import Position from "./components/Position";
import Skills from "./components/Skills";
import Final from "./components/Final";
import IPersona from "./IForm";

const labels = ["Identificação", "Dados", "Posicionamento", "Habilidades"];
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
        <Form nextStep={nextStep}></Form>
      </>
    );
  }

  function ResultForm() {
    return (
      <TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.modalText}>
                  {formattedObject}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => copy(JSON.stringify(form))}
                >
                  <Text style={styles.textStyle}>Compartilhar</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Fechar</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Ver informações</Text>
        </Pressable>
      </TouchableOpacity>
    );
  }

  const copy = (text: any) => {
    navigator.clipboard.writeText(text);
  };

  const [currentStep, setCurrentStep] = useState(0);
  const [form, setForm] = useState<IPersona>({} as IPersona);
  const [modalVisible, setModalVisible] = useState(false);
  const formattedObject = Object.entries(form).map(([key, value]) => (
    <Text key={key}>
      {key}: {value + "\n"}
    </Text>
  ));

  const nextStep = (params: IPersona) => {
    setForm({ ...form, ...params });
    if (currentStep < FORMS.length) setCurrentStep(currentStep + 1);
    if (currentStep + 1 === FORMS.length) {
      setCurrentStep(0);
    }
    test();
  };

  const test = () => {
    console.log(form);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar hidden />
        <StepIndicator
          labels={labels}
          currentPosition={currentStep}
          customStyles={customStyles}
          stepCount={4}
        />
        <StepForm />
        {currentStep === 4 ? <ResultForm /> : ""}
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modal: {
    flexDirection: "column",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    flexDirection: "column",
  },
});

// https://github.com/24ark/react-native-step-indicator
