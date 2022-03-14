import React,{useState} from 'react';
import { View,Image,StyleSheet,Text, TouchableOpacity,Pressable } from 'react-native';
// import  from 'react-native/Libraries/Components/Pressable/Pressable';
import { heightPercentageToDP, widthPercentageToDP } from './utility';
import axios from 'axios';

const colours = ['white'];
const signUp=({navigation})=>{
    const onClick = (name) => {
        setStyles(name)
    }
    const [setStyle2,setStyle21]=useState('');
    const onClicks=(name,navi)=>{
        setStyle21(name)
        navigation.navigate(navi);
    }
    const [minValue, set_minValue] = useState(25);
const [maxValue, set_maxValue] = useState(75);
const handleInput = (e) => {
	set_minValue(e.minValue);
	set_maxValue(e.maxValue);
};
const setCHcek=(item)=>{
    item["status"]=!item["status"];
    setChanges(!chnages);
}
    const [setStyle1, setStyles] = useState('store');
    const [userName,setUserName]=useState('py601826@gmail.com');
    const login = async()=>{
        // try{
        //     let response=await axios.post('https://nidhii.co.in/api/login',{    
        //     "email":userName,
        //     "password":password,
        //     "role":"customer"
        // })
        //     if(response.status==200){
                navigation.navigate('signin')
        //     }
        //     console.log("api...",response.data);
        // }catch(error){
        //     console.log(error)
        // }
}
    return(
        <View  style={styles.outerview}>
            <Pressable 
            onPressIn={()=>navigation.navigate('onboarding')}>
            <View style={styles.round}>
                <Image source={require('../assets/images/round.png')} style={styles.imground} />
                <Image source={require('../assets/images/cross.png')} style={styles.cross} resizeMode='center' />
            </View>
            </Pressable>
            <View style={styles.container}>
            <View style={styles.div}>
                <Text style={styles.createtext}>Create Your Account</Text>
            </View>
            <View style={styles.miv}>
                <TouchableOpacity onPressOut={()=>onClicks('block1','signin')}>
                <View style={setStyle2=='block1'? styles.border:{padding:10,backgroundColor:'black',borderRadius:19.5,flexDirection:'row',justifyContent:'space-evenly',width:'100%'}}> 
                <View style={{width:'10%'}}>
                {/* mesg.png */}
                {setStyle2=="block1"?
                    <Image source={require('../assets/images/mesg.png')} resizeMode='center'  style={styles.image}/>:
                    <Image source={require('../assets/images/mesg2.png')} resizeMode='center'  style={styles.image}/>
                }
                    </View>
                    
                    <View style={{width:'70%'}}>
                    {/* <Pressable onPressIn={()=>  > */}
                    <TouchableOpacity onPress={()=>login()}>

                    <Text style={setStyle2=='block1'?styles.textemail:styles.textemailc}>Continue with Email</Text>
                    </TouchableOpacity>
                    {/* </Pressable> */}
                    </View>
                    
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPressOut={()=>onClicks('block2')} style={{marginTop:'5%'}}>
                <View style={setStyle2=='block2'? styles.border:{padding:10,backgroundColor:'black',borderRadius:19.5,flexDirection:'row',justifyContent:'space-evenly',width:'100%'}}> 
                <View style={{width:'10%'}}>

                {setStyle2=="block2"?
                    <Image source={require('../assets/images/google2.png')} resizeMode='center'  style={styles.image}/>:
                    <Image source={require('../assets/images/google.png')} resizeMode='center'  style={styles.image}/>
                }

                    {/* <Image source={require('../assets/images/google.png')} resizeMode='center'  style={styles.image}/> */}


                    </View>
                    <View style={{width:'70%'}}>
                    <Text style={setStyle2=='block2'?styles.textemail:styles.textemailc}>Continue with Google</Text>
                    </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPressOut={()=>onClicks('block3')} style={{marginTop:'5%'}}>
                <View style={setStyle2=='block3'? styles.border:{padding:10,backgroundColor:'black',borderRadius:19.5,flexDirection:'row',justifyContent:'space-evenly',width:'100%'}}> 
                <View style={{width:'10%'}}>

                {setStyle2=="block3"?
                    <Image source={require('../assets/images/fcb2.png')} resizeMode='center'  style={styles.image}/>:
                    <Image source={require('../assets/images/fcb.png')} resizeMode='center'  style={styles.image}/>
                }
                    
                    {/* <Image source={require('../assets/images/fcb.png')} resizeMode='center'  style={styles.image}/> */}
                    </View>
                    <View style={{width:'70%'}}>
                    <Text style={setStyle2=='block3'?styles.textemail:styles.textemailc}>Continue with Facebook</Text>
                    </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPressOut={()=>onClicks('block4')} style={{marginTop:'5%'}}>
                <View style={setStyle2=='block4'? styles.border:{padding:10,backgroundColor:'black',borderRadius:19.5,flexDirection:'row',justifyContent:'space-evenly',width:'100%'}}> 
                <View style={{width:'10%'}}>

                {setStyle2=="block4"?
                    <Image source={require('../assets/images/ios2.png')} resizeMode='center'  style={styles.image}/>:
                    <Image source={require('../assets/images/ios.png')} resizeMode='center'  style={styles.image}/>
                }

                    {/* <Image source={require('../assets/images/ios.png')} resizeMode='center'  style={styles.image}/> */}
                    </View>
                    <View style={{width:'70%'}}>
                    <Text style={setStyle2=='block4'?styles.textemail:styles.textemailc}>Continue with Apple</Text>
                    </View>
                </View>
                </TouchableOpacity>
            </View>
            </View>
            <View style={styles.stanza}>
            <View style={styles.padding}>
                <Text style={styles.ipsum}>Lorem ipsum dolor sit amet, consetetur sadipscing
elitr, sed diam nonumy eirmod <Text style={styles.conditions}>Terms & Conditions  </Text>
  labore et dolore magna aliquyam erat,</Text>
            </View>
            
            </View>
            <View style={styles.relativeview}>
            
                <Text style={styles.account}>Have an account? </Text>
            
            <View style={styles.parallel}>
                <TouchableOpacity onPress={()=>navigation.navigate('signin')}>
            <Text style={styles.login}>Log in</Text>
            </TouchableOpacity>
            </View>
            </View>
        </View>
    )
};
const styles=StyleSheet.create({
    container:{
padding:20,
osition:'relative',
top:0,
bottom:0,
left:0,
right:0,
paddingTop:heightPercentageToDP('10%')
// justifyContent:'center',
// alignContent:'center',
// alignItems:'center'
    },
    // button: {
    //     borderColor: 'black',
    //     borderWidth: 1,
    //     width: 50,
    //     height: 50,
    //   },
    imground:{
        height:30,
        width:30,
    },
    div:{
        alignSelf:'center',
        paddingTop:20
        // width:'100%'
    },
    cross:{
        // width:13,
        height:13,
        position:'relative',
        bottom:21,
        right:7,
        
    },
    createtext:{
        fontSize:24,
        lineHeight:30.83,
        color:'#000000',
    
        fontFamily:'RigSolid-BoldFill',
        
        width:'100%',
     },
     border:{
         borderWidth:1,
         borderRadius:19.5,
        //  alignSelf:'center',
         width:'100%',
         padding:10,
         justifyContent:'space-evenly',
        //  alignItems:'center',
         flexDirection:'row',
         backgroundColor:'white'
     },
     border1:{
        borderWidth:1,
        marginTop:30,
        borderRadius:19.5,
        alignSelf:'center',
        width:'100%',
         height:39,
        alignItems:'center',
        // justifyContent:'center',
        backgroundColor:'#000000',
        flexDirection:'row'
     },
     border2:{
        borderWidth:1,
        marginTop:30,
        borderRadius:19.5,
        alignSelf:'center',
        width:'100%',
         height:39,
        alignItems:'center',
        backgroundColor:'#000000',
        flexDirection:'row',
        justifyContent:'center',
     },
     border3:{
        borderWidth:1,
        marginTop:10,
        borderRadius:19.5,
        alignSelf:'center',
        width:'100%',
         height:39,
        alignItems:'center',
        backgroundColor:'#000000',
      flexDirection:'row',
      justifyContent:'center',
      marginTop:10,
     },
image:{
         height:15,
         width:21,
         position:'absolute',
        //  left:26
        // width:'100%'
     },
     image1:{
         height:21.7,
         width:21.7,
         position:'absolute',
         left:26,
        //  justifyContent:'center',
        //  alignContent:'center'
     },
     image2:{
         height:20,
         width:20,
         position:'absolute',
         left:26
     },
     image3:{
         height:24,
         width:20,
         position:'absolute',
         left:26
     },
     textemail:{
        fontSize:15,
        lineHeight:18,
        fontWeight:'500',
        fontFamily:'Poppins-Regular',
        color:"black",
        alignContent:'center',
        
     },
     textemailc:{
        fontSize:15,
        lineHeight:18,
        fontWeight:'500',
        fontFamily:'Poppins-Regular',
        color:"white",
        alignContent:'center',
        width:'100%',
        // textAlign:'center'
     },
     textgoogle:{
        fontSize:15,
        lineHeight:18,
        fontWeight:'500',
        fontFamily:'Poppins-Regular',
        color:"#FFFFFF"
     },
     textfcb:{
        fontSize:15,
        lineHeight:18,
        fontWeight:'500',
        fontFamily:'Poppins-Regular',
        color:"#FFFFFF",
        
     },
     textios:{
        fontSize:15,
        lineHeight:18,
        fontWeight:'500',
        fontFamily:'Poppins-Regular',
        color:"#FFFFFF",
        alignContent:'center',
        
     },
    
     dva:{
        borderWidth:1,
        borderRadius:19.5,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#000000',
        flexDirection:'row'
     },
     dvb:{
        borderWidth:1,
        marginTop:10,
        borderRadius:19.5,
        alignSelf:'center',
        width:'100%',
         height:39,
        alignItems:'center',
        backgroundColor:'white',
      flexDirection:'row',
      justifyContent:'center',
      marginTop:30,
     },
     dvc:{
        borderWidth:1,
        marginTop:10,
        borderRadius:19.5,
        alignSelf:'center',
        width:'100%',
         height:39,
        alignItems:'center',
        backgroundColor:'#FFFFFF',
      flexDirection:'row',
      justifyContent:'center',
      marginTop:30,
     },
     dvd:{
        borderWidth:1,
        marginTop:10,
        borderRadius:19.5,
        alignSelf:'center',
        width:'100%',
         height:39,
        alignItems:'center',
        backgroundColor:'#000000',
      flexDirection:'row',
      justifyContent:'center',
      marginTop:30,
     },
     stanza:{
        // position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        // top:'20%',
        paddingTop:heightPercentageToDP('20%'),
        paddingLeft:'13%',
        paddingRight:'13%',
       
        // top: height:0.93,
        // // marginLeft: width*0.18,
        
     },
     ipsum:{
         fontSize:14,
         lineHeight:15,
        //  fontWeight:'300',
        // margin:5,
         color:'#000000',
        //  fontWeight:'400',
         fontFamily:'RigSans-Medium',
         
         width:'100%',
         
         textAlign:'center'
     },
     conditions:{
        fontSize:14,
        lineHeight:15,
       //  fontWeight:'300',
        color:'#000000',
        fontFamily:'RigSans-Extrabold',
        margin:5,
        textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000",
     },
     account:{
        fontSize:14,
        lineHeight:15,
       //  fontWeight:'300',
    //    margin:5,
        color:'#000000',
        fontFamily:'RigSans-Medium ',
        textAlign:'center'
    },
     login:{
        fontSize:14,
        // lineHeight:15,
        // fontWeight:'bold',
    //    margin:3,
        color:'#000000',
        fontFamily:'RigSans-Bold ', 
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "#000",
        justifyContent:'center',
        position:'absolute',
       top:-3,
        fontFamily:'RigSans-Extrabold',
        
        textAlign:'center'
     },
   
  
     padding:{
        //  margin:10,
        width:'100%'
     },
     miv:{
         paddingTop:heightPercentageToDP('8%')
     },
     outerview:{
         padding:20,
         backgroundColor:'#FFFFFF',
         flex:1
     },
   relativeview:{
    flexDirection:'row',
    justifyContent:'center',
    position:'relative',
    top:heightPercentageToDP('5%'),
    // alignSelf:'center',
    // alignSelf:'center',
    paddingRight:'10%',
    width:'100%'
    
   }
})
export default signUp; 

