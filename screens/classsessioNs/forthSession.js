import React from 'react';
import { View,Text,TouchableOpacity,Image,StyleSheet, TextInput } from 'react-native';
import { heightPercentageToDP } from '../utility';

const forthSession=({navigation})=>{
    return(
        <View style={styles.outerview}>
           <TouchableOpacity onPress={()=>navigation.navigate('third')}>
            <View style={styles.round}>
                <Image source={require('../../assets/images/round.png')} style={styles.imground} />
                <Image source={require('../../assets/images/back.png')} style={styles.cross} />
            </View>  
            </TouchableOpacity>
            <View style={styles.div}>
                <Text style={styles.createtext}>Set your intention</Text>
            </View>
            <View style={styles.sessionview}>
                <Text style={styles.sessiontext}>Lorem ipsum dolor sit amet, conseteturle{'\n'}
<Text style={styles.ipsum}>Lorem ipsum dolor sit amet, conse.</Text>
</Text>
            </View>
            <View style={styles.nameview}>
                <Text style={styles.nametext}>Name your coloring session</Text>
            </View>
            <View style={styles.lastview}>
                <TextInput
                placeholder='session name'
                placeholderTextColor='#000000'
                style={styles.input}/>
            </View>
            <View style={styles.coloringview}>
                <Text style={styles.coloringtext}>What do you want to color about?</Text>
            </View>
            <View style={styles.andview}>
                <TextInput
                placeholder='type here'
                placeholderTextColor='#000000'
                
                style={styles.input2}/>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('fifth')}>
            <View style={styles.continueview}>
                <Text style={styles.continuetext}>CONTINUE</Text>
            </View>
            </TouchableOpacity>
        </View>
    )
};
const styles=StyleSheet.create({
    outerview:{
        padding:20,
        height:'100%',
        backgroundColor:'#FFFFFF',
        flex:1
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
    div:
    {alignSelf:'center',
    paddingTop:20,
    marginBottom:"15%"
},
ipsum:{
//    textAlign:'center',
        

},
sessionview:{

},
createtext:{
    fontSize:24,
    lineHeight:30.83,
    color:'#000000',

    fontFamily:'RigSolid-BoldFill',
    
    width:'100%',
},
sessiontext:{
    fontSize:15,
    lineHeight:18.42,
    fontFamily:'RigSans-Medium',
    color:'#000000',
    alignSelf:'center',
    paddingBottom:30,
},
nameview:{
paddingTop:10,
paddingBottom:10
},
nametext:{
fontSize:15,
lineHeight:14.74,
color:'#000000',
fontFamily:'RigSans-SemiBold',
},
input:{
    fontSize:15,
    lineHeight:14.74,
color:'#000000',
fontFamily:'RigSans-SemiBold',
width:'100%',
height:'100%',
paddingLeft:20,
opacity: 0.5
},
lastview:{
    // borderWidth:1,
    borderRadius:19.5,
    height:39,
    width:'100%',
    backgroundColor:'rgba(184, 184, 184, 0.24)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5, 
    marginBottom:20
},
coloringview:{
    paddingTop:10,
    paddingBottom:10
},
coloringtext:{
    fontSize:15,
lineHeight:14.74,
color:'#000000',
fontFamily:'RigSans-SemiBold'
},
andview:{
    borderRadius:19.5,
    // height:329,
    // width:'100%',
    backgroundColor:'rgba(184, 184, 184, 0.24)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5, 
    // marginBottom:20,
    justifyContent:'flex-start'
},
input2:{
    fontSize:15,
    lineHeight:14.74,
color:'#000000',
fontFamily:'RigSans-SemiBold',
textAlignVertical: "top",
width:'100%',
height:329,
paddingtop:0,
paddingBottom:0,
opacity: 0.5,
padding:20

},
continueview:{
    width:'100%',
      
    backgroundColor:'#000000',
    borderRadius:19.5,
    height:39,
    
   
    alignItems:'center',
    justifyContent:'center',
    marginTop:heightPercentageToDP('2%')
    ,

},
continuetext:{
 color:'#FFFFFF',
        fontFamily:'RigSans-Semibold'
}
})
export default forthSession; 