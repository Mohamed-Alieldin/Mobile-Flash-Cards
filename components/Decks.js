import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {White, gray, purple} from '../utils/colors'
import {  Card } from 'react-native-paper';
import {connect} from 'react-redux';
import {handleInitialData} from '../actions'
import {setLocalNotification} from '../utils/helpers'
//

class Decks extends Component{
  state ={
    decks:undefined
  }

  componentDidMount(){    
    setLocalNotification()
    this.props.dispatch(handleInitialData())    
  }

  render(){

  //Navigate to Deck
  const GoToDeck = (id) =>{
      this.props.navigation.navigate('Deck Preview', {deckId : id})
  }

    const {decks} = this.props

    if(decks ===undefined || decks === null || decks ==={}){
      return(
      <View style={{flex:1, paddingTop:25}}>
       <Text>There are no decks yet.</Text> 
      </View>)
    }

    return(
      <View style={{flex:1, paddingTop:25}}>
      {decks !== undefined && 
      Object.keys(decks).map((deckId)=>(
        <Card style={styles.item} onPress={() => GoToDeck(deckId)}>
         <Text style={{fontSize:26, color: purple, textAlign: 'center'}}>
         {decks[deckId].title}</Text>     
         <Text style={{fontSize:18,color: gray ,textAlign: 'center'}}>
         {decks[deckId].questions.length} cards</Text>   
         </Card> 
      ))}
      </View>
    )
  }
}

function mapStateToProps({decks}){ 
return {decks}
}

export default connect(mapStateToProps)(Decks)

const styles = StyleSheet.create({
  item:{
    backgroundColor : White,
    padding : 20,
    borderRadius : 3,
    marginLeft : 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent:'center',
    alignItems:'center',
    shadowRadius :3 ,
    shadowOpacity: 0.8,
    shadowOffset:{
      width:0,
      height:3
    }
  }
})
