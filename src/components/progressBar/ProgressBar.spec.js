import { shallow } from 'enzyme';
import React from 'react';
import ProgressBar from './ProgressBar';

describe('COMPONENT:', () => {
  describe('ProgressBar', () => {

    describe('with -20%', () => {
      const component = shallow(
        <ProgressBar percentage={-20} />
      );
      it('should contain a style of 0% width', () => {
        expect(component.html()).toEqual(expect.stringContaining('style=\"width:0%;\"'));
      });
      it('should contain two divs', () => {
        expect(component.find('div').length).toEqual(2);
      });
      it('should have content equal to -20%', () => {
        expect(component.text()).toEqual('-20%');
      });
      it('should have a invalid style', () => {
        expect(component.find('.progressbar--slide--invalid').length).toEqual(1);
      });
      it('should not have a valid style', () => {
        expect(component.find('.progressbar--slide--valid').length).toEqual(0);
      });
    });

    describe('with 0%', () => {
      const component = shallow(
        <ProgressBar percentage={0} />
      );
      it('should contain a style of 0% width', () => {
        expect(component.html()).toEqual(expect.stringContaining('style=\"width:0%;\"'));
      });
      it('should contain two divs', () => {
        expect(component.find('div').length).toEqual(2);
      });
      it('should have content equal to 0%', () => {
        expect(component.text()).toEqual('0%');
      });
      it('should have a valid style', () => {
        expect(component.find('.progressbar--slide--valid').length).toEqual(1);
      });
      it('should not have an in valid style', () => {
        expect(component.find('.progressbar--slide--invalid').length).toEqual(0);
      });
    });

    describe('with 10%', () => {
      const component = shallow(
        <ProgressBar percentage={10} />
      );
      it('should contain a style of 10% width', () => {
        expect(component.html()).toEqual(expect.stringContaining('style=\"width:10%;\"'));
      });
      it('should contain two divs', () => {
        expect(component.find('div').length).toEqual(2);
      });
      it('should have content equal to 10%', () => {
        expect(component.text()).toEqual('10%');
      });
      it('should have a valid style', () => {
        expect(component.find('.progressbar--slide--valid').length).toEqual(1);
      });
      it('should not have an in valid style', () => {
        expect(component.find('.progressbar--slide--invalid').length).toEqual(0);
      });
    });

    describe('with 100%', () => {
      const component = shallow(
        <ProgressBar percentage={100} />
      );
      it('should contain a style of 100% width', () => {
        expect(component.html()).toEqual(expect.stringContaining('style=\"width:100%;\"'));
      });
      it('should contain two divs', () => {
        expect(component.find('div').length).toEqual(2);
      });
      it('should have content equal to 100%', () => {
        expect(component.text()).toEqual('100%');
      });
      it('should have a valid style', () => {
        expect(component.find('.progressbar--slide--valid').length).toEqual(1);
      });
      it('should not have an in valid style', () => {
        expect(component.find('.progressbar--slide--invalid').length).toEqual(0);
      });
    });

    describe('with 110%', () => {
      const component = shallow(
        <ProgressBar percentage={110} />
      );
      it('should contain a style of 100% width', () => {
        expect(component.html()).toEqual(expect.stringContaining('style=\"width:100%;\"'));
      });
      it('should contain two divs', () => {
        expect(component.find('div').length).toEqual(2);
      });
      it('should have content equal to 110%', () => {
        expect(component.text()).toEqual('110%');
      });
      it('should have a invalid style', () => {
        expect(component.find('.progressbar--slide--invalid').length).toEqual(1);
      });
      it('should not have a valid style', () => {
        expect(component.find('.progressbar--slide--valid').length).toEqual(0);
      });
    });

  });
});
