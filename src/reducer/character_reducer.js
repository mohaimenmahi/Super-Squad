import characters_json from '../data/characters.json';
import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';

function characters(state = characters_json, action) {
  switch(action.type) {
    case ADD_CHARACTER:
      let characters = state.filter((item) => item.id !== action.id);
      return characters;
    case REMOVE_CHARACTER:
      let readd = [...state, createCharacter(action.id)];
      return readd;
    default:
      return state;
  }
}

function createCharacter(id) {
  let character = characters_json.find((ch) => ch.id === id);
  return character;
}

export default characters;
