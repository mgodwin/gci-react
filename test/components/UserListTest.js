import React from 'react';
import { shallow } from 'enzyme';
import UserList from 'components/UserList.js';

describe('<UserList />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<UserList />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "userlist-component"', function () {
      expect(component.hasClass('userlist-component')).to.equal(true);
    });
  });
});
