import { StyleSheet, Text, View } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.counter}>0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#102027",
  },
  headerContainer: {
    flexDirection: "row",
  },
  title: {
    fontSize: 24,
    color: "#ffa500",
    padding: 10,
  },
  counter: {
    fontSize: 24,
    color: "#ffa500",
    padding: 10,
    marginLeft: "auto",
  },
});
