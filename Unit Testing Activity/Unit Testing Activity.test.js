const UnitTestingActivity=require('./Unit Testing Activity');
test('should return the correct answer.', () => {
  const x=UnitTestingActivity.Greet(null);
  expect(x).toBe("Hello, my friend. What is your name?");
});