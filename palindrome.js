function checkPalindrome() {
    var inputString = document.getElementById('inputString').value.toLowerCase().replace(/[^a-z0-9]/g, ''); // Convert to lowercase and remove non-alphanumeric characters
    var reversedString = inputString.split('').reverse().join(''); // Reverse the string

    if (inputString === reversedString) {
        document.getElementById('result').innerHTML = "The string is a palindrome!";
    } else {
        document.getElementById('result').innerHTML = "The string is not a palindrome!";
    }
}