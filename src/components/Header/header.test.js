import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

let wrapper;
const search = jest.fn();

 beforeEach(() => {
   wrapper = shallow(<Header />)
 })

describe('Header Component', () => {
  it('should render correctly', () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
  
  it("should load search bar", () => {
    const component = shallow(<Header />);
    const form = component.find('input');
    expect(form).toBeDefined();
  });

  it('search bar should br called', () => {
    wrapper.find('input').simulate(
      'click', 
      {preventDefault() {}}
    )
    expect(search.mock.calls.length).toBe(1)
   })

});