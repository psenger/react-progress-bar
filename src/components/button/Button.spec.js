import { shallow } from 'enzyme';
import React from 'react';
import Button from './Button';

describe('COMPONENT:', () => {
  describe('Button', () => {
    it('should produce one button', () => {
      const onClick = jest.fn();
      const component = shallow(
        <Button value={123} onClickHandler={onClick} />
      );
      expect(component.find('button').length).toEqual(1);
    });
    it('should produce one button with text as the value', () => {
      const onClick = jest.fn();
      const component = shallow(
        <Button value={123} onClickHandler={onClick} />
      );
      expect(component.text()).toEqual('123');
    });
    it('should capture an on click event', () => {
      const onClick = jest.fn();
      const component = shallow(
        <Button value={123} onClickHandler={onClick} />
      );
      component.simulate('click');
      expect(onClick).toBeCalledWith(123);
    });
  });
});
