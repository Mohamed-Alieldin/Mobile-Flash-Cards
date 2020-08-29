import {_getDecks} from '../utils/Data'
import {generateUID} from '../utils/helpers'

export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'

export function handleInitialData(){
  return (dispatch) =>{
    _getDecks()
    .then((decks)=>{
      dispatch(receiveDecks(decks))
    })
  }
}


function receiveDecks(decks){
  return{
    type: RECEIVE_DECKS,
    decks
  }
}

export function AddDeck(title){
  const newId = generateUID()
  return{    
      type: ADD_DECK,
      id:newId,
      title    
  }
}

export function AddNewCard(id, card){
  return{    
      type: ADD_CARD,
      id,
      card    
  }
}
