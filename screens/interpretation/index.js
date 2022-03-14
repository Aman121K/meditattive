import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image,ImageBackground,alert} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from '../utility';

const interpreTation=({navigation})=>{
    return(
         <ImageBackground source={require('../../assets/images/bckgrnd2.png')} style={{height:'100%',width:'100%',}} >
        <View style={{padding:20}}>
             <View style={styles.secondryview}>
                <TouchableOpacity onPress={()=>navigation.navigate('fifth')}>
            
            <View style={styles.round}>
                <Image source={require('../../assets/images/round.png')} style={styles.imground} />
                <Image source={require('../../assets/images/back.png')} style={styles.cross} />
            </View>  
            
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('sixth')}>
            <View style={{width:'100%',}}>
            <Text style={styles.createtext}>Interpretation</Text>
            </View>
            </TouchableOpacity>
            </View>
            <View style={{marginTop:'7%'}}>
                <Text style={{fontSize:15,width:'100%',textAlign:'center',lineHeight:18.45,fontFamily:'RigSans-Regular',color:'#FFFFFF'}}>Lorem ipsum dolor sit amet, conseteturle
Lorem ipsum dolor sit amet, conse.
</Text>
            </View>
            <View style={{marginTop:heightPercentageToDP('5%'),borderWidth:5,height:213,borderRadius:10,backgroundColor:'#FFFFFF',width:'100%',justifyContent:'center'}}>
                <Image source={require('../../assets/images/birda.png')} style={{height:166.13,width:189.98,alignSelf:'center'}}/>
            </View>
            <View style={{borderWidth:5,height:213,borderRadius:10,marginTop:heightPercentageToDP('2%'),backgroundColor:'#FFFFFF',width:'100%',justifyContent:'center'}}>
                <Image source={require('../../assets/images/birdb.png')} style={{height:166.13,width:189.98,alignSelf:'center'}}/>
            </View>
            <View style={{borderWidth:1,borderRadius:19,backgroundColor:'#FFFFFF',height:39,marginTop:heightPercentageToDP('10%'),justifyContent:'center'}}>
                <Text style={{fontSize:15,lineHeight:18.45,color:'#000000',fontFamily:'RigSans-Bold',alignSelf:'center'}}>CONTINUE</Text>
            </View>
        </View>
        </ImageBackground>
    )
};
const styles=StyleSheet.create({
    mainview:{
        padding:20
    },
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
        textAlign:'center'
     },
})
export default interpreTation;