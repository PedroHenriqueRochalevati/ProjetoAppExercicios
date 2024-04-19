import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ffff",
  },
  logo: {
    width: 432,
    height: 333,
    marginBottom: 80,

  },
  input: {
    width: "100%",
    marginBottom: 16,
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
    borderRadius: 8,
    borderColor: "#000000",
    borderBottomColor: "#000000",
    backgroundColor: "#ffff",
    color: "#1f2124",
  },
  errorText: {
    color: "red",
    marginTop: 16,
    fontSize: 16,
  },
  text:{
    fontSize:30,
    fontWeight: "bold",
    color: "#1f2124",
    alignSelf: "flex-start"
    
    
  
  },
  home:{

  }
  
});

export default styles;
