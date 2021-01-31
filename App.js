import React from 'react';
//librerias de react-native
import { StyleSheet, Text, View ,Button,Alert} from 'react-native';

import 'react-native-gesture-handler';
//librerias navegacion
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//
const Stack = createStackNavigator();
//importar vistas
import Login from'./views/login';
import CrearCuenta from'./views/CrearCuenta';
//styles
import globalStyles from'./styles/global';


export default function App() {
  return (
    <>
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                title:"iniciar Seccion",
                headerShown : false 
              }}
            /> 

            <Stack.Screen
              name="CrearCuenta"
              component={CrearCuenta}
              options={{
                title:"Crear Cuenta",
                headerStyle:{
                  backgroundColor:'#45B69C',
                },
                headerTintColor:'#fff',
                headerTitleStyle:{
                  fontWeigth:'bold'
                }
               
              }}
            /> 

            
          </Stack.Navigator>
      </NavigationContainer>

    </>
  );
}

const styles = StyleSheet.create({
  
});
