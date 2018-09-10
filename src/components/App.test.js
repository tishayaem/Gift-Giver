import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);
  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('initialized the `state` with an empty list', () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe('When clicking the `add-gift` button', () => {
    const id = 1;

    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    });
    afterEach(() => {
      app.setState({ gifts: [] });
    });

    it('adds a new gift to `state`', () => {
      expect(app.state().gifts).toEqual([{ id }]);
    });

    it('adds a new gift to the rendered list', () => {
      expect(app.find('.gift-list').children().length).toEqual(id);
    });

    it('creates a Gift component', () => {
      expect(app.find('Gift').exists()).toBe(true);
    });

    describe('user wants to remove the added gift', () => {
      beforeEach(() => {
        app.instance().removeGift(id);
      });

      it('removes the gift from `state`', () => {
        expect(app.state().gifts).toEqual([]);
      });
    });
  });
});
