import React, { Component } from 'react';
import './Product.css';
import StarRatingComponent from 'react-star-rating-component'

class Product extends Component {

	render() {
		const prod = this.props.prod;
		return (
			<div className="product">
				<div>
					<img src={prod.img} alt=""></img>
				</div>
				<div>	
					<h4 className="product-name">{prod.name}</h4>
					<div className="product-info">
						<div>
							<p><small>by: {prod.seller}</small></p>
							<p>${prod.price}</p>
							<button onClick={() => this.props.handleAdd(prod)}>Add to Cart</button>
						</div>
						<div>
							<StarRatingComponent
								name = 'product-rating'
								emptyStarColor = 'lightgray'
								value = {prod.rating}
							></StarRatingComponent>
							<h5>Features</h5>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Product;