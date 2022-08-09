import { Text, TextInput, TouchableOpacity, View} from 'react-native' 
import {styles} from './styles'
export default function Home(){
  function handleCadastrarUsuario(){
    console.log('teste')
  }
  return (
    <>
      <View style={{flex:1, backgroundColor:"#000000"}}>
        <Text style={styles.Texto} key="1">React</Text>
        <Text style={styles.Texto}key="2">Native</Text>
        <TextInput 
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor="#F0FF0F"
          keyboardType='default'
        />
        <TouchableOpacity style={styles.button} onPress={handleCadastrarUsuario}> 
          <Text style={styles.buttonText}>Clique aqui</Text>
        </TouchableOpacity>

      </View>
    </>
  )


}