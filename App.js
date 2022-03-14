import 'react-native-gesture-handler';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screens/splashScreen';
import onboarding from './screens/onboarding';
import signUp from './screens/signUp';
import signIn from './screens/signIn';
import signUp2 from './screens/signUp2';
import plan from './screens/plan';
import hoMe from './screens/hoMe';
import firstSession from './screens/classsessioNs/firstSession';
import secondSession from './screens/classsessioNs/secondSession';
import thirdSession from './screens/classsessioNs/thirdSession';
import forthSession from './screens/classsessioNs/forthSession';
import fifthSession from './screens/classsessioNs/fifthSession';
import interpreTation from './screens/interpretation';
import sixthSession from './screens/classsessioNs/sixthSession';
import SeventhSession from './screens/classsessioNs/SeventhSession';
import clearingScreen from './screens/clearingScreen';
import ripScreen from './screens/ripScreen';
import guidedScreen from './screens/guidedScreen';
import notesScreen from './screens/notesScreen';
import menuScreen from './screens/Drawerhelp';
import notifiCations from './screens/notifiCations';
import termsConditions from './screens/termsConditions';
import { NavigationContainer } from '@react-navigation/native';
import SessionEight from './screens/classsessioNs/SessionEight';
import ActivePlans from './screens/ActivePlans';
import DrawerNavigation from './drawer';
import Drawerhelp from './screens/Drawerhelp';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='splashScreen'>  
     <Stack.Screen name="splashScreen" 
        component={Splash} options={{headerShown:false}} /> 
        <Stack.Screen name="onboarding" 
        component={onboarding} options={{headerShown:false}} />
          <Stack.Screen name="signup" 
        component={signUp} options={{headerShown:false}} />
          <Stack.Screen name="signin" 
        component={signIn} options={{headerShown:false}} />
          <Stack.Screen name="signup2" 
        component={signUp2} options={{headerShown:false}} />
          <Stack.Screen name="plans" 
        component={plan} options={{headerShown:false}} />
          <Stack.Screen name="home" 
        component={hoMe} options={{headerShown:false}} />
          <Stack.Screen name="first" 
        component={firstSession} options={{headerShown:false}} />
          <Stack.Screen name="second" 
        component={secondSession} options={{headerShown:false}} />
          <Stack.Screen name="third" 
        component={thirdSession} options={{headerShown:false}} />
          <Stack.Screen name="forth" 
        component={forthSession} options={{headerShown:false}} />
          <Stack.Screen name="fifth" 
        component={fifthSession} options={{headerShown:false}} />
          <Stack.Screen name="interpret" 
        component={interpreTation} options={{headerShown:false}} />
          <Stack.Screen name="sixth" 
        component={sixthSession} options={{headerShown:false}} />
          <Stack.Screen name="seventh" 
        component={SeventhSession} options={{headerShown:false}} />
          <Stack.Screen name="eight" 
        component={SessionEight} options={{headerShown:false}} />
          <Stack.Screen name="clearing" 
        component={clearingScreen} options={{headerShown:false}} />
          <Stack.Screen name="rip" 
        component={ripScreen} options={{headerShown:false}} />
          <Stack.Screen name="guided" 
        component={guidedScreen} options={{headerShown:false}} />
          <Stack.Screen name="note" 
        component={notesScreen} options={{headerShown:false}} />

          <Stack.Screen name="menu" 
        component={Drawerhelp} options={{headerShown:false}} />

          <Stack.Screen name="notifications" 
        component={notifiCations} options={{headerShown:false}} />
          <Stack.Screen name="terms" 
        component={termsConditions} options={{headerShown:false }}/>
          <Stack.Screen name="activeplans" 
        component={ActivePlans} options={{headerShown:false }}/>
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} options={{headerShown:false}}/>      
    </Stack.Navigator>
    </NavigationContainer>
      );
}
export default App;

 