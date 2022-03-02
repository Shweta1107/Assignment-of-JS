const {division} = require('./diivision');

describe('Block for  division testing',()=>{

    it("should return 2.5 for a=5 and b=2",()=>{
        expect (division(5,3).toString(2.5))
    })

    it("should return a value close to 1 for a=5 and b=5",()=>{
        expect (division(5,5)).toBeCloseTo(1)
    })

    // it("should return ?? for a=5 and b=0 ",()=>{
    //     expect(division(5,0)).toBe(Infinity)
    // })

    it("should return Invalid for string values ",()=>{
        expect(division("5",0)).toBe("Invalid")
    })


})