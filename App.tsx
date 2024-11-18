import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';


 const imgBack1 = './assets/image 2.png'

export default function App() {

 
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const entrar = () => {
    console.log('Acesso Permitido')
    console.log(email)
    console.log(password)

  }

  return (
    <View style={styles.container}>
      <ImageBackground
      source={require(imgBack1)}
      style={styles.imagemFundo}
      >
      </ImageBackground>
      <Text h4>Digite o seu login e senha:</Text>
      <Input
        placeholder='E-mail'
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={value => setEmail(value)}
        keyboardType='email-address'
      />
      <Input
        placeholder='Digite a sua senha'
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
      />
      <Button
        title="Entrar"
        buttonStyle={{
          backgroundColor: 'black',
          borderWidth: 2,
          borderColor: 'white',
          borderRadius: 30,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        titleStyle={{ fontWeight: 'bold' }}
        onPress={() => entrar()}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8E43ED',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  imagemFundo:{
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    alignItems:'center',

  }
});
