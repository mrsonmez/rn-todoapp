import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import Header from "./components/Header/Header";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#102027",
    flexDirection: "column",
  },
});
