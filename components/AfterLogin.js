import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

export default class AfterLogin extends Component<{}> {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
    };
  }

  static navigationOptions = {
    title: 'Enter Details',
  };

  // static navigationOptions = {
  //   title: 'Login Page',
  //   headerTintColor: '#ffffff',
  //   headerStyle: {
  //     backgroundColor: '#1c313a',
  //     borderBottomColor: '#bbb',
  //     borderWidth: 2,
  //   },
  // };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={true}>
        <View style={styles.container}>
          <View>
            <Image
              style={{ width: 250, height: 150, paddingTop: -35, marginTop: 35 }}
              source={require('../assets/Splashscreen4.png')}
            />
          </View>
          <KeyboardAvoidingView style={styles.container} behavior="padding">
            <StatusBar backgroundColor="blue" barStyle="light-content" />
            <TextInput
              style={styles.inputstyle}
              placeholder="Name"
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholderTextColor="#5475a8"
              keyboardType="default"
            />
            <TextInput
              style={styles.inputstyle}
              placeholder="Mobile"
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholderTextColor="#5475a8"
              keyboardType={'numeric'}
            />
            <TextInput
              style={styles.inputstyle}
              placeholder="Email id"
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholderTextColor="#5475a8"
              keyboardType="email-address"
            />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('OTP')}
              style={styles.button}>
              <Text style={styles.buttonText}>Generate OTP</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  inputstyle: {
    height: 45,
    width: 300,
    backgroundColor: '#e7e7e7',
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 15,
    borderRadius: 35,
    paddingHorizontal: 16,
    borderColor: 'black',
    color: '#5475a8',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2F6DA4',
    height: 45,
    width: 300,
    marginBottom: 0,
    fontWeight: 'bold',
    fontSize: 18,
    borderRadius: 25,
    color: '#ffffff',
    paddingVertical: 12,
    borderColor: '#FFC000',
    borderWidth: 2,
  },
});
