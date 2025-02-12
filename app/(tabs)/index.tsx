import TodoContext from "@/contextApi/Todo.context";
import { useContext } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function HomeScreen() {
  const { todos, removeTodo, toggleTodo } = useContext(TodoContext);

  const onRemoveTodo = (id: number) => {
    removeTodo(id);
  };

  const onCompleted = (item: any) => {
    toggleTodo(item.id);
  };

  return (
    <View className="flex flex-col h-full px-4 py-6">
      <View className="flex flex-col gap-1 mb-6">
        <Text className="text-2xl font-bold">All Todos</Text>
        <View className="bg-teal-700 h-2 w-1/6"></View>
      </View>
      <ScrollView className="flex gap-4">
        {todos?.length <= 0 && <Text>Not found todo.</Text>}
        {todos?.map((item, index) => (
          <View
            key={index}
            className={`${
              item.completed ? "bg-gray-200" : "bg-white"
            } flex flex-row items-center justify-between px-2 py-4 border-b border-gray-200`}
          >
            <TouchableOpacity onPress={() => onCompleted(item)}>
              <View className="border border-gray-600 w-11 h-11 flex items-center justify-center">
                <Text>{item.completed ? "✅" : "❌"}</Text>
              </View>
            </TouchableOpacity>
            <View className="relative">
              <Text className={`${item.completed ? "line-through " : ""}`}>
                {item?.text}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => onRemoveTodo(item.id)}
              className="h-11 w-11 justify-center items-center"
            >
              <FontAwesome6 name="trash" size={16} color="red" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
