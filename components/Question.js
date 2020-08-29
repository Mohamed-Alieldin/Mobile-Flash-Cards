import React  from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {white, purple, gray, lightPurp, pink, blue, lightRed, green} from '../utils/colors'


function Question (props){
  return(
    <View style={styles.container}>
    <View style={styles.QContent}>
      <Text style={styles.question}>{props.question}</Text>
      <TouchableOpacity onPress={props.ShowAnswer} style={{alignSelf:'center'}}>
          <Text style={{color:lightRed}}>Show Answer</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.buttons}>
      <TouchableOpacity onPress={ props.handleCorrect} style={styles.CorrectBtn}>
          <Text style={{color:white,fontSize:20, alignSelf:'center'}}>Correct</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={ props.handleIncorrect} style={styles.IncorrectBtn}>
          <Text style={{color:white, fontSize:20, alignSelf:'center'}}>Incorrect</Text>
      </TouchableOpacity>
    </View>
    </View>
  )  
}

export default Question


const styles = StyleSheet.create({
container:{
  flex:1,
  justifyContent:'center',
  alignItems:'space-around'
},
question:{
  fontSize:35,
  color: purple,
  textAlign:'center',
  marginBottom:20
},
QContent:{
  flex: 2,
  alignSelf:'center',
},
buttons:{
  flex: 2,
  alignSelf:'center',
},
CorrectBtn:{
    backgroundColor: green,
    padding: 5,
    borderRadius:7,
    marginBottom:20,
    borderColor:purple,
    borderWidth:1,
    height:45,
    width:200,
    alignSelf:'center',
},
IncorrectBtn:{
    backgroundColor: lightRed,
    padding: 5,
    borderRadius:7,
    borderColor:purple,
    borderWidth:1,
    height:45,
    width:200,
    alignSelf:'center',
}
})