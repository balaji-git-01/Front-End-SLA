const isPalindrome = (pal) => {
    let revpal = pal.split('').reverse().join('');

    if (pal === revpal) {
        console.log("palindrome");
    } else {
        console.log("not palindrome");
    }
};

isPalindrome("BAAB");
