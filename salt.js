function get_salt() {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
    let salt = [];
    for (let i = 0 ; i <10; i++) {
        for (let j=i+1 ; j <11; j++) {
            salt.push(letters[i] + letters[j]);
        }
    }

    for (let i = 10 ; i >= 1; i--) {
        for (let j = i-1 ; j >=0; j--) {
            salt.push(letters[i] + letters[j]);
        }
    }
    return salt;
};
 module.exports.get_salt = get_salt;
