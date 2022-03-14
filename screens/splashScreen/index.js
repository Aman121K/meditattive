import React, { useEffect } from 'react';
import {View,Image, StyleSheet,Text} from 'react-native';
import { Flow} from 'react-native-animated-spinkit'
const splashScreen =({navigation})=>{
  useEffect(()=>{
     timeOutHandle=setTimeout(()=>{
       nextScreen()
     },2000)
  },[]);
  const nextScreen=()=>{
    navigation.navigate('onboarding')
  }
  return(
    <View style={styles.container}>
       <Text style={styles.txt1}>Meditative</Text>
      <Text style={styles.txt2}>Coloring</Text>
      {/* <View style={{marginTop:'80%'}}>
      <Flow size={100} color="red" />
      </View> */}
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FFFFFF',
    alignItems:'center',
    justifyContent:'center',
  },
  txt1:{
    fontSize:36,
    lineHeight:46.25,
    color:'#000000',
    // fontWeight:'700',
    fontFamily:'RigSolid-BoldFill'
    // fontFamily:'RigSans-Bold'
  },
  txt2:{
    fontSize:42,
    lineHeight:53.96,
    color:'#000000',
    // fontWeight:'700',
    fontFamily:'RigSolid-BoldFill'
    // fontfamily:'RigSans-Bold'
  }
  
})
export default splashScreen;