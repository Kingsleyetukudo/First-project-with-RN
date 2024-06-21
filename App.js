import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  Alert,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AddTodos from "./screens/addTodos";
import TodosDisplay from "./screens/todosDisplay";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", complete: false, key: "1" },
    { text: "create an app", complete: true, key: "2" },
    { text: "play on the switch", complete: false, key: "3" },
  ]);

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: text, complete: false, key: Math.random().toString() },
          ...prevTodos,
        ];
      });
    } else {
      Alert.alert("OOPS!", "Todos must be over 3 chars long", [
        { text: "Okay" },
      ]);
    }
  };

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const completeTodo = (key) => {
    setTodos((prevTodos) => {
      const updatedTodo = prevTodos.map((todo) =>
        todo.key === key ? { ...todo, complete: !todo.complete } : todo
      );
      return updatedTodo;
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>My Todos </Text>
      <AddTodos submitHandler={submitHandler} />

      <View style={styles.listContent}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodosDisplay
              item={item}
              pressHandler={pressHandler}
              completeTodo={completeTodo}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    paddingTop: StatusBar.currentHeight,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "coral",
    paddingTop: 20,
    textTransform: "uppercase",
    textAlign: "center",
  },
  listContent: {
    flex: 1,
    padding: 30,
  },
});
