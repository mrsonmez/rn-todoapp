import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import List from "./../List/List";
import Input from "./../Input/Input";
export default function Header() {
  const todos = useSelector((state) => state.todos);
  const counter = todos.filter((item) => item.finished != true).length;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerText}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.counter}>{counter}</Text>
      </View>
      <List />
      <Input />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#102027",
    marginTop: 10,
  },
  headerText: {
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
