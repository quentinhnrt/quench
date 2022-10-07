import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from "react-native";
import { React, useState, useEffect } from "react";

export default function Register() {

  const [data, setData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: '',
  });

  const [step, setStep] = useState(1);

  function Step1() {

    function setPassword(password) {
      let data = { ...data };
      data.password = password;
      setData(data);
    }

    function setConfirmPassword(confirmPassword) {
      let data = { ...data };
      data.confirmPassword = confirmPassword;
      setData(data);
    }


    return (
      <View>
        <TextInput style={style.inputs} value={data.name} placeholder="Name" />
        <TextInput style={style.inputs} value={data.email} placeholder="Email" />
        <TextInput style={style.inputs} value={data.phone}  placeholder="Phone Number" />
      </View>
    )
  }


  function Step2() {
    return (
      <View>
        <TextInput style={style.inputs} secureTextEntry={true} value={data.password}  onChangeText={(e) => setPassword(e)} placeholder="Password" />
        <TextInput style={style.inputs} secureTextEntry={true} value={data.confirmPassword} onChangeText={(e) => setConfirmPassword(e)} placeholder="Confirm password" />
      </View>
    )
  }

  function next() {
    console.log(data);
  }

  function register() {
    console.log(data);
  }


  return (
    <View style={{ gap: 20 }}>
      <View>
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
      </View>
      {step === 1 ?

        <TouchableOpacity onPress={() => next()} style={style.buttonStyle}>
          <Text>Next</Text>
        </TouchableOpacity>

        :

        <View>
          <TouchableOpacity onPress={() => setStep(step-1)} style={style.buttonStyle}>
            <Text>Before</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => register()} style={style.buttonStyle}>
            <Text>Register</Text>
          </TouchableOpacity>
        </View>
      }
    </View>
  );
}

const style = StyleSheet.create({
  inputs: {
    backgroundColor: "#fff",
    borderColor: 'lightgrey',
    borderStyle: 'solid',
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  buttonStyle: {
    borderColor: 'lightgrey',
    borderStyle: 'solid',
    borderWidth: 2,
    paddingVertical: 2,
    width: '25%',
    marginLeft: 'auto',
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
  }
})