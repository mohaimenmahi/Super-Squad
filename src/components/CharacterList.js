import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCharacterById } from '../actions';

class CharacterList extends Component {
  render(){
    return(
      <div>
	<h4>Chracters</h4>
	<ul className="list-group">
	{
		this.props.characters.map((ch) => {
			return (
			<li key={ch.id} className="list-group-item">
				<div className="list-item">{ch.name}</div>
                  		<div 
				onClick={() => { this.props.addCharacterById(ch.id) }} 
    				className="list-item right-button">+
				</div>
			</li>
			);
		})
	}
	</ul>
      </div>
    );
  }
}

function mapStateToProps(state) { // state = rootReducer
	return {
		characters: state.characters
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ addCharacterById }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
// notes for me:
// mapStateToProps injects the object data to CharacterList component with the herlp of connect() function
// it takes the state from store pushed in the provider in index.js in src folder
