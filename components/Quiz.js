import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import Question from './Question'
import Answer from './Answer'
import {white, purple, gray, lightPurp, lightRed, blue, black, green} from '../utils/colors'
import Score from './Score'

class Quiz extends Component{
  state={
    counter : 0,
    showAnswer:false,
    correct:0,
    incorrect:0
  }

    // handle show answer
    handleShowAnswer () {
      this.setState((state) =>{
        return{
          ...state,
          showAnswer : true
        }
      })
    }

        //handle show question
     handleShowQuestion = () =>{
      this.setState((state) =>{
        return{
          ...state,
          showAnswer : false
        }
      })
    }


        //handle InCorrect
    handleInCorrect = () =>{
      this.setState((state) =>{
        return{
          ...state,
          incorrect: state.incorrect +1,
          counter: state.counter +1,
          showAnswer: false
        }
      })
    }


        //handle correct
     handleCorrect = () =>{
      this.setState((state) =>{
        return{
          ...state,
          correct: state.correct +1,
          counter: state.counter +1,
          showAnswer: false
        }
      })
    }

  // handleStartOver (Reseting Quiz Data)
  handleStartOver = ()=>{
      this.setState((state) =>{
        return{
          counter : 0,
          showAnswer:false,
          correct:0,
          incorrect:0         
        }
      })
  }
  render(){
    const id = this.props.route.params.deckId
    const deck = this.props.decks[id]
    const questionsCount = deck.questions.length
    const {counter, showAnswer, correct, incorrect} = this.state



    if(questionsCount ===0){
      return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{color: purple, fontSize:30, textAlign:'center'}}>Sorry, you can not take quize because this deck has no cards yet.</Text>
        </View>
      )
    }

    if(counter === (questionsCount )){
      return(
        <Score 
          questionsCount={questionsCount}
          correct={correct} 
          incorrect={incorrect}
          handleStartOver ={() => this.handleStartOver()}
        />
      )
    }
    

    return(
      <View style={styles.container}>
      <Text style={styles.cardCounter}>{questionsCount - this.state.counter}/{questionsCount}</Text>          
      
      <View style={{alignSelf:'center'}}>
      {!showAnswer  && 
        <Question
        question = {deck.questions[counter].question}
        ShowAnswer = {() => this.handleShowAnswer()}
        handleCorrect = {() => this.handleCorrect()}
        handleIncorrect = { () => this.handleInCorrect()}
        />}

      
      {showAnswer && 
        <Answer 
        answer={deck.questions[counter].answer}
        ShowQuestion = {() => this.handleShowQuestion()}
        handleCorrect = {() => this.handleCorrect()}
        handleIncorrect = {() => this.handleInCorrect()}
        />}
        </View>
       </View>
    )
  }
}

function mapStateToProps({decks}){
return{decks}
}
export default connect(mapStateToProps)(Quiz)

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:30    
  },
  cardCounter:{
    alignSelf:'flex-start',
    color: gray,
    fontSize:30
  }
})