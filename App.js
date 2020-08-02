import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer ,createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Login from "./screens/login";
import Request from "./screens/request";
import Donate from "./screens/donate"

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer/>
      
    );

  }
}

const TabNavigator = createBottomTabNavigator(
  {
    RequestBooks : {screen : Request},
    DonateBooks : {screen : Donate},
  },
  {
    defaultNavigationOptions: ({navigation})=>({
      tabBarIcon: ()=>{
        const routeName = navigation.state.routeName;
        console.log(routeName)

        if(routeName === "RequestBooks"){
          return(
            <Text>Request books from doners</Text>
          )
        }
        else if(routeName === "DonateBooks"){
          return(
            <Text>Donate books to the needy</Text>
          )
        }

      }

    })

  }
)

const AppContainer = createAppContainer(switchNavigator);

const switchNavigator = createSwitchNavigator({
  Login:{screen:Login},
  TabNavigator:{screen:TabNavigator}
});

const styles = StyleSheet.create({});
