import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity,TextInput} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
const SessionEight=({navigation})=>{
    return(
        <View style={{padding:20,backgroundColor:'#FFFFFF',flex:1}}>
               <View style={styles.secondryview}>
            <TouchableOpacity onPress={()=>navigation.navigate('home')}>
             <View style={styles.round}>
                <Image source={require('../../assets/images/round.png')} style={styles.imground} />
                <Image source={require('../../assets/images/back.png')} style={styles.cross} />
            </View>  
            </TouchableOpacity>
            
            {/* <TouchableOpacity onPress={()=>navigation.navigate('menu')}> */}
            <View style={{width:'100%'}}>
            <Text style={styles.createtext}>JOURNAL</Text>
            </View>
            {/* </TouchableOpacity> */}
            
            <View style={{position:'relative',bottom:-4,left:widthPercentageToDP('1%')}}>
                <Image source={require('../../assets/images/dell.png')} style={{height:20,width:17}}/>
            </View>
            </View> 
            <View style={{padding:'6%',}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontSize:18,lineHeight:18.45,color:'#000000',fontFamily:'RigSans-Bold',}}>Notes</Text>
                <Text style={{fontSize:10,color:'#A3A3A3',fontFamily:'RigSans-Medium',position:'relative',}}>28 Mar 2021</Text>
            </View>
                    <Text style={{marginTop:8,fontSize:13,lineHeight:15.99,color:'#000000',fontFamily:'RigSans-Medium'}}>The Study of Choice. 
                    Defining Economics is Money conservation.</Text>
                    <View style={{backgroundColor:'#FFFFFF',borderWidth:5,width:'100%',height:213,borderRadius:10,opacity:0.5,marginTop:'10%',justifyContent:'center',}}>
                        <Image source={require('../../assets/images/sparrow.png')} style={{height:157.47,width:181.03,position:'absolute',left:widthPercentageToDP('18%')}}/>
                </View> 
                <View style={{alignSelf:'center'}}>
                    <Text style={{fontSize:13,marginTop:'6%',lineHeight:19.5,color:'#494949',
                    fontFamily:'Rigsans-Medium'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum 
                        eget purus in. Consectetur eget id morbi amet amet, in. </Text>
                </View>
             <View style={{height:140,borderRadius:10,backgroundColor:'rgba(0, 0, 0, 0.08)',padding:10,marginTop:heightPercentageToDP('8%'),}}>
                 <View style={{flexDirection:'row',width:'100%',marginTop:-10}}>
             <Text style={{width:'100%',position:'absolute',top:heightPercentageToDP('2%'),left:widthPercentageToDP('2%'),fontSize:18,lineHeight:22.14,lineHeight:18,padding:5}}>1</Text>
             <TextInput 
             style={{position:'absolute',left:widthPercentageToDP('9%'),width:'85%',}}
       placeholder = '' 
       underlineColorAndroid='#000000'
    />
        </View>
                 <View style={{flexDirection:'row',width:'100%',marginTop:heightPercentageToDP('7%')}}>
             <Text style={{width:'100%',position:'absolute',top:heightPercentageToDP('2%'),left:widthPercentageToDP('2%'),fontSize:18,lineHeight:22.14,lineHeight:18,padding:5}}>2</Text>
             <TextInput 
             style={{position:'absolute',left:widthPercentageToDP('9%'),width:'85%',}}
       placeholder = '' 
       underlineColorAndroid='#000000'
    />
        </View>
             </View>
            </View>      
       
            </View>
    )
};
const styles=StyleSheet.create({
    secondryview:{
        flexDirection:'row',
        // width:'80%',
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
        color:'#000000',
    
        fontFamily:'RigSolid-BoldFill',
        
        width:'100%',
        textAlign:'center'
     },
})
export default SessionEight;
