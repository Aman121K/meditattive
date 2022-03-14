import React from 'react'
import { View, StyleSheet,TouchableOpacity,Text,Image } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import WebView from 'react-native-webview';
const termsConditions = ({navigation}) => {
   return (
       <View style={styles.outerview}>
             <View style={styles.secondryview}>
                 <View style={{position:'relative',top:40,flexDirection:'row',padding:10}}>

            <View style={styles.round}>
                <TouchableOpacity onPress={()=>navigation.navigate('home')}>
                <Image source={require('../assets/images/newcircle.png')} style={styles.imground} />
                <Image source={require('../assets/images/back.png')} style={styles.cross} />
                </TouchableOpacity>
            </View>  
            
            <View style={{width:'100%'}}>
            <Text style={styles.createtext}>TERMS & CONDITIONS</Text>
            </View>
            </View>
            </View>
           <View style={{borderWidth:1,height:28,backgroundColor:'#474747',width:'100%',alignItems:'center',justifyContent:'center'}}>
               <Text style={{fontFamily:"RigSolid-BoldFill",color:'#FFFFFF',}}>MEDITATIVE COLORING</Text>
           </View>
      <View style = {styles.container}>
         <WebView
         source = {{ uri:
         'https://nidhii.co.in/termsandcondition' }}
         />
      </View>
      
      <TouchableOpacity>
            <View style={styles.continueview}>
                <Text style={styles.continuetext}>CLEAR ALL</Text>
           </View> 
              </TouchableOpacity>
      </View>
   )
}
export default termsConditions;

const styles = StyleSheet.create({
    outerview:{
       
        
    },
    secondryview:{
        flexDirection:'row',
        width:'100%',
        height:99,
        backgroundColor:'#000000',
        alignSelf:'center',
        alignContent:'center',
       
        
    },
    round:{
        width:'18%'
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
    createtext:{
        fontSize:24,
        lineHeight:30.83,
        color:'#FFFFFF',
    
        fontFamily:'RigSolid-BoldFill',
        
        width:'100%',
        paddingBottom:20
     },
   container: {
      height:heightPercentageToDP('80%'),
      justifyContent:'center',
      alignContent:'center',
   },
   continueview:{
    width:'100%',
      
    backgroundColor:'#000000',
    borderRadius:19.5,
    height:39,
     alignItems:'center',
    justifyContent:'center',
    
    // marginTop:heightPercentageToDP('30%')
    

},
continuetext:{
 color:'#FFFFFF',
        fontFamily:'RigSans-Semibold'
},
      
   
})