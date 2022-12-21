import {taskFirst, taskNext} from '../0-constants.js';

describe('test for 0-constant', ()=>{
  it('first test', ()=>{
    const result = taskFirst() + taskNext;
    expect(result)
        .toEqual('I prefer const when I can. But sometimes let is okay');
  });
});
