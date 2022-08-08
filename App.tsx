import { Text, View, StyleSheet } from 'react-native' 
export default function App(){

  return (
    <>
      <View style={{flex:1, backgroundColor:"#000000"}}>
        <Text style={styles.Texto} key="1">React</Text>
        <Text style={styles.Texto}key="2">Native</Text>
      </View>
    </>
  )


}

const styles = StyleSheet.create({
  Texto: {
    fontSize:15,
    color:"white"
  }
});