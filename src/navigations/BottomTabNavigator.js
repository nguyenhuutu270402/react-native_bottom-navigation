import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Page1 from '../screens/Page1';
import Page2 from '../screens/Page2';
import Page3 from '../screens/Page3';
import { Image, TouchableOpacity } from 'react-native';
const Tab = createBottomTabNavigator();
function BottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: true,
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'grey',
                tabBarLabelStyle: { marginTop: -6 }
            }}
        >
            <Tab.Screen name="Trang chủ" component={Page1}
                options={({ route }) => ({
                    tabBarStyle: {
                        display: getRouteName(route),
                        backgroundColor: 'black',
                    },
                    tabBarIcon: ({ focused }) => (
                        focused ?
                            <Ionicons name="ios-home" size={24} color="white" />
                            :
                            <Ionicons name="ios-home-outline" size={24} color="grey" />
                    ),
                    // tabBarLabel: () => null
                })} />
            <Tab.Screen name="Shop" component={Page3}
                options={({ route }) => ({
                    tabBarStyle: {
                        display: getRouteName(route),
                        backgroundColor: 'white',
                    },
                    tabBarActiveTintColor: 'black',
                    tabBarIcon: ({ focused }) => (
                        focused ?
                            <Ionicons name="ios-basket" size={26} color="black" />
                            :
                            <Ionicons name="ios-basket-outline" size={26} color="grey" />
                    ),
                    // tabBarLabel: () => null
                })} />
            <Tab.Screen name="Add" component={Page2}
                options={({ route }) => ({
                    tabBarStyle: {
                        display: getRouteName(route),
                        backgroundColor: 'black',
                    },
                    tabBarIcon: ({ focused }) => (
                        <TouchableOpacity>
                            <Image style={{ width: 50, height: 40 }} source={require('../assets/icon_add.png')} />
                        </TouchableOpacity>
                    ),
                    tabBarLabel: () => null
                })} />
            <Tab.Screen name="Hộp thư" component={Page1}
                options={({ route }) => ({
                    tabBarStyle: {
                        display: getRouteName(route),
                        backgroundColor: 'white',
                    },
                    tabBarActiveTintColor: 'black',
                    tabBarIcon: ({ focused }) => (
                        focused ?
                            <MaterialCommunityIcons name="message-reply-text" size={24} color="black" />
                            :
                            <MaterialCommunityIcons name="message-reply-text-outline" size={24} color="grey" />
                    ),
                    // tabBarLabel: () => null
                })} />
            <Tab.Screen name="Hồ sơ" component={Page3}
                options={({ route }) => ({
                    tabBarStyle: {
                        display: getRouteName(route),
                        backgroundColor: 'white',
                    },
                    tabBarActiveTintColor: 'black',
                    tabBarIcon: ({ focused }) => (
                        focused ?
                            <Ionicons name="person" size={24} color="black" />
                            :
                            <Ionicons name="person-outline" size={24} color="grey" />
                    ),
                    // tabBarLabel: () => null
                })} />
        </Tab.Navigator>
    );
}
const getRouteName = route => {
    const routeName = getFocusedRouteNameFromRoute(route);
    // console.log(routeName);
    if (routeName?.includes("TrangChuScreen")
        || routeName?.includes("XepHangScreen")
        || routeName?.includes("TheoDoiScreen")
        || routeName?.includes("CaiDatScreen") || routeName == undefined) {
        return "flex"
    }
    return "none"
}
export default BottomTabNavigator;
