import { useContext, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import TodoContext from "@/contextApi/Todo.context";

export default function TabTwoScreen() {
  const [text, onChangeText] = useState("");

  const { addTodo } = useContext(TodoContext);

  const onCreateTodo = () => {
    if (text) {
      addTodo(text);
      onChangeText("");
    }
  };

  return (
    <View className="flex flex-col h-full px-4 py-6">
      <View className="flex flex-col gap-1 mb-6">
        <Text className="text-2xl font-bold">Create Todo</Text>
        <View className="bg-teal-700 h-2 w-1/6"></View>
      </View>

      <TextInput
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter your todo"
        className="flex bg-gray-100 border border-teal-900 p-4 outline-none mb-6"
      />

      <View className="bg-teal-700 rounded-md max-w-[100px] mx-auto py-1 px-2">
        <Button
          onPress={onCreateTodo}
          title="Create"
          color="transparent"
          accessibilityLabel="todo create button"
        />
      </View>
    </View>
  );
}
