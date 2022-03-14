import React from 'react';
import {View,Text,StyleSheet,Image,ImageBackground,TouchableOpacity} from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { heightPercentageToDP } from '../screens/utility';
const notesScreen=({navigation})=>{
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
            <Text style={styles.createtext}>Session Notes</Text>
            </View>
            {/* </TouchableOpacity> */}
            </View> 
            <View style={styles.border}>
                <Text style={styles.btext}>B</Text>
                <Image source={require('../assets/images/hlh.png')} style={styles.img}/>
                <Text style={styles.atext}>Aa</Text>
            </View>
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
    border:{
        // borderWidth:1,
        height:120,
        width:40,
        opacity:0.4,
        alignItems:'center',
        justifyContent:'center',
        opacity:0.1,
        backgroundColor:'#FFFFFF',
       justifyContent:'center',
       position:'relative',
       marginLeft:widthPercentageToDP('83%'),
        top:heightPercentageToDP('25%')
    },
    btext:{
        color:'#FFFFFF',
        fontSize:18,
        lineHeight:22.5,
        fontFamily:'RigSans-Bold',
        marginBottom:4,
        marginTop:8
     
    },
  
    atext:{
        color:'#FFFFFF',
        marginBottom:20,
        // marginTop:10,
        fontFamily:'Poppins-Regular',
        marginBottom:8,
        // marginTop:4
    },
    img:{
        height:12,
        width:12,
        marginBottom:25,
        marginTop:25
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

    createtext:{
        fontSize:24,
        lineHeight:30.83,
        color:'#FFFFFF',
    
        fontFamily:'RigSolid-BoldFill',
        
        width:'100%',
        textAlign:'center'
     },
})
export default notesScreen;