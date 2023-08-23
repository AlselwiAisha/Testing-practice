function stringLength(str){
    return str.length;
}

function reverseString(str){
    const reverse = [...str].reverse().join('');
    return reverse;

}

function capitalize(str) {
    if(typeof str !== 'string'){
        throw new Error('Invalid input. The parameter must be a string.');
    }
    const capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalizedStr;
}

function capitalizeTester() {
    capitalize('hello') === 'Hello' 
      ? console.log("✔ Test Passed") 
      : console.error("❌ Test Failed");
  }
  
  capitalizeTester() ;
module.exports = {stringLength,reverseString,capitalize};