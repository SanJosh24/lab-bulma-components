// User.js
import React, { Component } from 'react';

class CoolButton extends Component {
  constructor(props){
    super(props);
  }
	render () {
		return (
		<div>
			<button class="button is-rounded my-class is-danger is-small">{this.props.login}</button>
			<button class="button is-small is-success">{this.props.signup}</button>
		</div>
		)
	}
}

export default CoolButton;