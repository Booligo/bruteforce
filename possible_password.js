const fs = require('fs');
 function password() {
    const possible_passwords = fs.readFileSync("./pass-hash/dictionary.txt","utf8");
    let pass=[];
    pass.push(possible_passwords.split(/\r?\n/).filter(function(x){return x}).map(function(x){return x}));
    return pass[0];
};
module.exports.password = password;

