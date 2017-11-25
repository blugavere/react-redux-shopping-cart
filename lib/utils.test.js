
import { only } from './utils';

const data = [{
  id: 1
}, {
  id: 2
}, {
  id: 3
}];

describe('utils', () => {

  it('should return an item if it exists', () => {
    const item = only(data[0], data);
    expect(item).toEqual(data[0]);
  });

  it('should return an item if it exists', () => {
    const item = only({id: 5}, data);
    expect(item).toEqual(undefined);
  });

});
