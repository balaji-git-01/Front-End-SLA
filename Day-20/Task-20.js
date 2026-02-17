function palindrome(pal) {
    let revpal = pal.split('').reverse().join('');

    if (pal === revpal) {
        console.log("is palindrome");
    } else {
        console.log("is not palindrome");
    }
}
palindrome("mam");
