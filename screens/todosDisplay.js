import { View, Text, StyleSheet } from "react-native";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

export default function TodosDisplay({ item, pressHandler, completeTodo }) {
  const swipRight = () => {
    return (
      <View>
        <Text>Delete</Text>
      </View>
    );
  };
  return (
    <GestureHandlerRootView>
      <Swipeable>
        <View style={styles.itemContainer}>
          <View style={styles.itemList}>
            {item.complete ? (
              <Feather
                name="check-circle"
                size={18}
                onPress={() => completeTodo(item.key)}
              />
            ) : (
              <Feather
                name="circle"
                size={18}
                onPress={() => completeTodo(item.key)}
              />
            )}
            <Text>{item.text}</Text>
          </View>
          <View>
            <Feather
              name="trash-2"
              size={18}
              style={styles.trashCan}
              onPress={() => pressHandler(item.key)}
            />
          </View>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 16,
    borderWidth: 1,
    marginTop: 16,
    flexDirection: "row",
    borderRadius: 10,
    gap: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemList: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    // backgroundColor: "coral",
  },
  trashCan: {
    paddingLeft: "auto",
    alignSelf: "flex-start",
  },
});
