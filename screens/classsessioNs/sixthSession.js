import React from 'react';
import {Text,View,StyleSheet,Image,TextInput,TouchableOpacity} from 'react-native'; 
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const sixthSession=({navigation})=>{
    return(
        <View style={{backgroundColor:'#FFFFFF',flex:1,padding:20}}>
            <TouchableOpacity onPress={()=>navigation.navigate('interpret')}>
             <View style={styles.round}>
                <Image source={require('../../assets/images/round.png')} style={styles.imground} />
                <Image source={require('../../assets/images/back.png')} style={styles.cross} />
            </View>  
            </TouchableOpacity>
            <View style={styles.div}>
                <Text style={styles.createtext}>Release + Receive List</Text>
            </View>
            <View style={styles.listview}>
                <Text style={styles.listtext}>RELEASE LIST</Text>
            </View>
            <View style={styles.ipsumview}>
                <Text style={styles.ipsumtext}>Lorem ipsum dolor sit amet, conseteturle{'\n'}
Lorem ipsum dolor sit amet, conse.
</Text>
            </View>
            <View style={styles.container}>
                
            <View style={{flexDirection:'row',width:'100%',}}>
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
        <View style={{flexDirection:'row',width:'100%',marginTop:heightPercentageToDP('7%')}}>
             <Text style={{width:'100%',position:'absolute',top:heightPercentageToDP('2%'),left:widthPercentageToDP('2%'),fontSize:18,lineHeight:22.14,lineHeight:18,padding:5}}>3</Text>
             <TextInput 
             style={{position:'absolute',left:widthPercentageToDP('9%'),width:'85%',}}
       placeholder = '' 
       underlineColorAndroid='#000000'
    />
        </View>    

           
            </View>
            <View style={styles.listview}>
                <Text style={styles.listtext}>RELEASE LIST</Text>
            </View>
            <View style={styles.ipsumview}>
                <Text style={styles.ipsumtext}>Lorem ipsum dolor sit amet, conseteturle{'\n'}
Lorem ipsum dolor sit amet, conse.
</Text>
            </View>
            <View style={styles.container}>
                
                <View style={{flexDirection:'row',width:'100%',}}>
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
            <View style={{flexDirection:'row',width:'100%',marginTop:heightPercentageToDP('7%')}}>
                 <Text style={{width:'100%',position:'absolute',top:heightPercentageToDP('2%'),left:widthPercentageToDP('2%'),fontSize:18,lineHeight:22.14,lineHeight:18,padding:5}}>3</Text>
                 <TextInput 
                 style={{position:'absolute',left:widthPercentageToDP('9%'),width:'85%',}}
           placeholder = '' 
           underlineColorAndroid='#000000'
        />
            </View>    
    
               
                </View>
            <TouchableOpacity onPress={()=>navigation.navigate('clearing')}>
            <View style={styles.continueview}>
                <Text style={styles.continuetext}>CONTINUE</Text>
            </View>
            </TouchableOpacity>
        </View>
    )
};
const styles = StyleSheet.create({
    imground:{
        height:30,
        width:
        30,
    },
    container:{
        // borderWidth:0.5,
        
        borderRadius:10,
        backgroundColor:'rgba(0, 0, 0, 0.08)',
        width:'100%',
        height:198,
        
    },
    listview:{
        marginTop:10
    },
    inputtext:{
        color:'#000000',
        fontfamily:'RigSans-Medium',
        fontSize:18,
        lineHeight:22.14,
       width:'5%'
    },
    inputborderline:{
        borderBottomWidth:1,
        width:'85%',
        position:'relative',
        bottom:25,borderBottomWidth:0.5,
        opacity:0.5
    },
    listtext:{
        fontSize:15,
        line:18.42,
        color:'#000000',
        fontfamily:'RigSans-Medium',
      
    },
    ipsumview:{

    },
    ipsumtext:{
        color:'#000000',
        fontfamily:'RigSans-Medium',
        fontSize:12,
        line:14.76,
        marginBottom:20
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
    // paddingTop:10,
    // marginBottom:"15%"
    width:'90%'
},
continueview:{
    width:'100%',
      
    backgroundColor:'#000000',
    borderRadius:19.5,
    height:39,
     alignItems:'center',
    justifyContent:'center',
    marginTop:heightPercentageToDP('1%')
    ,

},
continuetext:{
 color:'#FFFFFF',
        fontFamily:'RigSans-Semibold'
},
createtext:{
    fontSize:24,
    lineHeight:30.83,
    color:'#000000',

    fontFamily:'RigSolid-BoldFill',
    
    // width:'100%',
},
})
export default sixthSession;