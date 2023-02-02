const { sum } = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    
    expect(fromEuroToDollar(3.5)).toBe(4.2); 
})

test("One dollar should be 128 yenes", function(){
    const { fromDollarToYen } = require('./app.js')
    
    expect(fromDollarToYen(3.5)).toBe(448); 
})

test("One yen should be 0.8 pounds", function(){
    const { fromYenToPound } = require('./app.js')
    
    expect(fromYenToPound(2)).toBe(1.6); 
})
