import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import AuthHelper from "../../helpers/AuthHelper";

export default function Register() {

  const [data, setData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: '',
  });

  const [step, setStep] = useState(1);

  function setName(name) {
    let datas = { ...data };
    datas.name = name;
    setData(datas);
  }

  function setPhone(phone) {
    let datas = { ...data };
    datas.phone = phone;
    setData(datas);
  }

  function setEmail(email) {
    let datas = { ...data };
    datas.email = email;
    setData(datas);
  }

  function setPassword(password) {
    let datas = { ...data };
    datas.password = password;
    setData(datas);
  }

  function setConfirmPassword(confirmPassword) {
    let datas = { ...data };
    datas.confirmPassword = confirmPassword;
    setData(datas);
  }


  function register() {
    new AuthHelper().register(data.email, data.name, data.phone, data.password, data.confirmPassword);
  }


  return (
    <View style={{ gap: 20 }}>
      <View>
        {step === 1 &&

          <View>
            <TextInput style={style.inputs} value={data.name} onChangeText={(e) => setName(e)} placeholder="Name" />
            <TextInput style={style.inputs} value={data.email} onChangeText={(e) => setEmail(e)} placeholder="Email" />
            <TextInput style={style.inputs} value={data.phone} onChangeText={(e) => setPhone(e)} placeholder="Phone Number" />
          </View>

        }
        {step === 2 &&

          <View>
            <TextInput style={style.inputs} secureTextEntry={true} value={data.password} onChangeText={(e) => setPassword(e)} placeholder="Password" />
            <TextInput style={style.inputs} secureTextEntry={true} value={data.confirmPassword} onChangeText={(e) => setConfirmPassword(e)} placeholder="Confirm password" />
          </View>

        }
      </View>
      {step === 1 ?

        <TouchableOpacity onPress={() => setStep(step + 1)} style={style.buttonStyle}>
          <Text>Next</Text>
        </TouchableOpacity>

        :

        <View>
          <TouchableOpacity onPress={() => setStep(step - 1)} style={style.buttonStyle}>
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