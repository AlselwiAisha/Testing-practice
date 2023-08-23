
//Task 3
class calculator {
    add(n1,n2){
       return n1+n2;
    }
    subtract(n1,n2){
       return n2-n1;
    }
    divide(n1,n2){
       if (n2 === 0) {
           throw new Error('Cannot divide by zero.');
         }
       return n1 / n2;
    }
    multiply(n1,n2){
    return n1*n2
    }
   }
   
   
   const calc=new calculator();
   describe('Add ', () => {
       test('Add 1', () => {
           const sum = calc.add(5,4);
         expect(sum).toBe(9);
       });
     
       test('Add 2', () => {
           const sum=calc.add(10,4);
         expect(sum).toBe(14);
       });
       test('Add 3', () => {
           const sum=calc.add(5,9);
         expect(sum).toBe(14);
       });
     });
   
     describe('subtract ', () => {
   test('subtract 1', () => {
       const subtract = calc.subtract(5,4);
     expect(subtract).toBe(-1);
   });
   
   test('subtract 2', () => {
       const subtract=calc.subtract(10,4);
     expect(subtract).toBe(-6);
   });
   test('subtract 3', () => {
       const subtract=calc.subtract(5,9);
     expect(subtract).toBe(4);
   });
   });
   
   describe('divide ', () => {
   test('divide 1', () => {
       const divide = calc.divide(16,4);
     expect(divide).toBe(4);
   });
   
   test('divide 2', () => {
       const divide=calc.divide(10,2);
     expect(divide).toBe(5);
   });
   test('divide 3', () => {
       const divide=calc.divide(81,9);
     expect(divide).toBe(9);
   });
   });
   
   describe('multiply ', () => {
   test('multiply 1', () => {
       const multiply = calc.multiply(5,4);
     expect(multiply).toBe(20);
   });
   
   test('multiply 2', () => {
       const multiply=calc.multiply(10,4);
     expect(multiply).toBe(40);
   });
   
   test('multiply 3', () => {
       const multiply=calc.multiply(5,9);
     expect(multiply).toBe(45);
   });
   
   test('should throw an error when dividing by zero', () => {
       expect(() => calc.divide(10, 0)).toThrow('Cannot divide by zero.');
     });
   });