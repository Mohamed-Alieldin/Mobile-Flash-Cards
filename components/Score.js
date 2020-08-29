import React from 'react'
import {View, Text,TouchableOpacity ,StyleSheet} from 'react-native'
import {white, purple, gray, lightPurp, lightRed, blue, black, green} from '../utils/colors'



function Score(props){
  const {questionsCount, correct, incorrect} = props
  return(
        <View style={styles.container}>
          <Text style={styles.score}>
              Score: {(correct*100/questionsCount).toFixed(2)} %
          </Text>

          <Text style={{color:green, fontSize:25, textAlign:'center'}}>
              Correct: {correct} / {questionsCount} 
          </Text>
          <Text style={{color:lightRed, fontSize:25, textAlign:'center'}}>
              Incorrect: {incorrect} / {questionsCount} 
          </Text>

          <TouchableOpacity onPress={props.handleStartOver} style={styles.StartOverBtn}>
          <Text style={{color:white,fontSize:20, alignSelf:'center'}}>Start Over</Text>
          </TouchableOpacity>
        </View>
  )
}


export default Score


const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:30    
  },
  score:{
    fontSize:40,
    color: purple,
    textAlign:'center',
    marginBottom:30,
    marginTop:25
  },
  StartOverBtn:{
    backgroundColor: black,
    padding: 5,
    borderRadius:5,
    height:45,
    width:200,
    alignSelf:'center',
    borderWidth:1,
    marginTop:100   
  }
})