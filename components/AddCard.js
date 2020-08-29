import React, {Component} from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import {AddNewCard} from '../actions'
import {connect} from 'react-redux'
import {white, purple, gray} from '../utils/colors'


class AddCard extends Component{
  state ={
    question: null,
    answer: null    
  }

  // submit card
  submit = () =>{
    const card = this.state
    const id = this.props.route.params.deckId
    console.log("From Add Card Component", id)
    this.props.dispatch(AddNewCard(id, card))
    this.setState({
      question: null,
      answer: null
    })

    this.props.navigation.navigate('Deck Preview', {deckId : id})
  }



  render(){
    
    return(
      <View style={styles.container}>
      <TextInput 
      style={styles.input}
      value={this.state.question}
      placeholder ="Add The Question"
      onChangeText={(question) => this.setState({...this.state, question})}  
      />

      <TextInput 
      style={styles.input}
      value={this.state.answer}
      placeholder ="Add The Answer" 
      onChangeText={(answer) => this.setState({...this.state, answer})}
       />

      <TouchableOpacity    
        style={ styles.androidSubmitBtn}     
        onPress={this.submit}
        disabled={(this.state.question === null || this.state.answer === null) && true}
        >
          <Text style={styles.submitBtnText}>Submit</Text>
      </TouchableOpacity>
      </View>
    )
  }
}

export default connect()(AddCard)


const styles = StyleSheet.create({
  androidSubmitBtn:{
    backgroundColor: purple,
    padding: 10,
    borderRadius:2,
    height:45,
    paddingLeft:30,
    paddingRight:30,
    justifyContent: 'center',
    alignItems:'center'
  },

  container :{
    padding: 20,
    flex: 1,
    alignItems:'center',
    justifyContent:'space-around'
  },

  submitBtnText:{
    color: white,
    fontSize:22,
    textAlign:'center'
  },

  input : {
        fontSize: 16,
        lineHeight: 23,  
        borderBottomColor: '#333',
        borderBottomWidth: 0.5,
        fontFamily: 'System',
        width:300,
        height:40
          
  }

})