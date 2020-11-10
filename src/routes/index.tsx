import 'react-native-gesture-handler';

import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import {isEmpty} from 'lodash';

import SplashScreen from '../screens/auth/splash-screen';
import StartedScreen from '../screens/auth/started-screen';
import Form from '../screens/auth/form';

import Home from '../screens/home';
import Profile from '../screens/profile';
import EditProfile from '../screens/profile/edit-profile';
import Awards from '../screens/awards';
import Rank from '../screens/rank';
import MyTeam from '../screens/my-team/';
import Community from '../screens/my-team/community';
import AddCommunity from '../screens/my-team/add-community';
import EditCommunity from '../screens/my-team/edit-community';
import ListCommunity from '../screens/my-team/list-community';
import School from '../screens/my-team/school';
import DataSchool from '../screens/my-team/data-school';
import Point from '../screens/points';

function Private({auth, splash}: any) {
  const StackNav: any = createStackNavigator();
  const PublicStack: any = createStackNavigator();
  const SplashStack: any = createStackNavigator();

  if (splash.isFirst) {
    return (
      <NavigationContainer>
        <SplashStack.Navigator
          initialRouteName="SplashScreen"
          headerMode="none">
          <SplashStack.Screen name="SplashScreen" component={SplashScreen} />
        </SplashStack.Navigator>
      </NavigationContainer>
    );
  }

  console.warn(auth.auth_data);

  if (isEmpty(auth.auth_data)) {
    return (
      <NavigationContainer>
        <PublicStack.Navigator
          screenOptions={TransitionPresets.SlideFromRightIOS}
          initialRouteName="StartedScreen"
          headerMode="none">
          <PublicStack.Screen name="StartedScreen" component={StartedScreen} />
          <PublicStack.Screen name="Form" component={Form} />
        </PublicStack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <StackNav.Navigator
        screenOptions={TransitionPresets.SlideFromRightIOS}
        initialRouteName="Home"
        headerMode="none">
        {/* Home */}
        <StackNav.Screen name="Home" component={Home} />
        <StackNav.Screen name="Profile" component={Profile} />
        <StackNav.Screen name="EditProfile" component={EditProfile} />
        <StackNav.Screen name="Awards" component={Awards} />
        <StackNav.Screen name="Point" component={Point} />
        <StackNav.Screen name="MyTeam" component={MyTeam} />
        <StackNav.Screen name="Community" component={Community} />
        <StackNav.Screen name="AddCommunity" component={AddCommunity} />
        <StackNav.Screen name="EditCommunity" component={EditCommunity} />
        <StackNav.Screen name="ListCommunity" component={ListCommunity} />
        <StackNav.Screen name="School" component={School} />
        <StackNav.Screen name="DataSchool" component={DataSchool} />
        <StackNav.Screen name="Rank" component={Rank} />
      </StackNav.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  splash: state.splash,
});

export default connect(mapStateToProps)(Private);
