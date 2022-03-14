import React,{useState} from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity,ImageBackground,FlatList,Modal} from 'react-native';
// import { heightPercentageToDP } from 'react-native-responsive-screen';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const ActivePlans=({navigation})=>{
    // const [isVisible,setIsVisible]=useState(false);
    const [showModalok,setShowModalok]=useState(false);
    const [showModalko,setShowModalko]=useState(false);
    const killAll=()=>{
       
        setShowModalok(false);
        setShowModalko(false);
    }
    const [data,setData]=useState([
        {id:1,img:require('../assets/images/dot.png'),title:'Disaksikan pada Aplikasi Mobile',},
        {id:1,img:require('../assets/images/dot.png'),title:'MOLA MOVIES, MOLA LIVING, MOLA KIDS'},
        {id:1,img:require('../assets/images/dot.png'),title:'MOLA SPORTS',},
        {id:1,img:require('../assets/images/dot.png'),title:'1 User',},
        {id:1,img:require('../assets/images/dot.png'),title:'Berlaku hinga akhir musim 2020/2021'},
      
       
    ])
    const keyExtractor = (item, index) => item + index;
    const newRenderItem=({item,index})=>{
        return(
                
         <View style={{flexDirection:'row'}}>
                 <View style={{width:'8%'}}>
                      <Image source={item.img} style={styles.renderimage}></Image>
                 </View>
                      <View style={{width:'100%'}}>
                <Text style={styles.rendertext}>{item.title}</Text>
             </View>
    </View>
              
        )
    }
    return(
        <ImageBackground source={require('../assets/images/bckgrnd2.png')} style={{height:'100%',width:'100%',}} >

        <View style={{padding:20,marginTop:heightPercentageToDP('3%')}}>
             <View style={styles.secondryview}>
            <TouchableOpacity onPress={()=>navigation.navigate('home')}>
             <View style={styles.round}>
                <Image source={require('../assets/images/round.png')} style={styles.imground} />
                <Image source={require('../assets/images/back.png')} style={styles.cross} />
            </View>  
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=>navigation.navigate('menu')}>
            <View style={{width:'100%'}}>
            <Text style={styles.createtext}>Subscription Status</Text>
            </View>
            </TouchableOpacity>
            </View>
            <View style={styles.planview}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={styles.plantext}>Plan Name</Text>
                <View style={{borderWidth:1,backgroundColor:'#FFFFFF', height:43,
        borderRadius:4,width:89,justifyContent:'center',alignItems:'center',marginRight:10}}>
                    <Text style={{color:'#000000',fontFamily:'RigSans-ExtraBold',fontSize:14,lineHeight:21,}}>Renew</Text>
                </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontSize:18,color:'#FFFFFF',fontFamily:'Lato-Bold'}}>$ <Text style={{fontSize:48,color:'#FFFFFF',fontFamily:'Lato-Bold'}}>150</Text><Text style={{fontSize:18,fontFamily:'Lato-Bold'}}> .00</Text></Text>
                <View style={{position:'relative',top:'9%',right:'15%'}}>
                    <Text style={{fontsize:14,lineHeight:21,color:'#1FFF86',fontFamily:'Lato-Bold'}}>ACTIVE PLAN</Text>
                </View>
            </View>
            <View style={{marginTop:heightPercentageToDP('3%')}}>
                    <FlatList
                    
                    data={data}
                    renderItem={newRenderItem}
                    keyExtractor={keyExtractor}
                    />
                </View>    
            </View>
                <View style={styles.planview2}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={styles.plantext}>Plan Name</Text>
                {/* <TouchableOpacity onPress={()=>setShowModalok(true)}> */}
                <View style={{borderWidth:1,backgroundColor:'#FFFFFF', height:43,
        borderRadius:4,width:70,justifyContent:'center',alignItems:'center',marginRight:10}}>
                    <Text style={{color:'#000000',fontFamily:'RigSans-ExtraBold',fontSize:14,lineHeight:21,}}>Buy</Text>
                </View>
                {/* </TouchableOpacity> */}
                </View>
                
                <Text style={{fontSize:18,color:'#FFFFFF',fontFamily:'Lato-Bold'}}>$ <Text style={{fontSize:48,color:'#FFFFFF',fontFamily:'Lato-Bold'}}>50</Text><Text style={{fontSize:18,fontFamily:'Lato-Bold'}}> .00</Text></Text>
                
                </View>
                <View style={styles.planview3}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={styles.plantext}>Plan Name</Text>
                <TouchableOpacity onPress={()=>setShowModalko(true)}>
                <View style={{borderWidth:1,backgroundColor:'#FFFFFF', height:43,
        borderRadius:4,width:70,justifyContent:'center',alignItems:'center',marginRight:10}}>
                    <Text style={{color:'#000000',fonFamily:'RigSans-ExtraBold',fontSize:14,lineHeight:21,}}>Buy</Text>
                </View>
                </TouchableOpacity>
                </View>
                
                <Text style={{fontSize:18,color:'#FFFFFF',fontFamily:'Lato-Bold'}}>$ <Text style={{fontSize:48,color:'#FFFFFF',fontFamily:'Lato-Bold'}}>30</Text><Text style={{fontSize:18,fontFamily:'Lato-Bold'}}> .00</Text></Text>
                
                </View>
                <View style={{flexDirection:'row',marginTop:heightPercentageToDP('1%'),
                               alignItems:'center',alignSelf:'center'}}>
                    <Text style={{fontsize:14,lineHeight:21,color:"#FFFFFF",fontFamily:'Lato-Bold'}}>View More Plans</Text>
                    
                    <Image source={require('../assets/images/dwnarw.png')} resizeMode='center' style={{marginLeft:widthPercentageToDP('3%')}} />
                    
                </View>
                <View>
        <Modal
          animationType={'slide'}
          transparent={true}
          visible={showModalok}
          style={{backgroundColor: 'rgba(0,0,0,0.7)',}}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          <View style={{height:367.79,width:'100%',alignSelf:'center',backgroundColor:'#FFFFFF',position:'absolute',bottom:0}}>
              <View style={{alignSelf:'flex-end',margin:'3%'}}>
                  <TouchableOpacity onPress={()=>killAll()}>
                  <Image source={require('../assets/images/hide.png')} style={{height:20,width:20}}></Image>
                  </TouchableOpacity>
              </View>
    
   
         </View>
        </Modal>
        </View>
                <View>
        <Modal
          animationType={'slide'}
          transparent={true}
          visible={showModalko}
          style={{}}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          <View style={{height:367.79,width:'100%',alignSelf:'center',backgroundColor:'#272727',position:'absolute',bottom:0}}>
              <View style={{flexDirection:'row',margin:'3%',justifyContent:'space-between',padding:15}}>
              <Text style={{fontSize:18,lineHeight:22.14,color:'#FFFFFF',fontFamily:'RigSans-Bold'}}>Plan Name</Text>
                  <TouchableOpacity onPress={()=>killAll()}>
                      
                  <Image source={require('../assets/images/hide.png')} style={{height:20,width:20}}/>
                  </TouchableOpacity>
              </View>
              <View style={{ paddingTop:20,paddingBottom:20,borderTopWidth:1,borderBottomWidth:1,borderBottomColor:'#878787',borderTopColor:'#878787',width:widthPercentageToDP('88%'),alignSelf:'center'}}>
          <View style={{flexDirection:'row',
        justifyContent:'space-between',
        }}>
              <Text style={{fontSize:12,lineHeight:14.76,color:'#FFFFFF'}}>Sports Mobile 1 Season</Text>
              
              <Text style={{fontSize:14,lineHeight:17.22,color:'#FFFFFF'}}>$150.00</Text>
          </View>
          <Text style={{fontSize:12,lineHeight:14.76,color:'#A7A7A7'}}>Yearly</Text>
          </View>
          <View style={{padding:'6%'}}>
         <View style={{flexDirection:'row',justifyContent:'space-between',}}>
             <Text style={{fontSize:14,lineHeight:17.22,color:'#FFFFFF'}}>Promo</Text>
             <Text style={{fontSize:14,lineHeight:17.22,color:'#FFFFFF',fontFamily:'RigSans-Medium'}}>$</Text>
         </View>
         <View style={{flexDirection:'row',justifyContent:'space-between',fontFamily:'RiSans-Regular',marginTop:heightPercentageToDP('2%')}}>
             <Text style={{color:'#DCDCDC',fontSize:14,lineHeight:17.22,fontFamily:'RiSans-Regular'}}>Tax (10%)</Text>
             <Text style={{color:'#DCDCDC',fontSize:14,lineHeight:17.22,fontFamily:'RiSans-Regular'}}>Rp 33.90</Text>
         </View>
         </View>
         <View>
         <View style={{height:62.04,backgroundColor:'#101112',width:'100%',
        justifyContent:'space-between',alignItems:'center',flexDirection:'row',padding:'5%'}}>
            
             <Text style={{fontSize:14.22,color:'#FFFFFF',lineHeight:17.22,fontFamily:'RigSans-Bold'}}>TOTAL</Text>
             <Text style={{fontSize:14.22,color:'#FFFFFF',lineHeight:17.22,fontFamily:'RigSans-Bold'}}>$183.90</Text>
             
         </View>
         </View>
         <TouchableOpacity onPress={()=>setShowModalok(true)}>

         <View style={{borderWidth:1,height:53.17,backgroundColor:'#FFFFFF',alignItems:'center',justifyContent:'center'}}>
             <Text style={{fontSize:14,lineHeight:17.22,fontFamily:'RigSans-Bold',color:'#000000'}}>PAY NOW</Text>
         </View>
         </TouchableOpacity>
         </View>
        </Modal>
        </View>
                <View>
        <Modal
          animationType={'slide'}
          transparent={true}
          visible={showModalok}
          style={{}}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          <View style={{height:367.79,width:'100%',alignSelf:'center',backgroundColor:'#272727',position:'absolute',bottom:0}}>
              <View style={{alignSelf:'flex-end',margin:'3%',padding:15}}>
                  <TouchableOpacity onPress={()=>killAll()}>
                  <Image source={require('../assets/images/hide.png')} style={{height:20,width:20}}></Image>
                  </TouchableOpacity>
              </View>
          <View style={{alignItems:'center',justifyContent:'center'}}>
              <Image source={require('../assets/images/correct.png')} style={{width:177.34,height:177.34}}/>
          </View>
          <View style={{marginTop:heightPercentageToDP('5%')}}>
              <Text style={{fontSize:18,lineHeight:22.14,color:'#FFFFFF',alignSelf:'center',fontFamily:'RigSans-Bold'}}>Payment Completed </Text>
          </View>
         </View>
        </Modal>
        </View>
        </View>
        </ImageBackground>
    )
};
const styles=StyleSheet.create({
    renderimage:{
        height:8,
        width:8,
        margin:3,
position:'relative',
top:5,

},
    rendertext:{
        fontsize:14,
        lineHeight:21,
        color:'#FFFFFF',
        fontFamily:'RigSans-Medium',
        justifyContent:'center',
        marginBottom:heightPercentageToDP('1.8%'),
        
    },
    secondryview:{
        flexDirection:'row',
        width:'95%',
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
        color:'#FFFFFF',
    
        fontFamily:'RigSolid-BoldFill',
        
        width:'100%',
        textAlign:'center'
     },
     planview:{
        // borderWidth:1,
        backgroundColor:'#3E3E3E',
        width:'100%',
        height:351,
        marginTop:heightPercentageToDP('3%'),
       padding:10,
       borderRadius:4,
    
     },
     planview2:{
        backgroundColor:'#3E3E3E',
        width:'100%',
        height:127,
        marginTop:heightPercentageToDP('3%'),
       padding:10,
       borderRadius:4,
     },
     
     planview3:{
        // borderWidth:1,
        backgroundColor:'#3E3E3E',
        width:'100%',
        height:127,
        marginTop:heightPercentageToDP('3%'),
       padding:10,
       borderRadius:4,
     },
     plantext:{
        fontSize:18,
        lineHeight:22.14,
        color:'#FFFFFF',
        fontFamily:'RigSans-Medium'
     }
  
})
export default ActivePlans;
