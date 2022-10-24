const {SumofTwoNumbers,calculate} = require("./sum");

describe("sum of two number",()=>{
    test("adds 1 + 2 to equal 3", () => {
        expect(SumofTwoNumbers(1, 2)).toBe(3);
      });
      
      test("adds 3 + 2 to equal 5", () => {
        expect(SumofTwoNumbers(3, 2)).toBe(5);
      });
      
      test("adds 2 + 2 + 2 to equal 6", () => {
        expect(SumofTwoNumbers(2, 2, 2)).toBe(6);
      });
      
      test("adds 3 + 2 + 5to equal 10", () => {
        expect(SumofTwoNumbers(3, 2, 5)).toBe(10);
      });
      
      test("adds 3 + 2 +15 to equal 20", () => {
        expect(SumofTwoNumbers(3, 2, 15)).toBe(20);
      });
      
      test("adds [1,2,3] to equal 6", () => {
        expect(SumofTwoNumbers([1, 2, 3])).toBe(6);
      });
      
      test("adds [1,2,3] to equal 6", () => {
        expect(SumofTwoNumbers(...[1, 2, 3])).toBe(6);
      });
      
      test("adds [1,2] to equal 3", () => {
        expect(SumofTwoNumbers(...[1, 2])).toBe(3);
      });
      
      test("adds [1,12] to equal 13", () => {
          expect(SumofTwoNumbers(...[1, 12])).toBe(13);
        });
        
      test("adds [10,5] to equal 3", () => {
          expect(SumofTwoNumbers(...[10, 5])).toBe(15);
        }); 
        
        test("adds 1,2,3,4,5 to equal 15", () => {
            expect(calculate(1,2,3,4,5)).toBe(15);
          });
        
          test("adds 1,2,3,4, to equal 10", () => {
            expect(calculate(1,2,3,4)).toBe(10);
          });

          
          test("adds [1,2,3] to equal 10", () => {
            expect(calculate([1,2,3])).toBe(6);
          });
          
})

// test("adds 1,2,3,4 to equal 10",()=>{
//     expect(calculatetotal(...[1, 2,3,4])).toBe(10);

//   })

// test("adds 1,2,3,4 to equal 10",()=>{
//     expect(calculatetotal(1, 2,3,4])).toBe(10);

//   })
// test("adds 1,2,3,4 to equal 10",()=>{
//     expect(calculatetotal(...[1, 2,3,4])).toBe(10);

//   })