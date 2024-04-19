import { View, Text, Image } from "react-native";

export default function detalhes({route}) {
  const {exercicio} = route.params;
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text style={{ fontSize: 24, fontWeight: "500" }}>{exercicio.nome}</Text>
      <Text style={{ fontSize: 24, fontWeight: "500" }}>{exercicio.categoria}</Text>
      <Text style={{ fontSize: 24, fontWeight: "500" }}>{exercicio.dificuldade}</Text>
      <Text style={{ fontSize: 24, fontWeight: "500" }}>{exercicio.descricao}</Text>
    </View>
  );
}
