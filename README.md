# Tradeshift Triangle Test

### Instructions

- To run: `npm start`
- To test: `npm test`

Make sure to install dependencies through npm first.

### Considerations & Design Decisions

The first decision I made, was to use a simple function which takes 3 arguments (length of each side of the triangle) which is placed in a separate file.

I had the consideration to create a `Triangle` class, which could have expanded functionality. As I believe in the simplest solution being the best, I didn't want to speculate in expanded functionality and what might become potential use cases further along.

If I knew that there would be other operations regarding triangles, I would probably consider a more scalable solution, as there would be a bit of lock-in to using functions rather than class methods with this approach. But that's pure speculation at this point.

Afterwards it was straight forward to write the tests required for the functionality to be covered. An error is thrown if the input is not valid.

I am also a fan of using constants as I think this scales well and mitigates the risk of error. It may look clunky, but helps peer developers read and extend your code. Each triangle type is hence defined as a constant.

Other than the constants, the single function `triangleType` is exported from `geometry.js`. `triangleType` either throws an error or returns one of the constant values.

You also find a helper function called `isFiniteAndPositive` which is used to validate the arguments, i.e. side length. It validates that the side lengths provided are finite numbers and positive, thus errors on e.g. strings, negative numbers or zero. It could also have been an anonymous function, but I personally like the explicite nature of named helpers functions for readability.

I considered adding a `parseFloat` call before validating the input to allow to numeric strings to be passed, but I honestly thought that would be odd to put in the function itself. A use case for this could come from a user providing input in a form, where input is always read as strings. But in this case it would be a better design to parse the string before passing it to `triangleType`.

Another thing I considered was to unpack the arguments into an array, i.e. this function definition: `(...sides) => { [...] }`. While it would remove the need to create an array to run `isFiniteAndPositive` through call to `every`, it would also require adding 1 more argument check: that there are three arguments provided to the function. I think this solution is more readable.
