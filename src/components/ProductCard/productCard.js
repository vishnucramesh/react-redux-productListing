import React, { Component } from 'react';
import './productCard.css';
import {ImageUrl} from '../../environment/environment';
export default class ProductCard extends Component {
    

    render() {
      return (
        <div className="overflow-hidden text-grey-lighter">
          <div className="cover-image w-full bg-grey-darker text-center">
            <img className="cover-image w-full max-w-px-150 min-w-px-80" src={ ImageUrl + this.props.image } onError={(e)=>{e.target.onerror = null; e.target.src=ImageUrl+ "placeholder_for_missing_posters.png"}} alt="Sunset in the mountains"/>
          </div>
          <div className="pad-top-24 pad-bottom-90 w-full">
            <div className="text-sm text-container w-full"><div className={this.props.name !== undefined && this.props.name.length>20?"inner-text-container text-animation":"inner-text-container"} >{this.props.name}</div></div>
          </div>
        </div>
      );
    }

}
