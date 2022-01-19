import { StyleSheet, Dimensions } from "react-native";
var { width, height } = Dimensions.get("window");
export const styles = StyleSheet.create({
 header: {
    height: height / 10,
    backgroundColor: "white",
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
   
   
    
    promotionview:{
      backgroundColor:'#F0F1F3'
    },
    input:{
      backgroundColor:'white',
      flex:1,
      marginVertical:10,
      marginHorizontal:10,
      height:height/(1334/60),
      alignItems:'center',
      justifyContent:'center',
      paddingVertical:-10
    },
    applybutton:{
      backgroundColor:'black',
      height:height/(1334/60),
      marginRight:10,
      paddingHorizontal:10,
      justifyContent:'center'
    },
    row:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginHorizontal:10,
      marginTop:10
    },
    line:{
      backgroundColor:'#D8D8D8',
      height:1,
      marginTop:10
    }
        
});
