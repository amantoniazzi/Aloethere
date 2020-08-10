import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Home from '../Home';

describe('Home', () => {
  const mockHandleClick = jest.fn();

  it('renders buttons', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('button').length).toEqual(2);
  });

  it('fires button when clicked', () => {
    const wrapper = shallow(<button onClick={mockHandleClick}></button>);
    wrapper.find('button').at(0).simulate('click');
    expect(mockHandleClick).toHaveBeenCalled();
  });
});
