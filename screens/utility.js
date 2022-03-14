// import {Platform, Alert} from 'react-native';
import {Dimensions, PixelRatio} from 'react-native';
// import * as titles from '../constants/title';
export var deviceHeight = Dimensions.get('window').height;
export var deviceWidth = Dimensions.get('window').width;
// import AsyncStorage from '@react-native-community/async-storage';
export const widthPercentageToDP = (widthPercent) => {
    const screenWidth = Dimensions.get('window').width;
    const elemWidth = parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
  };
  export const heightPercentageToDP = (heightPercent) => {
    const screenHeight = Dimensions.get('window').height;
    // Convert string input to decimal number
    const elemHeight = parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
  };