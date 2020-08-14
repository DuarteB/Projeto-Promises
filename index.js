const fs = require('fs');
const path = require('path');
const basePath = 'assets/';
//const res = document.getElementById('content');

function cb (err, data) {
    if(err) throw err
    console.log(data)
}
console.log('Begin')

// const files = fs.readdirSync(path.resolve(basePath))

// const sentences = files.filter((file) => /s[1-3].txt/gi.test(file))

// for (const file of sentences) {
//     fs.readFile(path.resolve(basePath, file), { encoding: 'utf-8' }, cb)
// }

fs.readdir(path.resolve(basePath), (err, files) => {
    if(err) throw err
    files
        .filter((file) => /s[1-3].txt/gi.test(file))// filter the files 
        .forEach((sentenceFile) => {// for each sentence, reads and prints (async)
            fs.readFile(path.resolve(basePath, sentenceFile), { encoding: 'UTF-8' }, cb)//will print unordered
        })
})

console.log('End')