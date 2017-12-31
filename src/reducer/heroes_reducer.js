import characters_json from '../data/characters.json';
import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';

function heroes(state = [], action) {
  switch(action.type) {
    case ADD_CHARACTER:
      let heroes = [...state, createCharacter(action.id)]; // that 3 dots is called spread, it fills the array with the id that passed iun the createCharacter func
      return heroes;
    case REMOVE_CHARACTER:
      let remove = state.filter((item) => item.id !== action.id);
      return remove;
    default:
      return state;
  }
}

function createCharacter(id) {
  let character = characters_json.find((ch) => ch.id === id);
  return character;
}

export default heroes;
