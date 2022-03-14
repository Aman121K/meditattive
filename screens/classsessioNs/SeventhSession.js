import React,{useState} from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity,FlatList} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
const SeventhScreen=({navigation})=>{
    const [data,setData]=useState([
        {id:1,img:require('../../assets/images/journal.png'),title:'The Study of Choice. Defining Economics is Money conservation.',img2:require('../../assets/images/dell.png')},
        {id:1,img:require('../../assets/images/journal.png'),title:'The Study of Choice. Defining Economics is Money conservation.',img2:require('../../assets/images/dell.png')},
        {id:1,img:require('../../assets/images/journal.png'),title:'The Study of Choice. Defining Economics is Money conservation.',img2:require('../../assets/images/dell.png')},
        {id:1,img:require('../../assets/images/journal.png'),title:'The Study of Choice. Defining Economics is Money conservation.',img2:require('../../assets/images/dell.png')},
        {id:1,img:require('../../assets/images/journal.png'),title:'The Study of Choice. Defining Economics is Money conservation.',img2:require('../../assets/images/dell.png')},
        {id:1,img:require('../../assets/images/journal.png'),title:'The Study of Choice. Defining Economics is Money conservation.',img2:require('../../assets/images/dell.png')},
       
    ])
    const keyExtractor = (item, index) => item + index;
    const newRenderItem=({item,index})=>{
        return(
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate('eight')}> 
                {/* <View style={{flexDirection:'row'}}> */}
                <View style={styles.flatlistview}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{height:58}}>
                <Image source={item.img} style={styles.renderimage}></Image>
                </View>
                <View style={{position:'relative',left:widthPercentageToDP('4%'),top:9}}>
                <Text style={styles.rendertext}>{item.title}</Text>
                <Text style={{fontSize:11,color:'#A3A3A3',fontFamily:'RigSans-Medium'}}>28 Mar 2021</Text>
                </View>
                </View>
                <View style={{width:'100%'}}>
                <Image source={item.img2} style={styles.renderimage2}></Image>
                </View>
                </View>
                </TouchableOpacity>
            </View>
        )
    }
    return(
        <View style={{padding:20,backgroundColor:'#FFFFFF',flex:1}}>
             <View style={styles.secondryview}>
            <TouchableOpacity onPress={()=>navigation.navigate('home')}>
             <View style={styles.round}>
                <Image source={require('../../assets/images/round.png')} style={styles.imground} />
                <Image source={require('../../assets/images/back.png')} style={styles.cross} />
            </View>  
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=>navigation.navigate('menu')}>
            <View style={{width:'100%'}}>
            <Text style={styles.createtext}>JOURNAL</Text>
            </View>
            </TouchableOpacity>
            </View> 
            <View style={{marginTop:heightPercentageToDP('5%')}}>
                    <FlatList
                    
                    data={data}
                    renderItem={newRenderItem}
                    keyExtractor={keyExtractor}
                    />
                </View>
        </View>
    )
};
const styles=StyleSheet.create({
    flatlistview:{
        borderWidth:1,
        marginTop:heightPercentageToDP('2%'),
        borderRadius:13,
        justifyContent:'center',
        width:widthPercentageToDP('90.3%'),
        backgroundColor:'#FFFFFF',
      
    },
    secondryview:{
        flexDirection:'row',
        width:'65%',
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
     renderimage:{
         height:76,
         width:50.91,
        //  borderRadius:10,
         borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
     },
     renderimage2:{
         height:18,
         width:15,
         position:'relative',
         left:widthPercentageToDP('86%'),
         bottom:heightPercentageToDP('5%')
        
     },
     rendertext:{
        fontSize:14,
        lineHeight:14.76,
        width:'64%',
        color:'#000000',
        fontFamily:'RigSans-Medium',
        marginBottom:8
     }
})
export default SeventhScreen;