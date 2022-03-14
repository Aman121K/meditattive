import React from 'react';
import {View,Text,StyleSheet,Image,ImageBackground,TouchableOpacity} from 'react-native';
import { heightPercentageToDP } from '../screens/utility';

const ripScreen=({navigation})=>{
    return(
        <ImageBackground source={require('../assets/images/bckgrnd2.png')} style={{height:'100%',width:'100%',}} >

        <View style={{padding:20}}>
           <View style={styles.secondryview}>
            <TouchableOpacity onPress={()=>navigation.navigate('clearing')}>
             <View style={styles.round}>
                <Image source={require('../assets/images/round.png')} style={styles.imground} />
                <Image source={require('../assets/images/back.png')} style={styles.cross} />
            </View>  
            </TouchableOpacity>
            
            
            <View style={{width:'100%'}}>
            <Text style={styles.createtext}>Rip Up or Save?</Text>
            </View>
            </View>
            <View style={styles.stanzaview}>
                <Text style={styles.stanzatext}>Lorem ipsum dolor sit amet, conseteturle
Lorem ipsum dolor sit amet, conse.
</Text>
            </View>
            <View style={styles.ripview}>
                <Text style={styles.riptext}>RIP UP</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('guided')}>
            <View style={styles.saceview}>
                <Text style={styles.savetext}>SAVE</Text>
            </View>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    )
};
const styles=StyleSheet.create({
    secondryview:{
        flexDirection:'row',
        width:'75%',
        justifyContent:'space-between'
    },
    round:{
        width:'100%'
    },
    imground:{
        height:30,
        width:30,
    },
    cross:{
       height:18,
        position:'relative',
        bottom:25,
        left:2,
        resizeMode:'center'
    },
    stanzaview:{
        alignSelf:'center',
        paddingTop:20,
        width:'100%'
    },
    stanzatext:{
    fontSize:15,
    lineHeight:18.42,
    color:'#FFFFFF',
    fontFamily:'RigSans-Medium',
    width:'100%',
    textAlign:'center'
    },
    createtext:{
        fontSize:24,
        lineHeight:30.83,
        color:'#FFFFFF',
    
        fontFamily:'RigSolid-BoldFill',
        
        width:'100%',
        textAlign:'center'
     },
     ripview:{
        width:'100%',
          
        backgroundColor:'#FFFFFF',
        borderRadius:19.5,
        height:39,
         alignItems:'center',
        justifyContent:'center',
        
        marginTop:heightPercentageToDP('65%'),
        marginBottom:heightPercentageToDP('3%')
     },
     riptext:{
        color:'#000000',
            fontFamily:'RigSans-Semibold'
     },
     saceview:{
        width:'100%',
          
        backgroundColor:'#00CB20',
        borderRadius:19.5,
        height:39,
         alignItems:'center',
        justifyContent:'center',
        // marginTop:heightPercentageToDP('35%')
     },
     savetext:{
        color:'#000000',
            fontFamily:'RigSans-Semibold'
     }
})
export default ripScreen;