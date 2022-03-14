import { Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');
export const COLORS = {
    primary: "white",
    dots: 'white',
    // #0A2339
    secondDots: 'gray',
    black: "#171717",
    white: "#FFFFFF",
    background: "#E5E5E5",
    
}

export const SIZES = {
    base: 10,
    width,
    height
}
const theme = { COLORS, SIZES };
export default theme;