import React,{useState} from 'react';
import { View,Text,StyleSheet,Image,TouchableOpacity,TextInput } from 'react-native';
const firstSession=({navigation})=>{
    // const [password, setPassword] = useState('');
    return(
        <View style={styles.mainview}>
            {/* <TouchableOpacity onPress={()=>navigation.navigate('home')}> */}
            <TouchableOpacity onPressOut={()=>navigation.navigate('home')}>
            <View style={styles.round}>
                <Image source={require('../../assets/images/round.png')} style={styles.imground} />
                <Image source={require('../../assets/images/back.png')} style={styles.cross} />
            </View>  
            </TouchableOpacity>
            <View style={styles.div}>
                <Text style={styles.createtext}>Begin Session</Text>
            </View>
            <View style={styles.sessionview}>
                <Text style={styles.sessiontext}>What type of Session would you like to do?</Text>
            </View>
            <View style={styles.outerview}>
                <Image source={require('../../assets/images/smily.png')} resizeMode='center' style={styles.smileimage} />
                <Text style={styles.heavytxt}>Color HEAVY feelings</Text>
            </View>
            <TouchableOpacity onPressOut={()=>navigation.navigate('second')}>
            <View style={styles.lightview}>
                <Image source={require('../../assets/images/smily.png')} resizeMode='center' style={styles.lightimage} />
                <Text style={styles.lighttxt}>Color LIGHT feelings</Text>
            </View>
            </TouchableOpacity>
            <View style={styles.continueview}>
                <Text style={styles.continuetext}>CONTINUE</Text>
            </View>
        </View>
    )
};
const styles=StyleSheet.create({
    mainview:{
        padding:20,height:'100%'
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
    div:{
        alignSelf:'center',
        paddingTop:20,
        marginBottom:"15%"
    },
    createtext:{
        fontSize:24,
        lineHeight:30.83,
        color:'#000000',
    
        fontFamily:'RigSolid-BoldFill',
        
        width:'100%',
    },
    sessionview:{

    },
    sessiontext:{
        fontSize:20,
        lineHeight:24.56,
        fontFamily:'RigSans-Medium',
        color:'#000000',
        alignSelf:'center',
        paddingBottom:30,
       
    },
    outerview:{
        // borderWidth:1,
        width:'100%',
        height:39,
        backgroundColor:'rgba(0, 0, 0, 0.34)',
        borderRadius:19.5,
        flexDirection:'row',
        // justifyContent:'space-between',
        alignItems:'center',
        marginBottom:10
    },
    smileimage:{
        height:21,
        width:21,
        width:'20%'
    },
    heavytxt:{
        color:'#FFFFFF',
        fontSize:12,
        lineHeight:14.76,
        fontFamily:'RigSans-Medium',
        width:'80%'
    },
    lightview:{
        width:'100%',
        height:39,
        backgroundColor:'rgba(0, 0, 0, 0.34)',
        borderRadius:19.5,
        flexDirection:'row',
        // justifyContent:'space-between',
        alignItems:'center',
        marginTop:20
    },
    lightimage:{
        height:21,
        width:21,
        width:'20%'
    },
    lighttxt:{
        color:'#FFFFFF',
        fontSize:12,
        lineHeight:14.76,
        fontFamily:'RigSans-Medium',
        width:'80%'
    },
    continueview:{
        width:'100%',
        // height:39,
        backgroundColor:'#000000',
        borderRadius:19.5,
        paddingTop:10,
        paddingBottom:10,
       
        alignItems:'center',
        justifyContent:'center',
        // marginTop:20
        position: 'absolute',
        alignSelf:'center',
  bottom:11,
  marginBottom:20
    },
    continuetext:{
        color:'#FFFFFF',
        fontFamily:'RigSans-Semibold'
    }
})
export default firstSession; 