import React, { Component } from 'react';
import './header.css';
import backIcon from '../../assets/Back.png';
import searchIcon from '../../assets/search.png';
import { connect } from "react-redux";
import { setSearchText } from '../../actions/productsActions.js'

export class Header extends Component {
    constructor(props){
      super(props);
      this.state ={
        search : false
      }
    }

    render() {
      return (
        <div>
          <nav className="flex w-full fixed bg-navbar-image header-height-100">
              {this.state.search?this.renderSearchbar():this.renderBackAndTitle()}
            </nav>   
        </div>   
      );
    }

  /**
   * Initiates social autentication based on the provider
   * @returns DOM to render backbutton and searchbar
   */
    renderBackAndTitle = () =>{
      return (
        <div>
          <div className="float-left">
            <div className="icon-image absolute pin-bl flex">
              <img src={backIcon} className="icon-image flex1" alt="back"/>
              <span className="flex-1 text-grey-light title px-3 py-1">{this.props.title}</span>
            </div>
          </div>
          <div className="float-right">
            <img src={searchIcon} className=" icon-image absolute pin-r pin-br cursor-pointer" alt="search" onClick={() => this.setState({search:true})}/>
          </div>
        </div>
      )
    }

  /**
   * Initiates social autentication based on the provider
   * @returns DOM to render searchbar field
   */
    renderSearchbar = () =>{
      return (
        <div class="w-full px-4 py-2 text-center">
          <form>
            <div class="flex items-center border-b border-b-2 border-grey py-2">
              <input class="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search here" aria-label="search" onChange={(evt) => this.search(evt)} ref={input => input && input.focus()}/>
              <button class="flex-no-shrink border-transparent border-4 text-grey hover:text-grey-darker text-sm py-1 px-2 rounded" type="button" onClick={() => {this.props.setSearchText("");this.setState({search:false})}}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )
    }

  /**
   * Initiates social autentication based on the provider
   * @summary Trigger search
   */
    search = (event) =>{
      this.props.setSearchText(event.target.value)
    }
   
  }


  const mapStateToProps = state => ({})


  const mapDispatchToProps = dispatch => ({
  setSearchText: (text) => dispatch(setSearchText(text))
  })

export default connect(mapStateToProps, mapDispatchToProps)(Header);
