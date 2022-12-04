import { FlatList, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card/Card";

export default function List() {
  const data = useSelector((state) => state.todos);
  const renderer = ({ item }) => {
    return <Card todo={item.todo} finished={item.finished} id={item.id} />;
  };
  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={renderer}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#102027",
  },
});
