import { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Pressable,
  Keyboard,
} from "react-native";
import TodoContext from "@/contextApi/Todo.context";
import Toast from "react-native-toast-message";
import { StatusBar } from "expo-status-bar";

export default function TabTwoScreen() {
  const [text, onChangeText] = useState("");

  const { addTodo } = useContext(TodoContext);

  const onCreateTodo = () => {
    if (text) {
      addTodo(text);
      onChangeText("");
      Toast.show({
        type: "success",
        text1: "Successfuly!",
        text2: "Your todo added",
        autoHide: true,
        visibilityTime: 1000,
      });
      Keyboard.dismiss();
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

      <Pressable
        onPress={onCreateTodo}
        className="bg-teal-700 rounded-md w-[120px] h-16 flex items-center justify-center mx-auto"
      >
        <Text className="text-white py-1 px-2 text-xl">Create</Text>
      </Pressable>
    </View>
  );
}
