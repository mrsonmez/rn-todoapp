import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, handleChange } from "../../redux/slice/todoSlice";
import "react-native-get-random-values";
import { nanoid } from "@reduxjs/toolkit";
export default function Input() {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={"#808080"}
        style={styles.input}
        placeholder="Yapılacak..."
        onChangeText={(text) => dispatch(handleChange(text))}
        value={todo}
      />
      <TouchableOpacity>
        <Text
          style={{
            alignSelf: "center",
            padding: 10,
            backgroundColor: todo.length <= 0 ? "#808080" : "#ffa500",
            width: "90%",
            textAlign: "center",
            borderRadius: 8,
            margin: 6,
            color: "white",
          }}
          onPress={() =>
            dispatch(addTodo({ id: nanoid(), todo: todo, finished: false }))
          }
        >
          KAYDET
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#37474f",
    borderRadius: 8,
    height: 100,
    width: "94%",
    alignSelf: "center",
    marginBottom: 15,
    justifyContent: "center",
  },
  input: {
    color: "white",
    borderBottomColor: "#78909c",
    borderBottomWidth: 1,
    width: "90%",
    alignSelf: "center",
  },
});
