import React from 'react';
import { shallow } from 'enzyme';
import ProductCard from './productCard';

describe('ProductCardComponent', () => {
  it('should render correctly', () => {
    const component = shallow(<ProductCard />);
    expect(component).toMatchSnapshot();
  });

});