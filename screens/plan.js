 

import React, { useState } from 'react';
import  {View,Text, TouchableOpacity, FlatList,Image,StyleSheet,ImageBackground} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from './utility';
const plan=({navigation})=>{
    
    const [data,setData]=useState([
        {id:1,img:require('../assets/images/check.png'),title:'1 coloring session per month'},
        {id:1,img:require('../assets/images/check.png'),title:'Lorem ipsum dolor sit amet, consetetur sadipscin elitr, sed diam nonumy'},
        {id:1,img:require('../assets/images/check.png'),title:'Lorem ipsum dolor sit amet, consetetur sadipscin elitr, sed diam nonumy'},
        {id:1,img:require('../assets/images/check.png'),title:'1 coloring session per month'},
       
    ])
    const keyExtractor = (item, index) => item + index;
    const newRenderItem=({item,index})=>{
        return(
            <View>
                <TouchableOpacity> 
                {/* <View style={{flexDirection:'row'}}> */}
                <View style={styles.flatlistview}>
                <Image source={item.img} style={styles.renderimage}></Image>
                <Text style={styles.rendertext}>{item.title}</Text>
                </View>
                </TouchableOpacity>
            </View>
        )
    }
    return(
                    
      
                    <ImageBackground source={require('../assets/images/bckgrnd2.png')} style={{height:'100%',width:'100%',}} >
                        <View style={{padding:20}}>

            {/* <TouchableOpacity onPress={()=>navigation.navigate('home')}>
            <Text>hello</Text>
            </TouchableOpacity> */}
            <View style={styles.secondryview}>
            <View style={styles.round}>
                <Image source={require('../assets/images/round.png')} style={styles.imground} />
                <Image source={require('../assets/images/back.png')} style={styles.cross} />
            </View>  
            {/* <TouchableOpacity onPress={()=>navigation.navigate('signup2')}> */}
            <View style={{width:'100%'}}>
            <Text style={styles.createtext}>Meditative Coloring</Text>
            </View>
            {/* </TouchableOpacity> */}
            </View>
            <View style={styles.planview}>
                    <Text style={styles.plantext}>Subscription Plan</Text>
                </View>
                
               
                <View >
                    <FlatList
                    data={data}
                    renderItem={newRenderItem}
                    keyExtractor={keyExtractor}
                    />
                </View>
                <View style={styles.annualplan}>
                    <Text style={styles.annualtext}>$150 Annual ($20/month)</Text>
                </View>
                <View style={{marginTop:heightPercentageToDP('5%')}}>
                <View style={styles.versionplan}>
                    <Text style={styles.versiontext}>Skip and use a free version </Text>
                </View>
                 <TouchableOpacity onPress={()=>navigation.navigate('DrawerNavigation')}>
                <View style={styles.payview}>
                    <Text style={styles.paytext}>PAY NOW </Text>
                </View>
                </TouchableOpacity>
                </View>
                </View>
                </ImageBackground>
                
    
    )
};
const styles=StyleSheet.create({
    // mainview:{
    //     padding:20,
    //     backgroundColor:'green',
    //     flex:1
        
    // },
    planview:{
        // width:'100%',
        marginTop:heightPercentageToDP('9%'),
        borderBottomWidth:0.5,
        borderBottomColor:"#FFFFFF",
        width:widthPercentageToDP('70%'),

    },
    plantext:{
color:'#FFFFFF',
lineHeight:24.6,
fontFamily:'RigSans-Medium',
fontSize:20,
// marginBottom:11
    },
    flatlistview:{
        flexDirection:'row',
        marginTop:'8%'
    },
    annualplan:{
        // borderWidth:1,
        borderRadius:10,
        width:'100%',
        backgroundColor:'#6C6C6C',
        height:56,
        justifyContent:'center',
        marginTop:heightPercentageToDP('8%')
    },
    versiontext:{
        color:'#FFFFFF',
        alignSelf:'center',
        fontSize:15,
        lineHeight:18.45,
        fontFamily:'RigSans-Medium'
    },
    versionplan:{
        borderWidth:0.5,
        borderRadius:19.5,
        width:'100%',
        // backgroundColor:'#E5E5E5',
        height:39,
        justifyContent:'center',
        borderColor:'#FFFFFF',
        marginTop:heightPercentageToDP('11%')
    },
    payview:{
        borderWidth:0.5,
        borderRadius:19.5,
        width:'100%',
        backgroundColor:'#FFFFFF',
        height:39,
        justifyContent:'center',
        // borderColor:'#FFFFFF',
        marginTop:heightPercentageToDP('3%')
    },
    paytext:{
        color:'#000000',
        alignSelf:'center',
        fontSize:15,
        lineHeight:18.45,
        fontFamily:'RigSans-Bold'
    },
    annualtext:{
        color:'#FFFFFF',
        alignSelf:'center',
        fontSize:20,
        lineHeight:24.6,
        fontFamily:'RigSans-Bold'
    },
    rendertext:{
        color:'#FFFFFF',
        fontSize:14,
        lineHeight:14.76,
        fontFamily:'RigSans-Medium',
        width:'80%',
        paddingLeft:20,
        
    },
    renderimage:{
        height:20,
        width:20,
        
    },
    secondryview:{
        flexDirection:'row',
        width:'80%'
        // justifyContent:'space-between'
    },
    round:{
        width:'18%'
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
    createtext:{
        fontSize:24,
        lineHeight:30.83,
        color:'#FFFFFF',
    
        fontFamily:'RigSolid-BoldFill',
        
        width:'100%',
        paddingBottom:20
     },
})
export default plan;


