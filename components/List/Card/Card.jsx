import { View, Text, StyleSheet, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { changeComplete, removeTodo } from "../../../redux/slice/todoSlice";

export default function Card({ id, todo, finished }) {
  const dispatch = useDispatch();

  const areYouSure = (id) => {
    Alert.alert("", "Emin misiniz?", [
      {
        text: "Evet",
        onPress: () => dispatch(removeTodo(id)),
      },
      {
        text: "Hayır",
      },
    ]);
  };

  return (
    <View style={finished ? styles.finished : styles.container}>
      <Text
        style={finished ? styles.finishedTodo : styles.todo}
        onPress={() => dispatch(changeComplete(id))}
        onLongPress={() => areYouSure(id)}
      >
        {todo}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7da453",
    margin: 3,
    borderRadius: 8,
  },
  todo: {
    padding: 15,
    fontSize: 18,
    color: "white",
  },
  finished: {
    backgroundColor: "#37474f",
    margin: 3,
    borderRadius: 8,
  },
  finishedTodo: {
    padding: 15,
    borderRadius: 8,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    textDecorationColor: "#808080",
    fontSize: 18,
    color: "#808080",
  },
});
