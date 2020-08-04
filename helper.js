const fs = require('fs');
function get_data_of_file(route) {
    const file = fs.readFileSync(route,"utf8");
    let array_of_data=[];
    array_of_data.push(file.split(/\r?\n/).filter(function(x){return x}).map(function(x){return x}));
    return array_of_data[0];
}
module.exports.get_data_of_file = get_data_of_file;