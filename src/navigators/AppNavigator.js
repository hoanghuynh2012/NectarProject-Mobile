import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {
  SplashScreen,
  OnBoardingScreen,
  SingInScreen,
  OtpScreen,
  SelectLocation,
  LoginScreen,
  SignUpScreen,
  HomeScreen,
} from '../screens/index';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
        <Stack.Screen name="SingInScreen" component={SingInScreen} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="SelectLocation" component={SelectLocation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
