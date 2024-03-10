/*import {
  ADD_CARD,
  REMOVE_CARD,
  EDIT_CARD
} from "../../utils/constants";
  
const initialState = {
  cards: []
}

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD: {
      const previousCards = [...state.cards];
      const newCard = action.item;
      newCard.ID = state.cards.length + 1;
      return {
        ...state,
        cards: [
          ...previousCards,
          newCard
        ],
      };
    }
    case REMOVE_CARD: {
      return {
        ...state,
        cards: state.cards.filter(
          (item1) => (item1.ID !== action.removedItem.ID)
        ),
      };
    }
    case EDIT_CARD:{
      return {
        ...state,
        cards: state.cards.map(
          (item1) => {if (item1.ID !== action.editedItem.ID) return item1; else return action.editedItem}
        ),
      };
    }
    default: {
      return state
    }
  }
}*/
