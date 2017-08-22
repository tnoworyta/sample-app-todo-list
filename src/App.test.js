import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App, { TodoAdd } from './App';
import { Provider } from 'react-redux'

test('render App', () => {
  const store = { }
  const wrapper = shallow(<Provider><App/></Provider>);
  expect(wrapper).toMatchSnapshot();
});

test('render TodoAdd', () => {
  const wrapper = shallow(<TodoAdd />);

  expect(wrapper).toMatchSnapshot();
});

test('render TodoAdd', () => {
  const wrapper = shallow(<TodoAdd />);

  expect(wrapper).toMatchSnapshot();
});
