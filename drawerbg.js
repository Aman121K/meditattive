import React,{useState} from 'react';
import { View, Text, Image,StyleSheet,Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { heightPercentageToDP } from 'react-native-responsive-screen';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

// import </TouchableOpacity> from './screens/termsConditions';
// import { exp } from 'react-native/Libraries/Animated/Easing';
const Drawerbg = ({ navigation }) => {
      const [showModalok,setShowModalok]=useState(false);
      const killAll=()=>{
        setShowModalok(false);
    }
    return (
        <View>
            <View style={{ alignSelf: 'center', marginTop: heightPercentageToDP('5%') }}>
                <Image
                    source={require('./assets/images/drawerimg.png')} style={{ height: 106, width: 106 }} />
                <Text style={{ fontSize: 22, lineHeight: 28, color: '#FFFFFF', fontFamily: 'RigSans-Medium',alignSelf:"center"}}>Federica</Text>
                <Text style={{ fontSize: 15, lineHeight: 28, color: '#FFFFFF', fontFamily: 'RigSans-Medium',alignSelf:'center' }}>abc@abc.com</Text>

            </View>
          
            <View style={{padding:10,}}>
            <View  style={{flexDirection:'row',marginTop:heightPercentageToDP('4%')}}>
                <View style={{justifyContent:'center',alignItems:'center',width:'20%'}} >
                    <Image source={require('./assets/images/subscription.png')} style={{height:16
                    ,width:16,}} />
                </View>
                <View style={{width:'70%',}}>
                <TouchableOpacity onPress={()=>navigation.navigate('activeplans')}>
                    <Text style={{color:'#FFFFFF',fontSize:18,lineHeight:28,fontFamily:'RigSans-SemiBold'}}>Subscription Plan</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View  style={{flexDirection:'row',marginTop:heightPercentageToDP('3%')}}>
                <View style={{justifyContent:'center',alignItems:'center',width:'20%'}} >
                    <Image source={require('./assets/images/invite.png')} style={{height:20
                    ,width:22,}} />
                </View>
                

                <View style={{width:'70%'}}>
                <TouchableOpacity onPress={()=>setShowModalok(true)}>
                    <Text style={{color:'#FFFFFF',fontSize:18,lineHeight:28,
                    fontFamily:'RigSans-SemiBold'}}>Invite to App</Text>
                                    </TouchableOpacity>

                </View>
            </View>
            <View  style={{flexDirection:'row',marginTop:heightPercentageToDP('3%')}}>
                <View style={{justifyContent:'center',alignItems:'center',width:'20%'}} >
                    <Image source={require('./assets/images/drawerstar.png')} style={{height:20
                    ,width:20,}} />
                </View>
                <View style={{width:'70%'}}>
                    <Text style={{color:'#FFFFFF',fontSize:18,lineHeight:28,
                    fontFamily:'RigSans-SemiBold'}}>Rate App</Text>
                </View>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('menu')}>

            <View  style={{flexDirection:'row',marginTop:heightPercentageToDP('3%')}}>
                <View style={{justifyContent:'center',alignItems:'center',width:'20%'}} >
                    <Image source={require('./assets/images/help.png')} style={{height:16.43
                    ,width:16.43,}} />
                </View>
                <View style={{width:'70%'}}>

                    <Text style={{color:'#FFFFFF',fontSize:18,lineHeight:28,
                    fontFamily:'RigSans-SemiBold'}}>Help</Text>
                </View>
            </View>
            </TouchableOpacity>

            <View  style={{flexDirection:'row',marginTop:heightPercentageToDP('3%')}}>
                <View style={{justifyContent:'center',alignItems:'center',width:'20%'}} >
                    <Image source={require('./assets/images/drawercheck.png')} style={{height:21.81
                    ,width:18,}} />
                </View>
                <View style={{width:'70%'}}>
                <TouchableOpacity onPress={()=>navigation.navigate('terms')}>

                    <Text style={{color:'#FFFFFF',fontSize:18,lineHeight:28,
                    fontFamily:'RigSans-SemiBold'}}>Terms & Conditions</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{borderTopWidth:0.5,borderColor:'#FFFFFF',width:'100%',position:'relative',top:heightPercentageToDP('7%')}}></View>
            <View  style={{flexDirection:'row',marginTop:heightPercentageToDP('8%')}}>

                
                <View style={{justifyContent:'center',alignItems:'center',width:'20%'}} >
                    <Image source={require('./assets/images/drawerchek.png')} style={{height:24
                    ,width:22,}} />
                </View>
                <View style={{width:'70%',}}>
                    <Text style={{color:'#FFFFFF',fontSize:18,lineHeight:28,
                    fontFamily:'RigSans-SemiBold'}}>Logout</Text>
               
                </View> 
            </View>
            <View>
        <Modal
        //   animationType={'slide'}
          transparent={true}
          visible={showModalok}
          
         >
          <View style={{height:273,width:'95%',alignSelf:'center',backgroundColor:'#FFFFFF',marginTop:'60%',borderRadius:20}}>
              <View style={{alignSelf:'flex-end',margin:'3%'}}>
                  <TouchableOpacity onPress={()=>killAll()}>
                  <Image source={require('./assets/images/hide.png')} style={{height:20,width:20}}></Image>
                  </TouchableOpacity>
              </View>
                <TouchableOpacity onPress={()=>setShowModalok(true)}> 
            <View style={styles.bottomborder}>
                <Text style={styles.invitetext}>Invite to App</Text>
            </View>
            </TouchableOpacity>
    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:heightPercentageToDP('2%')
}}>
          <View>
              <Image source={require('./assets/images/sms.png')} style={styles.smsimage}/>
              <Text style={{fontSize:12,lineHeight:12.3,color:'#A7A7A7',fontFamily:'RigSans-Medium'
                            ,alignSelf:'center',marginTop:5}}>SMS</Text>
          </View>
          <View>
              <Image source={require('./assets/images/facebook.png')} style={styles.fcbimage}/>
              <Text style={{fontSize:12,lineHeight:12.3,color:'#A7A7A7',fontFamily:'RigSans-Medium'
                            ,alignSelf:'center',marginTop:5}}>Facebook</Text>
          </View>
          <View>
              <Image source={require('./assets/images/whatsapp.png')} style={styles.wtzappimage}/>
              <Text style={{fontSize:12,lineHeight:12.3,color:'#A7A7A7',fontFamily:'RigSans-Medium'
                            ,alignSelf:'center',marginTop:5}}>Whatsapp</Text>
          </View>
          <View>
              <Image source={require('./assets/images/skype.png')} style={styles.skypeimage}/>
              <Text style={{fontSize:12,lineHeight:12.3,color:'#A7A7A7',fontFamily:'RigSans-Medium'
                            ,alignSelf:'center',marginTop:5}}>Skype</Text>
          </View>
    </View>
    <View style={styles.bottomborder}>
        <Text style={{fontSize:15,lineHeight:18.45,color:'#000000',fontFamily:'RigSans-Bold'
               ,paddingLeft:'5%',marginBottom:7,
               marginTop:heightPercentageToDP('3%'), }}>Copy Link</Text>
    </View>
    <View style={{alignSelf:'center',justifyContent:'center',borderWidth:0.5,borderRadius:18,borderColor:
    '#B4B4B4',width:'90%',marginTop:heightPercentageToDP('3%'),height:37.66,}}>
       <View style={{borderWidth:1,backgroundColor:'#000000',width:85.77,height:29.29,borderRadius:19.5,
       alignItems:'center',justifyContent:'center',position:'absolute',left:widthPercentageToDP('63%')}}>
        <Text style={{fontSize:12,lineHeight:18,fontFamily:'Poppins-Regular',color:'#FFFFFF',}}>Copy</Text>
        </View>
    </View>
         </View>
        </Modal>
        </View>
        </View>
        </View>
    )
   
};
const styles = StyleSheet.create({
    bottomborder:{
        borderBottomWidth:0.5,
        borderEndColor:' #454545',
        opacity:0.5,
        
        },
        invitetext:{
            fontSize:15,
            lineHeight:18.45,
            width:'100%',
            paddingLeft:'5%',
            marginBottom:7,
            color:'#000000',
            fontFamily:'RigSans-Bold',
            },
            smsimage:{
                height:34.52,
                width:34.52
                
                },
                fcbimage:{
                    height:34.52,
                width:34.52
                },
                wtzappimage:{
                    height:34.52,
                    width:34.52
                },
                skypeimage:{
                    height:34.52,
                    width:34.52
                },
                welcometext:
                {
                fontSize:13,
                lineHeight:18,
                color:'#979797',
                fontFamily:'RigSans-Medium'
                },
})
export default Drawerbg;
