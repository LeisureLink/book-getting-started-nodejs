'use strict';

import {expect} from 'code';
import calculator from '../';

describe('Files', () => {

  describe('#add(x,y)', () => {

    it('can see the add function', () => {
      expect(calculator.add).to.be.a.function();
    });

    it(`performs addition`, () => {
      expect(calculator.add(1, 2)).to.be.equal(3);
    });
  });


  it(`can't access the answerToLife`, () => {
    expect(calculator.answerToLife).to.not.be.ok;
  });

  it(`can't access the lowercase function`, () => {
    expect(calculator.lowercase).to.not.be.ok;
  });

});