import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import axios from 'axios';
import { widthPercentageToDP } from './utility';
const signUp2 = ({ navigation }) => {
    const [imageFile, setImageFile] = useState();
    const [userName,setUserName]=useState();
    const [email,setEMail]=useState();
    const [phone,setPhone]=useState();
    const [password,setPassword]=useState();
    const opneOk = () => {
        setShowModalok(!showModalok)
        setShowModal(!showModal);
    }
    const uploadImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setImageFile(image.path)
            // console.log(image);
        });
    }
    const RegisterApi = async() => {
        let body = {
        "email":email,
        "role":"customer",
        "name":userName,
        "phone": phone,
        "password":password
    }
    try {
        let response=await axios.post('https://nidhii.co.in/api/register',body)
        console.log("data is..",response.data);
        console.log("code is ..jj",response.data.statusCode);
        if(response.data.success==true){
            navigation.navigate('signup')
        }
    }
    catch (error) {
        console.log(error);
    }
}
return (
    <ScrollView>
    <View style={styles.mainview}>
        <TouchableOpacity onPress={() => navigation.navigate('signin')}>
            <View style={styles.round}>
                <Image source={require('../assets/images/round.png')} style={styles.imground} />
                <Image source={require('../assets/images/back.png')} style={styles.cross} />
            </View>
        </TouchableOpacity>
        <View style={styles.div}>
            <Text style={styles.createtext}>Set Up Your Profile</Text>
        </View>
        <View style={styles.imageview}>
            <TouchableOpacity onPress={() => uploadImage()}>
                {imageFile ? <Image source={{ uri: imageFile }} style={styles.image}></Image> :
                    <Image source={require('../assets/images/lg.png')} style={styles.image} />}
            </TouchableOpacity>
        </View>
        {imageFile ?
            <View style={{ alignSelf: 'center' }}>

            </View> :
            <View style={{ padding: 5 }}>
                <Image source={require('../assets/images/pencil.png')} style={styles.pencil} resizeMode='center' />
            </View>
        }
        <View style={styles.emailpadding}>
            <Text style={styles.txa}>First Name</Text>
        </View>
        <View style={styles.input1}>
            <TextInput
                placeholder='abc'
                placeholderTextColor='#000000'
                onChangeText={(e)=>setUserName(e)}
                style={styles.textinput1} />
        </View>
        <View style={styles.emailpadding3}>
            <Text style={styles.txb}>Last Name</Text>
        </View>
        <View style={styles.input2}>
            <TextInput
                placeholder='xyz'
                placeholderTextColor='#000000'
                onChangeText={(e)=>setPassword(e)}
                style={styles.textinput2} />
        </View>
        <View style={styles.passwordpadding}>
            <Text style={styles.txc}>Phone Number</Text>
        </View>
        <View style={styles.phoneview}>
            <TextInput
                placeholder='000-000-0000'
                placeholderTextColor='#000000'
                onChangeText={(e)=>setPhone(e)}
                style={styles.textinput3} />
            <Image source={require('../assets/images/call.png')} style={styles.phoneimage} resizeMode='center' />
        </View>
        <View style={styles.addresspadding}>
            <Text style={styles.txd}> Email Address</Text>
        </View>
        <View style={styles.cview}>
            <TextInput
                placeholder='abc@abc.com'
                placeholderTextColor='#000000'
                onChangeText={(e)=>setEMail(e)}
                style={styles.textinput4} />
            <Image source={require('../assets/images/ltmsg.png')} style={styles.emailimage} resizeMode='center' />
        </View>
        <View style={styles.emailpadding}>
            <Text style={styles.txe}> Date of Birth</Text>
        </View>
        <View style={styles.datebirth}>
            <TextInput
                placeholder='00/00/0000'
                placeholderTextColor='#000000'
                style={styles.textinput5} />
            <Image source={require('../assets/images/clndr.png')} style={styles.clndrimage} resizeMode='center' />
        </View>
        <Pressable onPress={() => navigation.navigate('plans')}>
            <TouchableOpacity onPress={() => RegisterApi()}>
                <View style={styles.submitview}>
                    <Text style={styles.submittext}>SUBMIT</Text>
                </View>
            </TouchableOpacity>
        </Pressable>
    </View>
    </ScrollView>
)
};
const styles = StyleSheet.create({
    mainview: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        flex: 1
    },
    imground: {
        height: 30,
        width: 30,
    },
    cross: {
        // width:13,
        height: 18,
        position: 'relative',
        bottom: 25,
        left: 2,
        resizeMode: 'center'
    },
    // imground:{
    //     height:35,
    //     width:35,
    // },
    div: {
        alignSelf: 'center',
        paddingTop: 20
        // width:'100%'
    },
    createtext: {
        fontSize: 24,
        lineHeight: 30.83,
        color: '#000000',

        fontFamily: 'RigSolid-BoldFill',

        width: '100%',
        paddingBottom: 20
    },
    image: {
        height: 103,
        width: 103
    },
    lgview: {
        alignSelf: 'center',
        marginTop: '10%'
    },
    textinput2: {
        width: '100%',
        paddingLeft: 20,
        fontSize: 15,
        opacity: 0.5,
        fontFamily: 'RigSans-Medium',

    },
    textinput3: {

        fontSize: 15,
        opacity: 0.5,
        fontFamily: 'RigSans-Medium',

        width: '100%',
        paddingLeft: 20,
        },
    textinput4: {
        fontSize: 15,
        opacity: 0.5,
        fontFamily: 'RigSans-Medium',

        width: '100%',
        paddingLeft: 20,
    },
    textinput1: {
        // padding:10,
        fontSize: 15,
        opacity: 0.5,
        fontFamily: 'RigSans-Medium',

        width: '100%',
        paddingLeft: 20,
    },
    textinput5: {
        fontSize: 15,
        opacity: 0.5,
        fontFamily: 'RigSans-Medium',

        width: '100%',
        paddingLeft: 20,

    },

    input1: {
        borderWidth: 1,
        marginTop: -5,
        alignSelf: 'center',
        borderRadius: 19.5,
        backgroundColor: ' rgba(0, 0, 0, 0.07)',
        borderColor: 'inset 0px 3px 4px rgba(0, 0, 0, 0.14)',
        width: '100%',
        height: 39,

    },
    txa: {
        fontFamily: 'RigSans-Medium',
        fontSize: 15,
        lineHeight: 14.74,
        marginBottom: 10,
        // marginTop:10,
        color: '#000000',
        // marginLeft:10

    },
    input2: {
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 19.5,
        backgroundColor: ' rgba(0, 0, 0, 0.07)',
        borderColor: 'inset 0px 3px 4px rgba(0, 0, 0, 0.14)',
        width: '100%',
        height: 39,
        marginTop: -5,
        marginBottom: 10
    },
    txb: {
        fontFamily: 'RigSans-Medium',
        fontSize: 15,
        lineHeight: 14.74,
        marginBottom: 10,
        marginTop: 10,
        marginTop: 10,
        color: '#000000',
        // marginLeft:15
    },
    txe: {
        fontFamily: 'RigSans-Medium',
        fontSize: 15,
        lineHeight: 14.74,
        marginBottom: 10,
        marginTop: 10,
        color: '#000000',
        // marginLeft:15
    },
    passwordpadding: {
        // paddingTop:12,
        width: '100%'
    },
    txc: {
        fontFamily: 'RigSans-Medium',
        fontSize: 15,
        marginBottom: 10,
        marginTop: 10,
        color: '#000000'
    },
    phoneimage: {
        height: 18,
        width: 18,
        alignSelf: 'center',
        position:'relative',
        right:widthPercentageToDP('10%')
        // width: '100%',

    },
    phoneview: {
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 19.5,
        backgroundColor: ' rgba(0, 0, 0, 0.07)',
        borderColor: 'inset 0px 3px 4px rgba(0, 0, 0, 0.14)',
        width: '100%',
        height: 39,
        alignSelf: 'center',
        marginTop: -5,
        marginBottom: 10
    },
    cview: {
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 19.5,
        backgroundColor: ' rgba(0, 0, 0, 0.07)',
        borderColor: 'inset 0px 3px 4px rgba(0, 0, 0, 0.14)',
        width: '100%',
        height: 39,
        alignSelf: 'center',
        marginTop: -5,
        marginBottom: 10
    },
    emailpadding: {
        // // marginVertical:1,
        width: '100%'


    },
    txd: {
        fontFamily: 'RigSans-Medium',
        fontSize: 15,
        marginBottom: 10,
        marginTop: 10,
        color: '#000000',
        // marginLeft:10
    },
    emailimage: {

        
        height: 18,
        width: 18,
        alignSelf: 'center',
        position:'relative',
        right:widthPercentageToDP('10%')
    },
 
    clndrimage: {
        height: 18,
        width: 18,
        alignSelf: 'center',
        position:'relative',
        right:widthPercentageToDP('10%')

    },
    submitview: {
        borderWidth: 1,
        width: '100%',
        height: 39,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 19.5,
        marginTop: 50,

        alignSelf: 'center'

    },
    submittext: {
        color: '#FFFFFF',
        alignSelf: 'center'
    },
    pencil: {
        height: 22,
        width: 16,
        position: 'relative',
        left: '59%',
        bottom: 25
    },
    imageview: {
        alignSelf: 'center'
    },
    emailpadding3: {
        // marginLeft:8
        paddingTop: 12
    },
    addresspadding: {

    },
    datebirth: {
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 19.5,
        backgroundColor: ' rgba(0, 0, 0, 0.07)',
        borderColor: 'inset 0px 3px 4px rgba(0, 0, 0, 0.14)',
        width: '100%',
        height: 39,
        alignSelf: 'center',
        marginTop: -5,
        // marginBottom:10
    }
})
export default signUp2; 