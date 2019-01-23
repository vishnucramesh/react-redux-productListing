import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store'

import * as actions from '../../actions/productsActions';
import * as functions from '../Home/HomeScreen';
import HomeScreen from './HomeScreen';


const initialState = {}; 
const mockStore = configureStore();
let store;


beforeEach(() => {
  store = mockStore(initialState)
 })

describe('HomeScreen', () => {
  it('should render correctly', () => {
    const component = shallow(<HomeScreen />);
    expect(component).toMatchSnapshot();
  });

  it('should call getProducts()', () => {
    const expectedAction = {
      type: 'GET_PRODUCTS',
      newData: [],
      prevData:[]
     }
    expect(actions.getProducts([],[])).toBeTruthy()
  })

  it('should call render Cards', () => {
    functions.renderCards = jest.fn();
    functions.renderCards();
    expect(functions.renderCards()).toBeTruthy()
  })
  
});