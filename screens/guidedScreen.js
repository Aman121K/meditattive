import React from 'react';
import {View,Text,ImageBackground,Image,StyleSheet,TouchableOpacity} from 'react-native';
// import { heightPercentageToDP } from 'react-native-responsive-screen';
import { heightPercentageToDP, widthPercentageToDP } from './utility';
import SoundPlayer from 'react-native-sound-player'

const guidedScreen=({navigation})=>{
    const playVideo=()=>{
        try {
            SoundPlayer.playUrl('https://www.chosic.com/wp-content/uploads/2021/07/The-Epic-Hero-Epic-Cinematic-Keys-of-Moon-Music.mp3')
        } catch (e) {
            console.log(`cannot play the sound file`, e)
        }
    }
    return(
        <ImageBackground source={require('../assets/images/bckgrnd2.png')} style={{height:'100%',width:'100%',}} >
        <View style={{alignSelf:'center'}}>
           <Image source={require('../assets/images/background.png')} style={styles.image}
            />
        </View>
      <View style={{position:'relative',bottom:heightPercentageToDP('28%'),padding:15}}>
        <View style={styles.secondryview}>
            <TouchableOpacity onPress={()=>navigation.navigate('rip')}>
             <View style={styles.round}>
                <Image source={require('../assets/images/cirlclea.png')} style={styles.imground} />
                <Image source={require('../assets/images/back.png')} style={styles.cross} />
            </View>  
            </TouchableOpacity>
            
            
            <View style={{width:'100%'}}>
            <Text style={styles.createtext}>Guided Meditation</Text>
            </View>
           
            </View>
            <View style={{alignItems:'center'}}>
            <View style={styles.barview}>
                <Image source={require('../assets/images/musicbar.png') } style={styles.imagebar}/>
            </View>
            <View style={styles.audioview}>
                <Text style={styles.audiotext}>Audio Name </Text>
            </View>
            <View style={styles.loremview}>
                <Text style={styles.loremtext}>Lorem ipsum dolor sit amet, conseteturle
Lorem ipsum dolor sit amet, conse.
</Text>
            </View>
        </View>
        <TouchableOpacity onPress={()=>playVideo()}>
        <View style={styles.playview}>
            <Image source={require('../assets/images/play.png')} style={styles.play} />
        </View>
        </TouchableOpacity>
        <View style={styles.soundview}>
            <Image source={require('../assets/images/sound.png')} style={styles.soundimage}/>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:heightPercentageToDP('9%')}}>
           
            <Image source={require('../assets/images/playbck.png')} style={{height:16.62,width:24}} />
            
          
            <Image source={require('../assets/images/loop.png')}  style={{height:24,width:22.69,marginLeft:20,marginRight:20}}/>
            
            
            <Image source={require('../assets/images/next.png')}  style={{height:16.63,width:24}}/>
            
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('note')}>
            <View style={styles.continueview}>
                <Text style={styles.continuetext}>CONTINUE</Text>
            </View>
            </TouchableOpacity>
        </View>
       
        </ImageBackground>
    )
};
const styles=StyleSheet.create({
image:{
    // height:heightPercentageToDP('32%'),
    width:widthPercentageToDP('100%'),
    // width:'100%',
    // borderBottomEndRadius:5,
    height:300,
    
},
secondryview:{
    flexDirection:'row',
    width:'90%',
    justifyContent:'space-between'
},
play:{
height:34,
width:34
},
round:{
    width:'80%'
},
playview:{
position:'absolute',
top:heightPercentageToDP('26.5%'),
left:widthPercentageToDP('85%'),
// justifyContent:'center',
alignSelf:'center'

},
createtext:{
    width:'100%',
    fontSize:24,
    lineHeight:30.83,
    color:'#FFFFFF',
    fontFamily:'RigSolid-BoldFill',
    textAlign:'center'
 },
 continueview:{
    width:'100%',
      
    backgroundColor:'#FFFFFF',
    borderRadius:19.5,
    height:39,
     alignItems:'center',
    justifyContent:'center',
    marginTop:heightPercentageToDP('9%')
    ,

},
continuetext:{
 color:'#000000',
        fontFamily:'RigSans-Semibold'
},
imground:{
    height:30,
    width:30,
},
soundview:{
// alignSelf:'center',
marginTop:heightPercentageToDP('21%'),
alignItems:'center',
justifyContent:'center'
},
soundimage:{
height:127,
width:120
},
audioview:{
marginBottom:18
},
barview:{
paddingBottom:11,
paddingTop:11
},
audiotext:{
color:'#FFFFFF',
fontSize:18,
lineHeight:22.14,
fontFamily:'RigSans-Medium'
},
loremview:{
    alignSelf:'center',
    // paddingTop:20,
    width:'100%'
},
loremtext:{
    fontSize:15,
lineHeight:18.45,
fontFamily:'RigSans-Medium',
width:'100%',
textAlign:'center',
color:'#FFFFFF'

},
cross:{
   height:18,
    position:'relative',
    bottom:25,
    left:2,
    resizeMode:'center'
},

imagebar:{
    height:14,
    width:18
}
})
export default guidedScreen;