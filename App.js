import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

// Dữ liệu giả lập cho "Your Insights"
const insightsData = [
  { id: "1", title: "Scan new", icon: "scan-outline", count: "Scanned 483", color: "#D6D4FF" },
  { id: "2", title: "Counterfeits", icon: "warning-outline", count: "Counterfeited 32", color: "#FCE4E4" },
  { id: "3", title: "Success", icon: "checkmark-circle-outline", count: "Checkouts 8", color: "#E4FCEF" },
  { id: "4", title: "Directory", icon: "calendar-outline", count: "History 26", color: "#D4E4FF" },
];

// Màn hình chính
const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", paddingHorizontal: 20, paddingTop: 50 }}>
      {/* Tiêu đề */}
      <Text style={{ fontSize: 28, fontWeight: "bold" }}>Hello 👋</Text>
      <Text style={{ fontSize: 16, color: "#666" }}>Christie Doe</Text>

      {/* Insights */}
      <Text style={{ marginTop: 20, fontSize: 18, fontWeight: "bold" }}>Your Insights</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginTop: 10 }}>
        {insightsData.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={{
              width: "48%",
              backgroundColor: item.color,
              borderRadius: 12,
              padding: 20,
              marginBottom: 10,
              alignItems: "center"
            }}
            onPress={() => item.id === "1" && navigation.navigate("Scan")} // Điều hướng khi nhấn vào "Scan new"
          >
            <Icon name={item.icon} size={30} color="#444" />
            <Text style={{ fontSize: 16, fontWeight: "600", marginTop: 10 }}>{item.title}</Text>
            <Text style={{ fontSize: 14, color: "#666" }}>{item.count}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

// Các màn hình khác (để hoàn thiện thanh điều hướng)
const NotificationScreen = () => <View style={{ flex: 1, backgroundColor: "#fff" }} />;
const ScanScreen = () => (
  <View style={{ flex: 1, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }}>
    <Text style={{ fontSize: 24 }}>Scan Screen</Text>
  </View>
);
const CartScreen = () => <View style={{ flex: 1, backgroundColor: "#fff" }} />;

// Tạo Bottom Tab Navigation
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Home") iconName = "home-outline";
            else if (route.name === "Notifications") iconName = "notifications-outline";
            else if (route.name === "Scan") iconName = "scan-outline";
            else if (route.name === "Cart") iconName = "cart-outline";
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarShowLabel: false,
          tabBarStyle: { height: 60, borderTopLeftRadius: 20, borderTopRightRadius: 20 },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Notifications" component={NotificationScreen} />
        <Tab.Screen name="Scan" component={ScanScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
