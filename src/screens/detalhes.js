import { View, Text, Image, StyleSheet,TouchableOpacity } from "react-native";
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function detalhes({route}) {
  const navigation = useNavigation();
  const {exercicio} = route.params;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.return} onPress={() =>navigation.navigate("Home")}><Fontisto name="arrow-return-left" size={24} color="white" /></TouchableOpacity>
      <Text style={styles.title}>{exercicio.nome}</Text>
      <Image style={styles.image}
        source={{ uri: `http://10.0.2.2:3000/assets/${exercicio.imagens}` }} />
      <Text style={styles.categoria}>Grupo Muscular: {exercicio.categoria}</Text>
      <Text style={styles.dificuldade}>{exercicio.dificuldade}</Text>
      <Text style={styles.descricao}>{exercicio.descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  return: {
    backgroundColor: "black",
    marginTop: 5,
    padding: 1,
    width:40,
    height:30,
    marginLeft:10,
    alignItems: "center"
  },

  container: { 
    flex: 1,
    backgroundColor: "#2f2f2f",
  },
  title: {
     fontSize: 40,
    fontWeight: "500",
    color:"#c70925",
    marginLeft:15,
    marginTop: 30,
    padding:10,
  },
  categoria:{
    fontSize: 24,
    fontWeight: "500",
    color:"#ffffff",
    marginLeft: 10,
  },
  dificuldade:{
    fontSize: 24,
     fontWeight: "500",
     color:"#ffffff",
     marginLeft: 10,
  },
  image:{
    height: 200,
    width: 400,
    marginTop:10,
  },
  descricao:{
    fontSize: 24,
    fontWeight: "500",
    color:"#ffffff",
    padding:16,
    marginTop: 15,
  }
}
)
