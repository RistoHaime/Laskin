import { StatusBar } from 'expo-status-bar';
import { Button, Text, TextInput, View, StyleSheet } from "react-native";
import  { useState } from 'react';

export default function Calculator({navigation}) {
  const [numA, setNumA] = useState("");
  const [numB, setNumB] = useState("");
  const [message, setMessage] = useState("");
  
  const [history, setHistory] = useState([]);

  const handlePlus = () => {
    const plus = parseFloat(numA) + parseFloat(numB);
    if (isNaN(plus)){
      Alert.alert("insert numbers")
    }
    else{
    setMessage("answer:" + plus);
    setHistory([...history, {key: parseFloat(numA) + "+" + parseFloat(numB) + "=" + plus}])
    }
  };
  const handleMinus = () => {
    const minus = parseFloat(numA) - parseFloat(numB);
    if (isNaN(minus)){
      Alert.alert("insert numbers")
    }
    else{
    setMessage("answer:" + minus);
    setHistory([...history, {key: parseFloat(numA) + "-" + parseFloat(numB) + "=" + minus}])}
  }

  return (
    <View style={styles.container}>
     
      <TextInput
    style = {styles.textbox}
  placeholder='first number'
  onChangeText={numA => setNumA(numA)} 
  value={numA} 
      keyboardType="numeric"
      />
      <TextInput
      style = {styles.textbox}
       placeholder='second number'
       onChangeText={numB => setNumB(numB)} 
       value={numB} 
      keyboardType="numeric"
      /> 
      <View style = {styles.buttons}>
      <Button onPress={() => handlePlus()} title="plus" />
      <Button onPress={() => handleMinus()} title="minus" />
      <Button onPress={() => navigation.navigate('History', {param: history})} 
      title="History" />
      </View>
      <Text>{message}</Text>
      <StatusBar style="auto" />
    
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row'
  },
  container: {
    paddingTop: 200,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbox:{
    height: 40,
    margin: 1,
    borderWidth: 1,
    
    borderColor: 'black',
  },
});
