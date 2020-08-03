function get_salt() {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
    let salt = [];
    for (let i = 0 ; i <letters.length-1; i++) {
        for (let j=i+1 ; j <letters.length; j++) {
            salt.push(letters[i] + letters[j],letters[j] + letters[i]);
        }
    }
    return salt;
}

module.exports.get_salt = get_salt;
