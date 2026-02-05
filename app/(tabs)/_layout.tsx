import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs 
      screenOptions={{
        tabBarActiveTintColor: "#DC143C",      // Crimson red 
        tabBarInactiveTintColor: "#6B7280",    // Gray
        tabBarStyle: {
          backgroundColor: "#0D0D0D",          // Near-black 
          borderTopWidth: 1,
          borderTopColor: "#1A1A1A",           // Dark gray border
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="myProfile"
        options={{
          title: "My Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="myEducation"
        options={{
          title: "My Education",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="school" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="myExperience"
        options={{
          title: "My Experience",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="briefcase" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}