import assert from 'assert';

import { round } from './math';

describe('math', () => {
  describe('round()', () => {
    it('should round to the correct value', () => {
      assert.equal(round(1.76, 2.5), 2.5);
      assert.equal(round(76, 2.5), 75);
      assert.equal(round(101, 2.5), 100);
      assert.equal(round(133, 5), 135);
      assert.equal(round(133.324234234, 5), 135);
      assert.equal(round(133, -5), 135);
      assert.equal(round(0.23, 0.25), 0.25);
      assert.equal(round(1.23, 1.25), 1.25);
    });
  });
});
