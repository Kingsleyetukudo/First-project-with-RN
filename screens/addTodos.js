import { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  Pressable,
} from "react-native";

export default function AddTodos({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  const submitTodo = (text) => {
    submitHandler(text);
    setText("");
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={text}
        placeholder="add todo..."
        onChangeText={changeHandler}
      />
      {/* <Button title="Add Todo" color="coral" /> */}
      <Pressable style={styles.btn} onPress={() => submitTodo(text)}>
        <Text style={styles.btnText}>Add Todo</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "#333",
    borderBottomStartRadius: 5,
    borderBottomWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 8,
    fontSize: 18,
  },

  inputContainer: {
    padding: 30,
    gap: 20,
  },
  btn: {
    backgroundColor: "coral",
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
  },
  btnText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
