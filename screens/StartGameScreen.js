import React, { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";

function StartGameScreen({pickedNumber}) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function handleInputNumber(enteredText) {
    setEnteredNumber(enteredText);
  }

  function handleResetNumber(){
    setEnteredNumber("")
  }

  function handleConfirm() {
    const choosenNumber = parseInt(enteredNumber);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert("Invalid Number", "Please Enter Number between 1 to 99.", [
        { text: "Okay", style: "destructive", onPress: handleResetNumber },
      ]);
      return;
    }

    pickedNumber(choosenNumber)
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        value={enteredNumber}
        onChangeText={handleInputNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handleResetNumber}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#3f0321",
    borderRadius: 8,
    elevation: 4,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    marginBottom: 20,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
