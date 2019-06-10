import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
class Item extends React.Component{
	add_to_cart = () =>{
		this.props.dispatch({
			type:'ADD_TO_CART',
			id:this.props.id
		})
	
	}
	render(){
		return(
				<div className="col-lg-3 col-sm-6 col-md-4 mt-3">
					<div className="item-card">
						<img alt="" src={this.props.imgUrl} />
						<h4 className="name">{this.props.name}</h4>
						<p className="price">Rs.{this.props.price}</p>
						<p className="ingredients">Ingredients: {this.props.ingredients}</p>
						<Link to={/details/+this.props.id}>
								<button className="btn btn-info" >Details</button>
						</Link>
						<div className="btn-group m-2">
							<button onClick={this.add_to_cart} className="btn btn-info mr-2" data-toggle="modal" data-target="#added_popup"><i className="fas fa-cart-plus"></i> Add to Cart</button>
							
							<div className="modal fade" id="added_popup" role="dialog">
							    <div className="modal-dialog">
							      <div className="modal-content">
							        <div className="modal-body">
							          <p>{this.props.name} added to Cart</p>
							        </div>
							      
							      </div>
							    </div>
							  </div>

							<Link to='/cart'>
								<button onClick={this.add_to_cart} className="btn btn-info" >Buy Now</button>
							</Link>	

						</div>
					</div>	
				</div>
			)
	}
}
export default connect()(Item);