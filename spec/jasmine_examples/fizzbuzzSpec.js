describe('FizzBuzz', function(){
    
    var FizzBuzz = require('../../js/fizzbuzz.js');
    
//    beforeEach(function() {
//        fizzbuzz = new FizzBuzz();
//    });
    
    describe('Knows when a number', function(){
        
        it ('Is divisible by 3', function(){
            fizzbuzz = new FizzBuzz();
            expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
        });
        
        it ('is not divisible by 3', function(){
            fizzbuzz = new FizzBuzz();
            expect(fizzbuzz.isDivisibleByThree(10)). toBe(false);
        });
        
        it ('is divisible by 5', function(){
            fizzbuzz = new FizzBuzz();
            expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
        })
        
        it ('is not divisible by 5', function(){
            fizzbuzz = new FizzBuzz();
            expect(fizzbuzz.isDivisibleByFive(3)).toBe(false);
        })
        
        it ('is divisable by 15', function(){
            fizzbuzz = new FizzBuzz();
            expect(fizzbuzz.isDivisableByFifteen(15)).toBe(true);
        })
    })
    
    describe('Returns "fizz", "buzz" etc', function(){
        
        it('will return fizz if it is divisable by 3', function(){
            fizzbuzz = new FizzBuzz();
            expect(fizzbuzz.play(3)).toEqual('Fizz');
        })
        
        it('will return buzz if it is divisable by 5', function(){
            fizzbuzz = new FizzBuzz();
            expect(fizzbuzz.play(5)).toEqual('Buzz');
        })
        
        it('wil; return fizzbuzz if it is divisable by 15', function(){
            fizzbuzz = new FizzBuzz();
            expect(fizzbuzz.play(15)).toEqual('FizzBuzz');
        })
    })
});