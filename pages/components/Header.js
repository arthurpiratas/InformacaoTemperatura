import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = (props) => {
    return (
        <View style={styles.contanier}>
            <Text style={styles.headerText}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contanier: {
        paddingTop: 50, 
        paddingBottom: 20, 
        backgroundColor: '#a84051', 
        alignItems: 'center',
    }, 
    headerText: {
        fontSize: 20, 
        fontWeight: 'bold', 
        color: 'white', 
    },
})

export default Header


