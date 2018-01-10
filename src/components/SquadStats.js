import React, { Component } from 'react';
import { connect } from 'react-redux';

// deploying in heokru

class SquadStats extends Component {
	strength() {
		let strength = 0;
		this.props.heroes.forEach((hero) => strength += hero.strength);
		return strength;
	}
	intelligence() {
		let intell = 0;
		this.props.heroes.forEach((hero) => intell += hero.intelligence);
		return intell;
	}
	speed() {
		let speed = 0;
		this.props.heroes.forEach((hero) => speed += hero.speed);
		return speed;
	}
  	render(){
    		return(
      			<div>
				<h4>Sqaud Stats</h4>
				<ul className="list-group">
					<li className="list-group-item">
						<b>Overall Strength:</b> {this.strength()}
					</li>
					<li className="list-group-item">
						<b>Overall Intelligence:</b> {this.intelligence()}
					</li>
					<li className="list-group-item">
						<b>Overall Speed:</b> {this.speed()}
					</li>
				</ul>
      			</div>
    		);
  	}
}

function mapStateToProps(state) {
	return {
		heroes: state.heroes
	};
}

export default connect(mapStateToProps, null)(SquadStats);
