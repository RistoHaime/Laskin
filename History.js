
import  { FlatList, View, Text, StyleSheet } from "react-native";

export default function History({route}) {

    const {param} = route.params;

    return (
        <View style =  {styles.container} >
           <FlatList     
        data = {param}
        renderItem={({item}) => <Text>{item.key}</Text>}
        />
        </View>
        
    )
     ;
}  
        const styles = StyleSheet.create({
            container: {
              flex: 1,
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
            },
          });