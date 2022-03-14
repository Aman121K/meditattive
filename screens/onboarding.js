import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StatusBar, SafeAreaView, TouchableOpacity, FlatList, ImageBackground, Image, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../screens/constant/index';
import data from '../screens/constant/data';
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from './utility';
// import { template } from '@babel/core';
const onboarding = ({ navigation }) => {
    const flatlistRef = useRef();
    const [currentPage, setCurrentPage] = useState(0);
    const [viewableItems, setViewableItems] = useState([])
    const IndexofMatch =2;
    const handleViewableItemsChanged = useRef(({ viewableItems }) => {
        setViewableItems(viewableItems)
    })
    useEffect(() => {
        if (!viewableItems[0] || currentPage === viewableItems[0].index)
            return;
        setCurrentPage(viewableItems[0].index)

    }, [viewableItems])



    const renderFlatlistItem = ({ item }) => {
        return (
           
            <View style={{
                width: SIZES.width,
            }}>
                   
                        <View style={{marginLeft:wp('35%'),marginTop:hp('20%')}}>
                            <Image source={item.img} style={{height:120,width:120}}></Image>
                        </View>
                <View style={{marginTop:hp('12%') }}>
                    <View style={{alignSelf:'center',}}>
                    <Text style={{ fontSize: 18,color:'#FFFFFF',lineHeight:23.63,fontFamily:'RigSolid-BoldFill' }}>
                        {item.title}
                    </Text>
                    </View>
                   <View style={{width:wp('75%'),alignSelf:'center',marginTop:hp('3%')}}>
                    <Text style={{
                        fontSize: 14,
                        lineHeight:20,
                        color:'#FFFFFF',
                        fontWeight:'400',
                        fontFamily:'RigSans-Medium',
                        width:'100%',
                        textAlign:'center'
                    }}>
                        {item.description}
                    </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center',alignSelf:'center',marginTop:hp('12%')}}>
                        {
                            [...Array(data.length)].map((_, index) => (
                                <View
                                    key={index}
                                    style={{
                                        width: index==currentPage?22:11,
                                        height:index==currentPage? 6:11,
                                        borderRadius: 10,
                                        backgroundColor: index == currentPage
                                            ? COLORS.dots
                                            : COLORS.secondDots,
                                        marginLeft:6                                        
                                    }} ></View>
                            ))
                        }
                    </View>
                </View>
               
              
                </View>
        )
    }
    return (
        <View style={{
            flex: 1,
        }}>
             <ImageBackground
                        // source={require('./../src/images/splash.png')}
                        source={require('../assets/images/splash.png')}
                        style={{flex:2, resizeMode: 'cover',}}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
            <FlatList
                data={data}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item._id}
                renderItem={renderFlatlistItem}
                ref={flatlistRef}
                onViewableItemsChanged={handleViewableItemsChanged.current}
                viewabilityConfig={{ viewAreaCoveragePercentThreshold: 100 }}
                initialNumToRender={1}
                extraData={SIZES.width}
            />
            <View style={{width:'100%'}}>
             {currentPage==IndexofMatch?
                 <TouchableOpacity onPressIn={()=>navigation.navigate('signup')}>
                 <View style={{backgroundColor:'white',height:39,borderRadius:20,width:'80%',alignSelf:'center',alignItems:'center',justifyContent:'center',position:'absolute',bottom:50}}>
                     <Text style={{color:'black',fontFamily:'RigSans-Bold',fontSize:15,lineHeight:18.45}}>GET STARTED</Text>
                 </View>
             </TouchableOpacity>
                :
                <TouchableOpacity  onPressOut={()=>navigation.navigate('signup')}>
                    <View style={{backgroundColor:'white',height:39,borderRadius:19.5,width:'80%',alignSelf:'center',alignItems:'center',justifyContent:'center',position:'absolute',bottom:50}}>
                        <Text style={{color:'black',fontFamily:'RigSans-Bold',fontSize:15,lineHeight:18.45}}>CONTINUE</Text>
                    </View>
                </TouchableOpacity>}
                </View>
         </ImageBackground>
         
        </View>
    )
}
export default onboarding;