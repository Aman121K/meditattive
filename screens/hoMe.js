import React,{useState} from 'react';
import { View,Text,StyleSheet,Image, TextInput, TouchableOpacity,Modal,Alert } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from './utility';
const hoMe=({navigation})=>{
    const [isVisible,setIsVisible]=useState(false);
    const [showModalok,setShowModalok]=useState(false);
    const killAll=()=>{
        setShowModalok(false);
    }
    return(
        <View style={styles.container}>
            <View style={styles.outer}>
                <Image source={require('../assets/images/cont.png')} style={styles.contimage}/>
                <View style={styles.inervw}>
                    <Text style={styles.welcometext}>WELCOME</Text>
                    <Text style={styles.csndratext}>Cassandra</Text>
                </View>  
            </View>
            <View style={styles.secondouter}>
                <TouchableOpacity onPress={()=>navigation.navigate('notifications')}>
                    <Image source={require('../assets/images/ntf.png')} style={styles.ntfimage}/>
                    </TouchableOpacity>   
                    <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
                    {/* <TouchableOpacity onPress={()=>setIsVisible(true)}> */}
                    <Image source={require('../assets/images/lst.png')} style={styles.lstimg}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.inputview}>
                    <TextInput
                    placeholder='Search'
                    placeholderTextColor='#000000'
                    style={styles.textinput}/>
                    <Image source={require('../assets/images/srch.png')} style={styles.srchimg}/>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('first')}>

                <View style={styles.penview}>

                    <Image source={require('../assets/images/pen.png')} style={styles.penimg} resizeMode='center'/>
                    <Text style={styles.pentxt}>Begin Coloring {'\n'}Session</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('seventh')}>
                <View style={styles.ntpdview}>
                    <Image source={require('../assets/images/ntpd.png')} style={styles.ntpdimg} resizeMode='center' />
                    <Text style={styles.ntpdtxt}>Journal</Text>
                    
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setShowModalok(true)}>
                <View style={styles.bookview}>
                    <Image source={require('../assets/images/book.png')} style={styles.bookimg} resizeMode='center' />
                    <Text style={styles.booktxt}>Meditative Coloring {'\n'}Ebook</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('rip')}>

                <View style={styles.ddgview}>
                    <Image source={require('../assets/images/ddg.png')} style={styles.ddgimg} resizeMode='center' />
                    <Text style={styles.ddgtxt}>Breathwork Chart</Text>
                </View>
                </TouchableOpacity>

                {/* </TouchableOpacity> */}
                <View>
        <Modal
        //   animationType={'slide'}
          transparent={true}
          visible={showModalok}
          
         >
          <View style={{height:273,width:'95%',alignSelf:'center',backgroundColor:'#FFFFFF',marginTop:'60%',borderRadius:20}}>
              <View style={{alignSelf:'flex-end',margin:'3%'}}>
                  <TouchableOpacity onPress={()=>killAll()}>
                  <Image source={require('../assets/images/hide.png')} style={{height:20,width:20}}></Image>
                  </TouchableOpacity>
              </View>
            <View style={styles.bottomborder}>
                <Text style={styles.invitetext}>Invite to App</Text>
            </View>
    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:heightPercentageToDP('2%')
}}>
          <View>
              <Image source={require('../assets/images/sms.png')} style={styles.smsimage}/>
              <Text style={{fontSize:12,lineHeight:12.3,color:'#A7A7A7',fontFamily:'RigSans-Medium'
                            ,alignSelf:'center',marginTop:5}}>SMS</Text>
          </View>
          <View>
              <Image source={require('../assets/images/facebook.png')} style={styles.fcbimage}/>
              <Text style={{fontSize:12,lineHeight:12.3,color:'#A7A7A7',fontFamily:'RigSans-Medium'
                            ,alignSelf:'center',marginTop:5}}>Facebook</Text>
          </View>
          <View>
              <Image source={require('../assets/images/whatsapp.png')} style={styles.wtzappimage}/>
              <Text style={{fontSize:12,lineHeight:12.3,color:'#A7A7A7',fontFamily:'RigSans-Medium'
                            ,alignSelf:'center',marginTop:5}}>Whatsapp</Text>
          </View>
          <View>
              <Image source={require('../assets/images/skype.png')} style={styles.skypeimage}/>
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
                <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
      >
          <View style={{backgroundColor:'red',height:'100%',width:'80%',alignSelf:'flex-end',borderBottomLeftRadius:120}}>
          <TouchableOpacity onPress={()=>setIsVisible(false)}>
          <View><Text style={{color:'white'}}>Cancel</Text></View>
          </TouchableOpacity>
          </View>
          </Modal>
        </View>
    )
};
const styles=StyleSheet.create({
container:{
    backgroundColor:'#FFFFFF',
    flex:1,
    padding:20
},
outer:{
flexDirection:'row',
// justifyContent:'space-between'
},
contimage:{
height:46,
width:46
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
csndratext:{
    fontSize:22,
lineHeight:28,
color:'#000000',
fontFamily:'RigSans-Medium'
},
secondouter:{
flexDirection:'row',
justifyContent:'flex-end',
position:'relative',
bottom:hp('4.5%')
},
ntfimage:{
height:24.28,
width:22.06,
// width:'100%',
position:'relative',
right:15
},


lstimg:{
height:17,
width:21.86,
alignSelf:'center'
},
inervw:{
    width:'100%',
    paddingLeft:10
},
inputview:{
    borderWidth:1,
    backgroundColor:'rgba(0, 0, 0, 0.08)',
    borderColor:'rgba(0, 0, 0, 0.5)',
    borderRadius:19.5,
    width:'100%',
    paddingLeft:10,
    flexDirection:'row',
    justifyContent:'space-between'
},
textinput:{
    fontSize:15,
    lineHeight:14.76,
    fontFamily:'RigSans-Medium',
    width:'100%',
},
srchimg:{
    height:15,
    width:15,
    position:'relative',
    top:15,
    right:23
},
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
penview:{
 borderWidth:1,
    borderRadius:12,
    height:100,
    width:'100%',
    marginTop:40,
    backgroundColor:'#000000',
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignSelf:'center',
    alignItems:'center'
},
penimg:{
height:35,
width:39.60,
width:'20%'
},
pentxt:{
color:'#FFFFFF',
fontSize:18,
fontFamily:'RigSans-Medium',
width:'60%',

},
ntpdview:{
    borderWidth:1,
    borderRadius:12,
    height:100,
    width:'100%',
    marginTop:40,
    backgroundColor:'#000000',
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignSelf:'center',
    alignItems:'center'
},
ntpdimg:{
    height:40,
    width:46,
    width:'20%'
},
ntpdtxt:{
    color:'#FFFFFF',
    // fontWeight:18,
    fontSize:18,
    fontFamily:'RigSans-Medium',
    // position:'relative',
    // right:'100%'
    width:'60%'
},
bookview:{
    borderWidth:1,
    borderRadius:12,
    height:100,
    width:'100%',
    marginTop:40,
    backgroundColor:'#000000',
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignSelf:'center',
    alignItems:'center'
   },
bookimg:{
    height:40,
    width:51,
    width:'20%',
},
booktxt:{
    color:'#FFFFFF',
    width:'60%',
    fontSize:18,
    fontFamily:'RigSans-Medium',
},
ddgview:{
    borderWidth:1,
    borderRadius:12,
    height:100,
    width:'100%',
    marginTop:40,
    backgroundColor:'#000000',
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignSelf:'center',
    alignItems:'center'
},
ddgimg:{
    height:40,
    width:49.03,
    width:'20%',
    
},
ddgtxt:{
    color:'#FFFFFF',
    width:'60%',
    // fontWeight:18,
    fontSize:18,
    fontFamily:'RigSans-Medium',
}
})
export default hoMe; 