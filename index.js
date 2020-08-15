const fs = require('fs');
const path = require('path');
const basePath = 'assets/';
//const res = document.getElementById('content');

function cb (err, data, index, max) {
    if(err) throw err
    console.log(data)
    return start(index + 1, max)
}
console.log('Begin')

// const files = fs.readdirSync(path.resolve(basePath))

// const sentences = files.filter((file) => /s[1-3].txt/gi.test(file))

// for (const file of sentences) {
//     fs.readFile(path.resolve(basePath, file), { encoding: 'utf-8' }, cb)
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// fs.readdir(path.resolve(basePath), (err, files) => {
//     if(err) throw err
//     files
//         .filter((file) => /s[1-3].txt/gi.test(file))// filter the files 
//         .forEach((sentenceFile) => {// for each sentence, reads and prints (async)
//             fs.readFile(path.resolve(basePath, sentenceFile), { encoding: 'UTF-8' }, cb)//will print unordered
//         })
// })

start(1, 4)

console.log('End')

function start(index, max) {

    if(index > max) return
    fs.readFile(
        path.resolve(basePath, `s${index}.txt`),
        { encoding: 'utf-8' },
        (err, data) => cb(err, data, index, max)
    )

}