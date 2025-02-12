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

  const todosData = [
    ...todos,
    { id: 1, text: "first todo", completed: true },
    { id: 2, text: "second todo", completed: false },
    { id: 3, text: "last todo", completed: true },
    { id: 4, text: "another todo", completed: false },
    { id: 5, text: "other todo", completed: true },
    { id: 11, text: "first todo", completed: true },
    { id: 21, text: "second todo", completed: false },
    { id: 31, text: "last todo", completed: true },
    { id: 14, text: "another todo", completed: false },
    { id: 51, text: "other todo", completed: true },
  ];

  return (
    <View className="flex flex-col h-full px-4 py-6">
      <View className="flex flex-col gap-1 mb-6">
        <Text className="text-2xl font-bold">All Todos</Text>
        <View className="bg-teal-700 h-2 w-1/6"></View>
      </View>
      <ScrollView className="flex gap-4">
        {todosData?.length <= 0 && <Text>Not found todo.</Text>}
        {todosData?.map((item, index) => (
          <View
            key={item.id}
            className={`${
              item.completed ? "bg-gray-200" : "bg-white"
            } flex flex-row items-center justify-between px-2 py-4 border-b border-gray-200`}
          >
            <TouchableOpacity onPress={() => onCompleted(item)}>
              <View className="border border-gray-600 w-6 h-6 flex items-center justify-center">
                {item.completed ? "✅" : "❌"}
              </View>
            </TouchableOpacity>
            <View className="relative">
              <View
                className={`absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-gray-500 ${
                  item.completed ? "w-full" : "w-0"
                }`}
              ></View>
              <Text>{item?.text}</Text>
            </View>
            <TouchableOpacity onPress={() => onRemoveTodo(item.id)}>
              <FontAwesome6 name="trash" size={16} color="red" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
