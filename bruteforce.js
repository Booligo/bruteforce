const md5 = require('md5');
const salt = require('./routes/salt');
const password = require('./routes/helper');
const hash = require('./routes/helper');
const hashes = hash.get_data_of_file("pass-hash/passwords.txt");
const pass = password.get_data_of_file("./pass-hash/dictionary.txt");
const sol = salt.get_salt();
function crack() {
    let start = (new Date()).getTime();
    let count = 1;
    for (let j = 0; j < hashes.length; j++) {
        let k=0;
        for (let i = 0; i < pass.length; i++) {
            count++;
            if (md5(`${sol[k]}$${pass[i]}`) === hashes[j]) {
                console.log(`password plaintext:${sol[k]}$${pass[i]} = hash:${hashes[j]}`);
                break;
            }
            if(k<sol.length){
                k++;
            }else k=0;
        }
    }
    console.log('time - ',((new Date()) * 1) - start,'ms');
    console.log(`кол-во попыток: ${count}`);
}
crack();
