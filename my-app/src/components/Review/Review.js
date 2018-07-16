import React, { Component } from 'react';
import { getDatabaseCart } from '../../utility/local-storage';

class Review extends Component {
	constructor(props) {
		super(props);
		this.state={
			cart:[]
		}
	}

	componentDidMount() {
		const savedCart = getDatabaseCart();
		console.log(savedCart);
		this.setState({cart: [savedCart]});
	}

	

	render() {
		return (
			<div>
				
			</div>
		);
	}
}

export default Review;