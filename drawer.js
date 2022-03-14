import  React from 'react';
// import {} from 'react-native';
import hoMe from './screens/hoMe';

import Drawerbg from './drawerbg';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
const DrawerNavigation=({navigation})=>{
    return(
        <Drawer.Navigator drawerContent={Drawerbg}
          screenOptions={
         {drawerPosition:'right',headerShown:false,drawerStyle:{right:0,borderBottomLeftRadius: 100,
          backgroundColor:'rgba(0, 0, 0, 0.34)',borderWidth:3,borderColor:'#FFFFFF',
          shadowColor: "rgba(0, 0, 0, 0.6)",
         }}} initialRouteName="hoMe"
          >
        <Drawer.Screen name="." component={hoMe} options={{headerShown:false}} />
      </Drawer.Navigator>
    )
}
export default DrawerNavigation;