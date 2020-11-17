/*     
## requirement 
    
- Create a new main.js file and write a function that does the following: determine whether a string is a palindrome string. (Palindrome, a string read from the beginning as well as from the end. For example, abcba is a palindrome string.)

```
function palindrome(message){
  // wirte your code here
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true
```

*/
function palindrome(message){
  let str = message.split('').reverse().join('');
  if(message === str){
    return true;
  }
  else{
    return false;
  }
}
console.log(palindrome('hello'));
console.log(palindrome('abcba'));
