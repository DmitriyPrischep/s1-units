import {fakeOrders} from '../mock/fakeOrders';

import React from 'react';
import Order from './Order';
import {sortTypes} from '../utils/sortOrders';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('getDate function', () => {
    it('Fake orders', () => {
        const wrapper = shallow(
          <Order
            order = {fakeOrders} 
          />
        );
        expect(toJson(wrapper)).toMatchSnapshot();
      });
});