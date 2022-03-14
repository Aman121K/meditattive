import React from 'react';
import { View,Text,TouchableOpacity,StyleSheet,Image } from 'react-native';
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';
import { heightPercentageToDP } from '../utility';

const fifthSession=({navigation})=>{
    return(
        <View style={styles.container}>
            <View style={styles.secondryview}>
             <TouchableOpacity onPress={()=>navigation.navigate('forth')}>
             <View style={styles.round}>
                <Image source={require('../../assets/images/round.png')} style={styles.imground} />
                <Image source={require('../../assets/images/back.png')} style={styles.cross} />
            </View>  
             </TouchableOpacity>
                 <TouchableOpacity onPress={()=>navigation.navigate('interpret')}>
                 <View style={{width:'100%',}}>
            <Text style={styles.createtext}>COLOR IT OUT</Text>
            </View>
             </TouchableOpacity>
             </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <SketchCanvas
            style={{ flex: 1 }}
            strokeColor={'red'}
            strokeWidth={7}
          />
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('interpret')}>
            <View style={styles.continueview}>
                <Text style={styles.continuetext}>CONTINUE</Text>
            </View>
            </TouchableOpacity>

       
       </View>
    );
  }
const styles = StyleSheet.create({
  container: {
    padding:20,
    height:'100%',
    backgroundColor:'#FFFFFF',
    flex:1
  },
      createtext:{
        fontSize:24,
        lineHeight:30.83,
        color:'#000000',
        fontFamily:'RigSolid-BoldFill',
        width:'100%',
        textAlign:'center'
     },
     secondryview:{
      flexDirection:'row',
      width:'75%',
      justifyContent:'space-between'
  },
  continueview:{
    width:'100%',
      
    backgroundColor:'#000000',
    borderRadius:19.5,
    height:39,
    
   
    alignItems:'center',
    justifyContent:'center',
    marginTop:heightPercentageToDP('2%')
    ,

},
continuetext:{
 color:'#FFFFFF',
        fontFamily:'RigSans-Semibold',
        
},
  round:{
      width:'100%'
  },
  imground:{
      height:30,
      width:30,
  },
  cross:{
    // width:13,
    height:18,
    position:'relative',
    bottom:25,
    left:2,
    resizeMode:'center'
},
secondryview:{
  flexDirection:'row',
  width:'90%',
  justifyContent:'space-between'
},
continueview:{
  width:'100%',
  backgroundColor:'#000000',
  borderRadius:19.5,
  height:39,
  alignItems:'center',
  justifyContent:'center',
  marginTop:heightPercentageToDP('2%')
  ,

},
continuetext:{
color:'#FFFFFF',
      fontFamily:'RigSans-Semibold'
}
});
        
export default fifthSession; 