/* requirement 
    
- Create a new main. Js file, write a function, implement the following function: a string output in reverse order.

```
function reverseString(message){
  // wirte your code here
}
reverseString('hello'); // should return 'olleh'
```
*/
function reverseString(message){
	var splitString = message.split("");
  	var reverseArray = splitString.reverse();
  	var joinArray = reverseArray.join();
	return joinArray;
}
reverseString('hello');

console.log(reverseString('hello'));