const {game} = require('./bowling');

describe('Checks all strike conditions',()=>{
   const rolls = [10,10,10,10,10,10,10,10,10,10,10,10];

   it("should say the total score is 300",()=>{
       expect(game(rolls).score).toBe(300);
   })
})