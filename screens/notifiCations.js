import React from 'react';
import {View,Text,StyleSheet,Image,ImageBackground,TouchableOpacity} from 'react-native';
import { heightPercentageToDP } from '../screens/utility';
const notifiCations=({navigation})=>{
    return(
        <ImageBackground source={require('../assets/images/bckgrnd2.png')} style={{height:'100%',width:'100%',}} >

        <View style={{padding:20}}>
        <View style={styles.secondryview}>
            <TouchableOpacity onPress={()=>navigation.navigate('plans')}>
             <View style={styles.round}>
                <Image source={require('../assets/images/round.png')} style={styles.imground} />
                <Image source={require('../assets/images/back.png')} style={styles.cross} />
            </View>  
            </TouchableOpacity>
            
            {/* <TouchableOpacity onPress={()=>navigation.navigate('menu')}> */}
            <View style={{width:'100%'}}>
            <Text style={styles.createtext}>Notifications</Text>
            </View>
            {/* </TouchableOpacity> */}
            </View> 
            <View style={{flexDirection:'row',marginTop:heightPercentageToDP('5%'),marginTop:20,marginBottom:20}} >
            <View style={{width:'9%',position:'relative',top:5}}>
                <Image source={require('../assets/images/whitestar.png')} style={styles.image} />
             </View>  
             
                    <Text style={styles.text}>Lorem ipsum dolor sit amet, conseteturle{'\n'}
                    Lorem ipsum dolor sit amet, conse.
                 </Text>
              
                 <View style={{width:'10%',position:'relative',top:12,right:'5%'}}>
                 <Image source={require('../assets/images/cancel.png')}  style={styles.image2}/>
                 </View>
            </View>
            <View style={{flexDirection:'row',marginTop:20,marginBottom:20}} >
            <View style={{width:'9%',position:'relative',top:5}}>
                <Image source={require('../assets/images/whitestar.png')} style={styles.image} />
             </View>  
             
                    <Text style={styles.text}>Lorem ipsum dolor sit amet, conseteturle{'\n'}
                    Lorem ipsum dolor sit amet, conse.
                 </Text>
              
                 <View style={{width:'10%',position:'relative',top:12,right:'5%'}}>
                 <Image source={require('../assets/images/cancel.png')}  style={styles.image2}/>
                 </View>
            </View>
            <View style={{flexDirection:'row',marginTop:20,marginBottom:20}} >
            <View style={{width:'9%',position:'relative',top:5}}>
                <Image source={require('../assets/images/whitestar.png')} style={styles.image} />
             </View>  
             
                    <Text style={styles.text}>Lorem ipsum dolor sit amet, conseteturle{'\n'}
                    Lorem ipsum dolor sit amet, conse.
                 </Text>
              
                 <View style={{width:'10%',position:'relative',top:12,right:'5%'}}>
                 <Image source={require('../assets/images/cancel.png')}  style={styles.image2}/>
                 </View>
            </View>
            <View style={{flexDirection:'row',marginTop:20,marginBottom:20}} >
            <View style={{width:'9%',position:'relative',top:5}}>
                <Image source={require('../assets/images/whitestar.png')} style={styles.image} />
             </View>  
             
                    <Text style={styles.text}>Lorem ipsum dolor sit amet, conseteturle{'\n'}
                    Lorem ipsum dolor sit amet, conse.
                 </Text>
              
                 <View style={{width:'10%',position:'relative',top:12,right:'5%'}}>
                 <Image source={require('../assets/images/cancel.png')}  style={styles.image2}/>
                 </View>
            </View>
            <TouchableOpacity>
            <View style={styles.continueview}>
                <Text style={styles.continuetext}>CLEAR ALL</Text>
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
        width:'100%',
        
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
     continueview:{
        width:'100%',
          
        backgroundColor:'#FFFFFF',
        borderRadius:19.5,
        height:39,
         alignItems:'center',
        justifyContent:'center',
        marginTop:heightPercentageToDP('33%')
        ,
    
    },
    continuetext:{
     color:'#000000',
            fontFamily:'RigSans-Semibold'
    },
     image:{
        height:10,
        width:10,
        // width:'100%'
     },
     text:{
        fontSize:14,
        lineHeight:17.19,
        color:'#FFFFFF',
        width:'85%'
     },
     image2:{
        height:10,
        width:10,
        // width:'100%'
     }
})
export default notifiCations;