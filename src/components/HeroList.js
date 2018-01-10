import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeCharacterById } from '../actions';

class HeroList extends Component {
  render(){
    return(
      <div>
	<h4>Your Hero Squad</h4>
	<ul className="list-group">
	{
		this.props.heroes.map((item) => {
			return (
				<li key={item.id} className="list-group-item">
					<div className="list-item">{item.name}</div>
                  			<div 
					onClick={() => this.props.removeCharacterById(item.id)} 
    					className="list-item right-button">
						x
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
		heroes: state.heroes
	};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeCharacterById }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);
