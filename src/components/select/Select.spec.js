import { shallow } from 'enzyme';
import React from 'react';
import Option from '../option/Option';
import Select from './Select';

describe('COMPONENT:', () => {
  describe('Select', () => {

    it('should work with complex children', () => {
      const onChange = jest.fn();
      const component = shallow(
        <Select name="times" value="2" onChangeHandler={onChange}><Option value="1" text={1} /><Option value="2"
                                                                                                       text={2} /><Option
          value="3" text={3} /></Select>
      );
      expect(component.children().length).toEqual(3);
    });

    it('should capture an on change event', () => {
      const onChange = jest.fn();
      const component = shallow(
        <Select name="nothing" value="100" onChangeHandler={onChange} />
      );
      component.simulate('change', { target: { value: '200' } });
      expect(onChange).toBeCalledWith('200');
    });

  });
});
