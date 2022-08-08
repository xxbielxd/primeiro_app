import { Text, View, StyleSheet } from 'react-native' 
import {styles} from './styles'
export default function Home(){

  return (
    <>
      <View style={{flex:1, backgroundColor:"#000000"}}>
        <Text style={styles.Texto} key="1">React</Text>
        <Text style={styles.Texto}key="2">Native</Text>
      </View>
    </>
  )


}