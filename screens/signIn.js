import React,{useState} from 'react';
import { View,Image,StyleSheet,Text, TextInput,TouchableOpacity,Switch,Pressable} from 'react-native';
// import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { heightPercentageToDP, widthPercentageToDP } from './utility';
import axios from 'axios';
const colours = ['white'];
const signIn=({navigation})=>{
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
const [eyeCheck,setEyeCheck]=useState(false);
const handleInput = (e) => {
	set_minValue(e.minValue);
	set_maxValue(e.maxValue);
};
const setCHcek=(item)=>{
    item["status"]=!item["status"];
    setChanges(!chnages);
}
    const [setStyle1, setStyles] = useState('store');
    const [toggle, setToggle] = useState(false);
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const login = async()=>{
            try{
                let response=await axios.post('https://nidhii.co.in/api/login',{    
                "email":userName,
                "password":password,
                "role":"customer"
            })
                if(response.status==200){
                    navigation.navigate('plans')
                }
                console.log("api...",response.data);
            }catch(error){
                console.log(error)
            }
    }
    return(
        <View style={styles.outerview}>
            <Pressable onPress={()=>navigation.navigate('signup')}>
            <View style={styles.round}>
                <Image source={require('../assets/images/round.png')} style={styles.imground} />
                <Image source={require('../assets/images/back.png')} style={styles.cross} />
            </View>
            </Pressable>
            <View style={styles.container}>
            <View style={styles.div}>
                <Text style={styles.createtext}>log in to Your Account</Text>
            </View>
        </View>
        <View style={styles.emailpadding}>
            <Text style={styles.txa}>Your Email</Text>
        </View>
        
        <View style={styles.input1}>
            <TextInput
            placeholder='abc@abc.com'
            placeholderTextColor='#000000'
            onChangeText={(e)=>setUserName(e)}
            style={styles.textinput1}/>
            <View style={{width:'100%'}}>
           <Image source={require('../assets/images/ltmsg.png')} style={styles.img1} 
           resizeMode='center' />
           </View>
        </View>
        <View style={{paddingBottom:30}}>
        <View style={styles.passwordpadding}>
            <Text style={styles.txb}>Password</Text>
        </View>
        <View style={styles.input2}>
            <View style={{width:'80%'}}>
            <TextInput
            placeholder=''
            secureTextEntry={eyeCheck}
            placeholderTextColor='#000000'
            onChangeText={(e)=>setPassword(e)}
            style={styles.textinput2}/>
            </View>
            <View style={{width:'12%'}}>
            { 
            eyeCheck==true?
            <View>
                <TouchableOpacity onPress={()=>setEyeCheck(!eyeCheck)}>
            <Image source={require('../assets/images/secure.png')} 
             resizeMode='center'  style={{height:17.68,width:18.03, position:'relative',
             top:10,
             }} />
             </TouchableOpacity>
             </View>:
                 <View >
                     <TouchableOpacity onPress={()=>setEyeCheck(!eyeCheck)}>
              <Image source={require('../assets/images/unhide.png')} 
             resizeMode='center'  style={{height:17.68,width:18.03, position:'relative',
             top:10}}/>
            {/* //  right:widthPercentageToDP('15%')}} /> */}
             </TouchableOpacity>
             </View>
             }
             </View>
            </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{flexDirection:"row"}}>
            <Switch
        trackColor={{false: ' rgba(0, 0, 0, 0.16)', true: ' rgba(0, 0, 0, 0.16)'}}
        thumbColor="#000000"
        ios_backgroundColor="gray"
        onValueChange={(value) => setToggle(value)}
        value={toggle}
    />
     <Text style={{fontSize:12,lineHeight:14.76,color:'#000000',position:'relative',top:5,}}>Remember me</Text>
     </View>
    <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
    <Text style={{fontSize:12,lineHeight:14.76,color:'#000000',position:'relative',top:5,}}>Forgot Password</Text>
</View>
    </View>


            <View style={{paddingBottom:20,paddingTop:20}}>
            <Pressable onPressOut={()=>navigation.navigate('signup2')}>
                <TouchableOpacity onPress={()=>login()}>
            <View style={styles.viewcontinue}>
                <Text style={styles.textcontinue}>CONTINUE</Text>
            </View>
            </TouchableOpacity>
            </Pressable>
            <View style={{paddingTop:15}}>
            <View style={styles.viewor}>
                <Text style={styles.textor}>or</Text>
            </View>
            </View>
            </View>
            <View style={styles.miv}>
                
            <TouchableOpacity onPress={()=>onClicks('block2')} style={{marginTop:'5%'}}>
                <View style={setStyle2=='block2'? styles.border:{padding:10,backgroundColor:'black',borderRadius:19.5,flexDirection:'row',justifyContent:'space-evenly',width:'100%'}}> 
                <View style={{width:'10%'}}>

                {setStyle2=="block2"?
                    <Image source={require('../assets/images/google2.png')} resizeMode='center'  style={styles.image}/>:
                    <Image source={require('../assets/images/google.png')} resizeMode='center'  style={styles.image}/>
                }
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
  
<View style={styles.mainaccount}>
            
                <Text style={styles.account}>Don’t Have an account?</Text>
           
            
            <Pressable onPressOut={()=>navigation.navigate('signup2')}>
                <View style={styles.parallel}>
                <Text style={styles.login}> Sign up</Text>
                </View>
                </Pressable>
               
 </View>
        </View>
    )
};
const styles= StyleSheet.create({
    miv:{
        paddingTop:heightPercentageToDP('0%')
    },
    parallel:{
        paddingBottom:heightPercentageToDP('10%')
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
    image:{
        height:15,
         width:21,
         position:'absolute',
       // width:'100%'
    },
    textemail:{
        fontSize:15,
        lineHeight:18,
        fontWeight:'500',
        fontFamily:'Poppins-Regular',
        color:"black",
        alignContent:'center',
        width:'100%',
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
     
    image1:{
        height:21.7,
        width:21.7,
        position:'absolute',
        left:26,
       //  justifyContent:'center',
       //  alignContent:'center'
    },
    imground:{
        height:30,
        width:30,
    },
    mainaccount:{
        flexDirection:'row',
        justifyContent:'center',
        // marginTop:heightPercentageToDP('4%')
        marginTop:heightPercentageToDP('3%')
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
        color:'#000000',
    
        fontFamily:'RigSolid-BoldFill',
        
        width:'100%',
     },
     div:{
        alignSelf:'center',
        paddingTop:20,
        marginBottom:"15%"
        // width:'100%'
    },
    input1:{
        borderWidth:1,
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:19.5,
        backgroundColor:' rgba(0, 0, 0, 0.07)',
        borderColor:'inset 0px 3px 4px rgba(0, 0, 0, 0.14)',
        width:'100%',
        height:39,
        alignSelf:'center',
        marginTop:-5,
        
        marginBottom:10,
        
    },
    input2:{
        borderWidth:1,
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:19.5,
        backgroundColor:' rgba(0, 0, 0, 0.07)',
        borderColor:'inset 0px 3px 4px rgba(0, 0, 0, 0.14)',
        width:'100%',
        height:39,
        alignSelf:'center',
        marginTop:-5,
        marginBottom:10
    },
    img1:{
        height:18,
        width:18,
        position:'relative',
             top:10,
        // position:'relative',
        // top:10,
        // right:widthPercentageToDP('15%')
        
    },
    
     textinput1:{
        marginLeft:10,
        fontSize:15,
       
        fontFamily:'RigSans-Medium',
        // width:'80%',
        width:'85%',
        paddingLeft:10,
        opacity: 0.5
     },
     textinput2:{
        marginLeft:10,
        fontSize:15,
        fontFamily:'RigSans-Medium',
        // width:'80%',
        width:'100%',
        paddingLeft:10,
        opacity: 0.5
     },
     txa:{
        fontFamily:'RigSans-Medium',
        fontSize:14,
        // marginBottom:10,
        marginTop:10,
        color:'#000000',
        // marginLeft:10
     },
     txb:{
        fontFamily:'RigSans-Medium',
        fontSize:14,
        // marginBottom:10,
        marginTop:10,
        color:'#000000',
        
        // marginLeft:10
     },
     outerview:{
         padding:20,
         backgroundColor:'#FFFFFF',
         flex:1
     },
     emailpadding:{
        marginVertical:10
     },
     passwordpadding:{
        marginVertical:10
     },
     
 
  
    viewcontinue:{
        borderWidth:1,
        // width:"100%",
        backgroundColor:'#000000',
        // height:50,
        borderRadius:19.5,
        alignSelf:'center',
        width:'100%',
        height:39,
        justifyContent:'center',
        
    },
    textcontinue:{
        fontSize:15,
       lineHeight:18.42,
       fontFamily:'RigSans-SemiBold',
       color:"#FFFFFF",
    //    alignContent:'center',
       alignSelf:'center',
       
    },
    viewor:{
        marginBottom:-10,
        // marginTop:1
    },
    textor:{
        alignSelf:'center',
        fontSize:12,
        lineHeight:14.74,
        color:'#000000',
        fontFamily:'RigSans-Extrabold'
    },
   
    // parallel:{
    //     position:'absolute',
    //     // bottom:10,
    //     left:'43%'
    // },
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
        lineHeight:15,
        // fontWeight:'bold',
    //    margin:5,
        color:'#000000',
        fontFamily:'RigSans-Bold ', 
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "#000",
        // position:'relative',
        // position:'absolute',
        // top:heightPercentageToDP('1.6%'),
        // // top:20,
        fontFamily:'RigSans-Extrabold',
        // width:'100%',
        textAlign:'center'
    }
})

export default signIn; 