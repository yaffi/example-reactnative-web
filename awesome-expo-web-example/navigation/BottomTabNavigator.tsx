import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import DocumentScreen from '../screens/DocumentScreen';
import CommunityScreen from '../screens/CommunityScreen';
import {
  BottomTabParamList,
  DocumentParamList,
  CommunityParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Document"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Document"
        component={DocumentNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Community"
        component={CommunityNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const DocumentStack = createStackNavigator<DocumentParamList>();

function DocumentNavigator() {
  return (
    <DocumentStack.Navigator>
      <DocumentStack.Screen
        name="DocumentScreen"
        component={DocumentScreen}
        options={{ headerTitle: "Document" }}
      />
    </DocumentStack.Navigator>
  );
}

const CommunityStack = createStackNavigator<CommunityParamList>();

function CommunityNavigator() {
  return (
    <CommunityStack.Navigator>
      <CommunityStack.Screen
        name="CommunityScreen"
        component={CommunityScreen}
        options={{ headerTitle: "Community" }}
      />
    </CommunityStack.Navigator>
  );
}
