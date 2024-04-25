import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, FlatList, TextInput, Image, exerciciosData, ScrollView } from "react-native";
import Exercicios from "../components/Exercicios";

export default function Home({ navigation }) {
  const [exerciciosData, setExerciciosData] = useState([]);
  const [query, SetQuery] = useState("");

  useEffect(() => { fetch("http://10.0.2.2:3000/exercicios").then((response) => response.json()).then((data) => setExerciciosData(data)) }, [])



  const filteredMusic = query ?
    exerciciosData.filter(item => item.nome.includes(query.toLowerCase()))
    : exerciciosData;



  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <Text style={styles.title}>Melhores Exercícios</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar"
        placeholderTextColor="#000000"
        value={query}
        onChangeText={(text) => SetQuery(text)}
      />
      
      <ScrollView>{filteredMusic.map((exerciciosData, index) => (
          <Exercicios exercicio={exerciciosData}  key={index}/>
      ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 16,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 20,
    marginLeft: 16,
  },
  searchInput: {
    fontSize: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 8,

  }
}
)