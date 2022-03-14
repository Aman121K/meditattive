import React,{useState} from 'react';
import {Text,View,StyleSheet,TouchableOpacity,Image,FlatList} from 'react-native'; 
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from './utility';

const Drawerhelp=({navigation})=>{
    const [data,setData]=useState([
        {id:1,img:require('../assets/images/group.png'),title:'KNOWLEDGE BASE',title2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero non consequat,'},
        {id:1,img:require('../assets/images/qa.png'),title:'FAQ',title2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero non consequat,'},
        {id:1,img:require('../assets/images/paperfold.png'),title:'FORM',title2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero non consequat,'},
      
       
    ])
    const keyExtractor = (item, index) => item + index;
    const newRenderItem=({item,index})=>{
        return(
            // {id:1,img:require('../assets/images/docv.png'),title:'DOCUMNET',title2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero non consequat,'},

         <View style={{flexDirection:'row',padding:heightPercentageToDP('1%')}}>
                 <View style={{margin:10}}>
                      <Image source={item.img} style={{height:57,width:57}}></Image>
                 </View>
                 <View style={{flexDirection:'column'}}>
                      <View style={{}}>
                <Text style={{fontSize:15,lineHeight:30,color:'#0F001A',fontFamily:'RigSans-SemiBold'}}>{item.title}</Text>
             </View>
                      <View style={{width:'85%'}}>
                <Text style={{fontSize:12,lineHeight:14.76,color:'#777777',fontFamily:'RigSans-Medium'}}>{item.title2}</Text>
             </View>
             </View>
            

    </View>
              
        )
    }
    return(
        <View style={styles.outerview}>
            <View style={styles.secondryview}>
                 <View style={{position:'relative',top:40,flexDirection:'row',padding:10}}>

            <View style={styles.round}>
                <TouchableOpacity onPress={()=>navigation.navigate('home')}>
                <Image source={require('../assets/images/newcircle.png')} style={styles.imground} />
                <Image source={require('../assets/images/back.png')} style={styles.cross} />
                </TouchableOpacity>
            </View>  
            
            <View style={{width:heightPercentageToDP('85%')}}>
            <Text style={styles.createtext}>HELP</Text>
            </View>
            </View>
            </View>
           <View style={{borderWidth:1,height:28,backgroundColor:'#474747',width:'100%',alignItems:'center',justifyContent:'center'}}>
               <Text style={{fontFamily:"RigSolid-BoldFill",color:'#FFFFFF',}}>MEDITATIVE COLORING</Text>
           </View>
           <View style={{padding:20}}>
               <Text style={{fontFamily:"Lato-Bold",color:'#494949',fontSize:31.25,lineHeight:37.5,}}>How we can Help?</Text>
           </View>
           <View style={{marginTop:heightPercentageToDP('3%')}}>
                    <FlatList
                    
                    data={data}
                    renderItem={newRenderItem}
                    keyExtractor={keyExtractor}
                    />
                </View> 
                <View style={{flexDirection:'row',position:'relative',marginTop:heightPercentageToDP('2%'),left:widthPercentageToDP('5%')}}>
                   <Image source={require('../assets/images/docv.png')} resizeMode='center' style={{height:55.35,
                width:44}} /> 
                
                <View style={{flexDirection:'column',position:'relative',left:widthPercentageToDP('5%')}}>
                      <View style={{}}>
                <Text style={{fontSize:15,lineHeight:30,color:'#0F001A',fontFamily:'RigSans-SemiBold'}}>DOCUMENT</Text>
             </View>
                      <View style={{width:'85%'}}>
                <Text style={{fontSize:12,lineHeight:14.76,color:'#777777',fontFamily:'RigSans-Medium'}}>Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Libero non consequat,</Text>
             </View>
             </View>
             </View>   
                <View style={{justifyContent:'flex-end',flexDirection:'row',position:'relative',top:heightPercentageToDP('7%'),
                right:widthPercentageToDP('5%')}}>
                    <Image source={require('../assets/images/chatsms.png')} style={{height:49,width:49}} />
                </View>
               
        </View>
    )
    };
    const styles=StyleSheet.create({
        outerview:{
            backgroundColor:'#FFFFFF',
            flex:1
        },
        secondryview:{
            flexDirection:'row',
            width:'100%',
            height:99,
            backgroundColor:'#000000',
            alignSelf:'center',
            alignContent:'center',
           
            
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
export default Drawerhelp;