import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,Image,ImageBackground} from 'react-native'; 
import { heightPercentageToDP } from '../screens/utility';

const clearingScreen=({navigation})=>{
    return(
        <ImageBackground source={require('../assets/images/bckgrnd2.png')} style={{height:'100%',width:'100%',}} >

        <View style={styles.outerview}>
            <View style={styles.secondryview}>
            <TouchableOpacity onPress={()=>navigation.navigate('sixth')}>
             <View style={styles.round}>
                <Image source={require('../assets/images/round.png')} style={styles.imground} />
                <Image source={require('../assets/images/back.png')} style={styles.cross} />
            </View>  
            </TouchableOpacity>
            
            
            <View style={{width:'100%'}}>
            <Text style={styles.createtext}>Clearing Script</Text>
            </View>
            </View>
            <View style={styles.innerview}>
            <View style={styles.viewofstanza}>
                <Text style={styles.textofstanza}>Lorem ipsum dolor sit amet, 
                    conseteturle Lorem ipsum dolor sit amet, 
                    conse.Lorem ipsum dolor sit amet, conseteturle Lorem ipsum dolor sit amet .
                    </Text>
            </View>
            <View style={styles.viewofstanza}>
                <Text style={styles.textofstanza}>Lorem ipsum dolor sit amet, 
                    conseteturle Lorem ipsum dolor sit amet, conse.
                    Lorem ipsum dolor sit amet, conseteturle Lorem ipsum dolor sit amet, conse.
                     Lorem ipsum dolor sit amet, conseteturle
                        Lorem ipsum dolor sit amet, conse.
                </Text>
        </View>
        <View style={styles.viewofstanza}>
                <Text style={styles.textofstanza}>Lorem ipsum dolor sit amet,
                     conseteturle Lorem ipsum dolor sit amet, conse.
                     Lorem ipsum dolor sit amet, conseteturle Lorem ipsum dolor sit amet .
                    amet, conseteturle Lorem ipsum dolor sit amet .
                    </Text>
            </View>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('rip')}>
            <View style={styles.continueview}>
                <Text style={styles.continuetext}>CONTINUE</Text>
            </View>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    )
};
const styles=StyleSheet.create({
    outerview:{
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
       height:18,
        position:'relative',
        bottom:25,
        left:2,
        resizeMode:'center'
    },
    viewofstanza:{
        // alignSelf:'center',
        // width:'100%',
        margin:20
    },
    textofstanza:{
        color:'#FFFFFF',
        fontSize:14,
        lineHeight:17.19,
        fontFamily:'RigSans-Medium',
        // width:'100%',
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
     innerview:{
        //  alignSelf:'center',
    
         marginTop:20
     },
     continueview:{
        width:'100%',
          
        backgroundColor:'#FFFFFF',
        borderRadius:19.5,
        height:39,
         alignItems:'center',
        justifyContent:'center',
        marginTop:heightPercentageToDP('30%')
        ,
    
    },
    continuetext:{
     color:'#000000',
            fontFamily:'RigSans-Semibold'
    },
})
export default clearingScreen;