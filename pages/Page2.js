import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Header from './components/Header';




const Page2 = ({navigation, route}) => {

    return ( 

    <>
        <Header title = "Informações da cidade"/>
        <View style={styles.container} >
            <Text style={styles.title}>{(route.params.objetos[2]).toUpperCase()}</Text>
            <View style={styles.escapamento} >
                <Text style={styles.textos}>Temperatura: {route.params.objetos[0].temperatura}</Text>
                <Text style={styles.textos}> vento: {route.params.objetos[0].vento}</Text>
                <Text style={styles.textos}>Descrição: {route.params.objetos[0].descricao}</Text>
            </View>
            <View style={styles.itensFoto} >
                    <Image style={styles.fotos} source={{uri: route.params.objetos[1]}} />
                </View>
            <View style = {styles.Button}>
                <Button 
                    title = "Voltar"
                    onPress = {() => {(navigation.goBack())}} 
                />
            </View>
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,  
      backgroundColor: '#b2c79f', 
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
        fontSize: 30, 
        fontWeight: 'bold', 
        color: 'black',
    },textos: {
        fontSize: 15, 
        fontWeight: 'normal', 
        color: 'black',
        textAlign: 'left'
    },escapamento: {
        padding: 20, 
        alignItems: 'left', 
    },
    itensFoto: {
      padding: 20, 
      flexDirection: "column",
   
    },fotos: {
        width: 350,
        height: 350,
        
      }
  });

export default Page2


