import React,{Component} from 'react'
import {View, Text, TextInput , TouchableOpacity, StyleSheet } from 'react-native'
import {white, purple, gray} from '../utils/colors'
import {connect} from 'react-redux'
import {AddDeck} from '../actions'

 class NewDeck extends Component{
  state = {
    name:null
  }

 submit = () =>{
   const {name} = this.state
   this.props.dispatch(AddDeck(name))
   this.setState({
     name:null
   })
   this.props.navigation.navigate('Home')
 }


  render(){
    return(
      <View style={styles.container}>  

      <Text style={{fontSize: 30, color:purple}}>
      What is the title for your new deck?
      </Text>

      <TextInput 
       onChangeText={(name) => this.setState({name})}
      style={styles.input}
      placeholder ="Enter Deck Name"   
       />

      <TouchableOpacity 
        style={ styles.androidSubmitBtn}
        onPress={this.submit}
        disabled={this.state.name === null && true}
        >
          <Text text ={styles.submitBtnText}>Submit</Text>
      </TouchableOpacity>
      </View>
    )
  }
}

export default connect()(NewDeck)

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
        color: '#333',
        fontSize: 16,
        lineHeight: 23,  
        borderBottomColor: '#333',
        borderBottomWidth: 0.5,
        fontFamily: 'System',
        width:300,
        height:40
          
  }

})