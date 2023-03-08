var userInput;
var userName;
userInput = 5;
userInput = 'Max';
// userName = userInput; 
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError('エラーが発生しました', 500);
console.log(result);
