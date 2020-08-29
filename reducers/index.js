import {ADD_DECK, ADD_CARD, RECEIVE_DECKS, DELETE_DECK } from '../actions'
 

export default function decks(state={}, action){
  switch(action.type){
    case RECEIVE_DECKS:
      return{
        ...state,
        ...action.decks
      }

    case ADD_DECK:
      return{
        ...state,
        [action.id]: {
          id: action.id,
          title: action.title,
          questions:[]
        }
      }

    case ADD_CARD:
      return{
        ...state,
        [action.id]:{
          ...state[action.id],
          questions: [...state[action.id].questions, action.card]
        }
      }

    
    default:
      return state
  }

}