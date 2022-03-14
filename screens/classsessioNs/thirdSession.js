import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,Image } from 'react-native';
import { heightPercentageToDP } from '../utility';
// import { heightPercentageToDP, widthPercentageToDP } from '../utility';
const thirdSession=({navigation})=>{
    return(
        <View style={styles.outerview}>
            <TouchableOpacity onPress={()=>navigation.navigate('home')}>
            <View style={styles.round}>
                <Image source={require('../../assets/images/round.png')} style={styles.imground} />
                <Image source={require('../../assets/images/back.png')} style={styles.cross} />
            </View>  
            </TouchableOpacity>
            <View style={styles.div}>
                <Text style={styles.createtext}>Take a breath</Text>
            </View>
            <View style={styles.sessionview}>
                <Text style={styles.sessiontext}>Let’s activate your{'\n'}______ brainwaves.</Text>
            </View>
            <View style={styles.lastview}>
                <Text style={styles.lasttext}>Take 5 deep{'\n'} breaths in{'\n'}through your{'\n'} __________ {'\n'}and out {'\n'}through your {'\n'}________.</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('forth')}  >
            <View style={styles.continueview}>
                <Text style={styles.continuetext}>CONTINUE</Text>
            </View>
            </TouchableOpacity>
        </View>
    )
};
const styles=StyleSheet.create({
    outerview:{
        padding:20,
        // height:'100%'
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
    div:
    {alignSelf:'center',
    paddingTop:20,
    marginBottom:"15%"
},
sessiontext:{
    fontSize:20,
    lineHeight:24.56,
    fontFamily:'RigSans-Medium',
    color:'#000000',
    alignSelf:'center',
    paddingBottom:30,
},
createtext:{
    fontSize:24,
    lineHeight:30.83,
    color:'#000000',

    fontFamily:'RigSolid-BoldFill',
    
    width:'100%',
},
lastview:{
//  alignSelf:'center',
//  justifyContent:'center'
},
lasttext:{
    fontSize:36,
    lineHeight:44.28,
    fontFamily:'RigSans-Medium',
    color:'#000000',
    alignSelf:'center',
    paddingBottom:30,
    textAlign:'center'
},
continueview:{
    width:'100%',
      
    backgroundColor:'#000000',
    borderRadius:19.5,
    // paddingTop:10,
    // paddingBottom:10,
   height:39,
    alignItems:'center',
    justifyContent:'center',
   
    // position: 'absolute',
    alignSelf:'center',
// top:0,
marginTop:heightPercentageToDP('9%')
},
continuetext:{
    color:'#FFFFFF',
    fontFamily:'RigSans-Semibold',
    // textAlign:'center'
}
})
export default thirdSession; 