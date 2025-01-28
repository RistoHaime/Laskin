import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [num, setNum] = useState("");
  const [numb, setNumb] = useState("");
  const [history, setHistory] = useState([]);

  const handlePlus = () => {
    const plus = parseFloat(num) + parseFloat(numb);
    if (isNaN(plus)){
      Alert.alert("insert numbers")
    }
    else{
    Alert.alert("answer:" + plus);
    setHistory([...history, {key: parseFloat(num) + "+" + parseFloat(numb) + "=" + plus}])
    }
  };
  const handleMinus = () => {
    const minus = parseFloat(num) - parseFloat(numb);
    if (isNaN(minus)){
      Alert.alert("insert numbers")
    }
    else{
    Alert.alert("answer:" + minus);
    setHistory([...history, {key: parseFloat(num) + "-" + parseFloat(numb) + "=" + minus}])}
  }

  return (
    <View style={styles.container}>
     
      <TextInput
  placeholder='first number'
  onChangeText={num => setNum(num)} 
  value={num} 
      keyboardType="numeric"
      />
      <TextInput
       placeholder='second number'
       onChangeText={numb => setNumb(numb)} 
       value={numb} 
      keyboardType="numeric"
      /> 
      <View style = {styles.buttons}>
      <Button onPress={handlePlus} title="plus" />
     
      <Button onPress={handleMinus} title="minus" />
      </View>
      
      <FlatList 
      data = {history}
      renderItem={({item}) => <Text>{item.key}</Text>}
      />
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
});
