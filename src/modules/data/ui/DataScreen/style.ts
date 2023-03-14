import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#B8860B',
    
  },
  item:{
    borderColor:'grey',
    borderWidth:1,
    width:'100%',
    borderRadius:10,

  },
  contsinerInput:{
   justifyContent:'center',
   marginHorizontal:20,
   marginBottom:10,
},
text:{
    fontSize:24,
    marginBottom:20,
},
button:{
    width:200,
    height:70,
    backgroundColor:'blue',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
    alignSelf:'center',
    marginBottom:10
},
textBtn:{
    fontSize:24,
    fontWeight:'700',
    color:'#fff'
}
  });