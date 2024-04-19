import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function exercicio({ exercicio }) {

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("detalhes",{exercicio:exercicio})}>
      <View style={styles.exercicio}>
        <Image source={{ uri: `http://10.0.2.2:3000/assets/${exercicio.imagens}` }} style={styles.albumImage} />
        <View style={styles.exercicioInfo}>
          <Text style={styles.texto}>{exercicio.nome}</Text>
          <Text style={styles.texto1}>Musculo:{exercicio.categoria}</Text>
          <Text style={styles.texto1}>{exercicio.dificuldade}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  exercicio: {
    backgroundColor: "#cecece",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 4,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 6,
  },
  exercicioButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  albumImage: {
    width: 100,
    height: 100,
    borderRadius: 4,
  },
  exercicioInfo: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginHorizontal: 20,
    flex: 1,
  },
  musicTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
  playingTitle: {
    color: "#1DB954",
    fontSize: 20,
    fontWeight: "700",
  },
  musicGroup: {
    color: "#b3b3b3",
    fontSize: 16,
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
    flexDirection: "column",
    justifyContent: "flex-start",

  },
  texto1: {
    fontSize: 20,
    flexDirection: "column",
    justifyContent: "flex-start",

  }
});

