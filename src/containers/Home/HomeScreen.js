import React, { Component } from 'react';
import { connect } from "react-redux";

/**CSS file */
import './HomeScreen.css';

/**Components */
import Header from '../../components/Header/header'
import ProductCard from '../../components/ProductCard/productCard'

/**Actions */
import { getProducts } from '../../actions/productsActions';

/**Services */
import { getProductList } from '../../services/productServices/productListServices';

/**Third Party Components */
import InfiniteScroll from 'react-infinite-scroller';


class HomeScreen extends Component {

    componentDidMount(){
        this.renderProducts();
    }

  /**
   * Initiates social autentication based on the provider
   * @summary triggrt inital list rendering
   */
    renderProducts = () =>{
        this.props.getProductList(this.props.pageNo.toString());
    }

    render() {
      return (
        <div className="h-full bg-black">
        <Header title={this.props.title}></Header>
        <div className="flex-1 overflow-y-scroll list-container">
            <InfiniteScroll
                pageStart={0}
                loadMore={this._loadMore}
                hasMore={this.props.totalProducts>this.props.renderedProducts}>
                {this.renderCards()}
            </InfiniteScroll>
        </div>
        </div>
      );
    }

  /**
   * Initiates social autentication based on the provider
   * @summary triger paginated products
   */
    _loadMore = () =>{
        if(!this.props.isLoading && this.props.list && this.props.totalProducts>this.props.renderedProducts){
            this.props.getProductList(this.props.pageNo.toString());
        }
    }

  /**
   * Initiates social autentication based on the provider
   * @return DOM to render cards
   */
    renderCards = () =>{
        if(this.props.list){
            let items;
            if(this.props.searchText === null){
                items = this.props.list;
            }else{
                items = this.props.filteredData
            }
            if(items.length === 0){
                return <div className="text-center text-grey-light py-5"><p>No items Found</p></div> 
            }else{
                return items.map((item, index)=>{
                    if( index % 3 === 0){
                      return <div className="flex padx-15">
                                {item?<div className="w-1/3 bg-black padx-15"> <ProductCard name={item.name} image={item["poster-image"]}/></div>:null}
                                {items[index+1]?<div className="w-1/3 bg-black padx-15"> <ProductCard name={items[index+1].name} image={items[index+1]["poster-image"]}/></div>:null}
                                {items[index+2]?<div className="w-1/3 bg-black padx-15"> <ProductCard name={items[index+2].name} image={items[index+2]["poster-image"]}/></div>:null}
                             </div> 
                    }else{
                        return null;
                    }
                });
            }
        }
    }
  }

  const mapStateToProps = state => ({
        list : state.productReducer.products,
        totalProducts : state.productReducer.totalProducts,
        renderedProducts : state.productReducer.renderedProducts,
        isLoading : state.productReducer.isLoading,
        pageNo : state.productReducer.pageNo,
        title : state.productReducer.title,
        searchText : state.productReducer.searchText,
        filteredData : state.productReducer.filteredData
   })

   const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(getProducts()),
    getProductList: (pageNo) => dispatch(getProductList(pageNo))
   })

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);