const fs = require('fs');
  function hashes(){
    const password_hashes = fs.readFileSync("./pass-hash/passwords.txt","utf8");
    let hash =[];
    hash.push(password_hashes.split(/\r?\n/).filter(function(x){return x}).map(function(x){return x}));
    return  hash[0];
}
module.exports.hashes = hashes;