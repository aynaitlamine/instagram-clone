import { Provider } from "react-native-paper";
import { Image } from 'react-native';
import { HomeScreen, SearchScreen, AddScreen, LikeScreen, ProfileScreen } from "./src/screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { AddIcon, HomeIcon, LikeIcon, SearchIcon } from "./src/assets/icons";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <Provider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              borderTopWidth: 0.5,
              borderTopColor: "#ddd",
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0,
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: () => <HomeIcon />,
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: () => <SearchIcon />,
            }}
          />
          <Tab.Screen
            name="Add"
            component={SearchScreen}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: () => <AddIcon />,
            }}
          />
          <Tab.Screen
            name="Like"
            component={SearchScreen}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: () => <LikeIcon />,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: () => <Image style={{width: 26, height: 26,  borderRadius: 500}} source={require('./src/assets/images/profile-1.jpg')} />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
