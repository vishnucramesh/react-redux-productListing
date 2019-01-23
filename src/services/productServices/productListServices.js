import {
    getProducts,
    changeLoadingState
} from '../../actions/productsActions';
import { APIUrl } from '../../environment/environment'

export const getProductList = (pageNo) =>{
    changeLoadingState(true);
    return dispatch=>{
        fetch(APIUrl + 'CONTENTLISTINGPAGE-PAGE'+pageNo+'.json')
        .then((res) => res.json())
            .then((data) => {
                dispatch(getProducts(data.page))
            })
        }
}