import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text, TouchableOpacity, StyleSheet, Animated} from 'react-native'
import {DeleteDeck} from '../actions'
import AddCard from './AddCard'
import {white, purple, gray, lightPurp, pink, blue, black} from '../utils/colors'
import {clearLocalNotification, setLocalNotification} from '../utils/helpers'

class DeckPreview extends Component{
  state={
    opacity: new Animated.Value(0),
    width: new Animated.Value(0),
    height: new Animated.Value(0)
  }

  componentDidMount(){
    const {opacity, width, height} = this.state
    Animated.timing(opacity, {toValue:1, duration:500, useNativeDriver: false}).start()
    Animated.spring(width, {toValue:350, speed:5, useNativeDriver: false}).start()
     Animated.spring(height, {toValue:400, speed:5, useNativeDriver: false}).start()
  }
  
  render(){
    const {decks, dispatch} = this.props
    const id = this.props.route.params.deckId
    const deck = decks[id]
    const {opacity, width, height} = this.state 

    // Add Card Button Code
  const NavigatToAddCard = () =>{
    this.props.navigation.navigate('Add Card', {deckId : id})
  }

    // Start Quiz Button Code
  const NavigateToQuiz = () =>{
    clearLocalNotification().then(setLocalNotification)
    this.props.navigation.navigate('Quiz', {deckId: id})
  }


    return(
      <Animated.View style={[styles.container, {opacity, width, height}]}>
      <View>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.subtitle}>{deck.questions.length} cards</Text>
      </View>

      <View style={{flex:2 ,justifyContent: 'space-around', alignItems:'center'}}>
        <TouchableOpacity onPress={NavigatToAddCard} style={styles.addCardBtn}>
          <Text style={styles.CardBtnText}>Add Question</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={NavigateToQuiz} style={styles.QuizBtn}>
          <Text style={styles.QuizBtnText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
      </Animated.View>
    )
  }
}

function mapStateToProps({decks}){
return{decks}
}

export default connect(mapStateToProps)(DeckPreview)


const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:30,
    justifyContent: 'space-around',
    alignItems:'center'
  },
  title:{
        justifyContent: 'center',
        alignItems:'center',
        fontSize:30,
        color:purple,
        textAlign:'center'
  },
  subtitle:{
        justifyContent: 'center',
        alignItems:'center',
        fontSize:20,
        color:gray,
        textAlign:'center'
  },
  addCardBtn:{
    backgroundColor: white,
    padding: 5,
    borderRadius:2,
    borderColor:purple,
    borderWidth:1,
    height:45,
    width:200,
    alignSelf:'center',
  },
    QuizBtn:{
    backgroundColor: black,
    padding: 5,
    borderRadius:2,
    height:45,
    width:200,
    alignSelf:'center',
    borderWidth:1,
  },
    CardBtnText:{
    color: purple,
    fontSize:22,
    textAlign:'center'
  },
  QuizBtnText:{
    color: white,
    fontSize:22,
    textAlign:'center'
  }
})

