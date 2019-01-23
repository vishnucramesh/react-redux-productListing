const initialState ={
  products: [],
  totalProducts: 0,
  renderedProducts: 0, 
  isLoading: true,
  pageNo: 1,
  title: null,
  searchText: null,
  filteredData: []
}

export default (state = initialState, action) => {
    switch (action.type) {

     case 'GET_PRODUCTS':
                let newData = action.newData["content-items"].content;
                  return Object.assign({}, state, {
                    products: state.products.concat(newData),
                    totalProducts: parseInt(action.newData["total-content-items"]),
                    renderedProducts: state.renderedProducts + parseInt(action.newData["page-size-returned"]),
                    isLoading: false,
                    pageNo:state.pageNo+1,
                    title:action.newData["title"]
                  });

      case 'CHANGE_LOADING_STATE' : 
                  return Object.assign({}, state, {
                    isLoading: action.data,
                  });

      case 'SEARCH_LIST' : 
                  let searchText = action.data;
                  let filteredData =null;
                  if(searchText === ""){
                    searchText = null;
                  }else{
                    filteredData = state.products.filter((product)=> product.name.toLowerCase().includes(searchText.toLowerCase()));
                  }
                  return Object.assign({}, state, {
                    searchText: searchText,
                    filteredData : filteredData
                  });
                  
     default:
                  return state
    }
   }