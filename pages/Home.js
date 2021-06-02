import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Header from './components/Header';
import {consultaTemperatura} from '../service/apiTemperatura'
import {buscarImagem} from '../service/apiTemperatura'


const Home = ({navigation}) => {

    const [cidade, setCidade] = React.useState(''); 
    
    const buscarTemperatura = async () => {
        const temperatura = await consultaTemperatura(cidade)
        //const foto = buscarImagem(temperatura.descricao) 
        navigation.navigate('Page2', { objetos: [temperatura, cidade]}); 
    }

    return (
    <>
        <Header title = "Central do Tempo"/>
        <View style={styles.container}>
            <Text style={styles.title}>Home Page</Text>
            <View style = {styles.Button}>
                <TextInput style={styles.input } onChangeText={(texto) => setCidade(texto)}/>
                <Button 
                    title = "clique aqui para verificar a temperatura"
                    onPress = {() => {buscarTemperatura()}} 
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
    }, Button: {
        padding: 10,
    }, input: {
        height: 40, 
        margin: 12, 
        borderWidth: 1,
        backgroundColor: '#9fa19d',
    }
  });

export default Home


