// import the function sum from the app.js file
const { sum, } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
  //import the function from app.js
  const { fromEuroToDollar } = require('./app.js')

  // use the function like its supposed to be used
  const dollars = fromEuroToDollar(3.5)

  // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
  const expected = 3.5 * 1.2; 
  
  // this is the comparison for the unit test
   expect(dollars).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("fromYenToPound", function(){
  //import the function from app.js
  const { fromYenToPound } = require('./app.js')

  // use the function like its supposed to be used
  const pounds = fromYenToPound(400)
  
  // this is the comparison for the unit test
   expect(pounds).toBe(2.48); 
})

test("fromDollarToYen", function(){
  //import the function from app.js
  const { fromDollarToYen } = require('./app.js')

  // use the function like its supposed to be used
  const yen = fromDollarToYen(400)
  
  // this is the comparison for the unit test
   expect(yen).toBe(54000); 
})