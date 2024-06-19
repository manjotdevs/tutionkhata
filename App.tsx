import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTab from './src/Navigation/Tabs/HomeTab';
import SettingTab from './src/Navigation/Tabs/SettingTab';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Background} from './src/utils/Themes';
import {SView} from './src/utils/Styled';

function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <SView className={`flex-1 ${Background.primary}`}>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({color, size}) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Setting') {
                iconName = 'cog';
              }
              return <Icon name={iconName || 'home'} size={38} color={color} />;
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'grey',
            tabBarStyle: {
              position: 'relative',
              height: 70,
              paddingBottom: 10,
              paddingTop: 8,
              borderRadius: 50,
              backgroundColor: 'red',
            },
            tabBarShowLabel: false,
          })}>
          <Tab.Screen
            name="Home"
            component={HomeTab}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="Setting"
            component={SettingTab}
            options={{headerShown: false}}
          />
        </Tab.Navigator>
      </SView>
    </NavigationContainer>
  );
}

export default App;
