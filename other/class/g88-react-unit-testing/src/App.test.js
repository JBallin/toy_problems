import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  it ('renders', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App')).toHaveLength(1);
    expect(wrapper.find('.App > .App-header')).toHaveLength(1);
    const linkElements = wrapper.find('.App-header > .App-link');
    expect(linkElements).toHaveLength(1);
    expect(linkElements.first().prop('href')).toEqual('https://reactjs.org');
  });

  it('renders image on button click', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-header > .App-logo')).toHaveLength(0);
    const button = wrapper.find('.App-button').first();
    expect(wrapper.state('showImage')).toEqual(false);
    button.simulate('click');
    expect(wrapper.find('.App-header > .App-logo')).toHaveLength(1);
    expect(wrapper.state('showImage')).toEqual(true);
  });
});
