import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, Button } from "react-native";
import braço from "../assets/braço.png";
import Exercicios from "./Exercicios";



export default function Home({navigation}) {
  const [exerciciosData, setExerciciosData] = useState([]);
 
 


  useEffect(()=> {fetch("http://10.0.2.2:3000/exercicios").then((response) => response.json()).then((data)=> setExerciciosData(data))},[])

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212"/>
      <Text style={styles.title}>TREINOS</Text>
      {exerciciosData.map((exercicio,index)=>(
        <Button>
          <Image source={braço} style={{width: 100, height: 100}}/>
          <Text>Braço</Text>
        </Button>
      ))}
    </View>
  );
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#ffff",
    paddingTop: 16,
  },
  title:{
    fontSize:36,
    fontWeight:"bold",
    color:"#000000",
    marginBottom:20,
    marginLeft:20,  
  },
})

