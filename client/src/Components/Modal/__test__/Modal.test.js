import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import DeleteModal from './../Modal';

describe('Modal', () => {
  it('should display title', () => {
    const wrapper = shallow(<DeleteModal />);
    const text = wrapper.find('div h2');
    expect(text.text()).toBe('Are you sure you want to delete your plant?');
  });

  it('should display close button', () => {
    const wrapper = shallow(<DeleteModal />);
    const text = wrapper.find('button.delete_button');
    expect(text.text()).toBe('x');
  });

  it('should display confirmation button', () => {
    const wrapper = shallow(<DeleteModal />);
    const text = wrapper.find('button.confirmation_button');
    expect(text.text()).toBe("I'm sure");
  });
});
