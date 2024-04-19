import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import fundoImagem from "../assets/fundo.jpg"
import { FontAwesome, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';


export default function Profile() {
  return (
    <ImageBackground source={fundoImagem} style={{ width: '100%', height: '100%' }}>

      <View style={styles.user}>
        <FontAwesome name="user-circle" size={160} color="gray" />
      </View>

      <View style={styles.totalInfo}>
        <View style={styles.informacoes}>
          <FontAwesome name="user" size={60} color="white" />
          <Text style={styles.textInfo}>João Aylton                  </Text>
        </View>
        <View style={styles.informacoes}>
          <MaterialIcons name="email" size={58} color="white" />
          <Text style={styles.textInfo}>jao2121@gmail.com</Text>
        </View>
        <View style={styles.informacoes}>
          <FontAwesome name="phone" size={60} color="white" />
          <Text style={styles.textInfo}>Número de telefone   </Text>
        </View>
        <View style={styles.informacoes}>
          <FontAwesome5 name="calendar-week" size={60} color="white" />
          <Text style={styles.textInfo}>09/12/2006                 </Text>
        </View>
      </View>

    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  user: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70
  },
  textoUser: {
    fontSize: 30,
    fontWeight: "bold"
  },
  informacoes: {
    flexDirection: "row",
    marginLeft: 60,
    marginTop: 30

  },
  textInfo: {
    fontSize: 20,
    margin: 27,
    color: "white",
    fontWeight: "bold",
    borderColor: "white",
    borderBottomWidth: 3,
    paddingBottom: 8
  }

});
