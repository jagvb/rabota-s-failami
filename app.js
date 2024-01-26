import fs, { fdatasync, read } from 'fs'
//7
let one = fs.readFileSync('1.txt', 'utf8')
let two = fs.readFileSync('2.txt', 'utf8')
let three = fs.readFileSync('3.txt', 'utf8')
let four = fs.readFileSync('4.txt', 'utf8')
let five = fs.readFileSync('5.txt', 'utf8')


fs.writeFileSync('rex.txt', +one + +two + +three + +four + +five + '')


//9
// import fs from 'fs';

// async function func() {
// 	let data = await fs.promises.readFile('readme.txt', 'utf8');
// 	console.log(data);
// }

// func();
import fst from 'fs/promises';;

async function func() {
	let data = await fst.readFile('readme.txt', 'utf8');
	console.log(data);
}

func();

//11
import __dirname from './__dirname.js';
console.log(__dirname);

//12
try {
	await fs.access('test.txt', constants.F_OK);
	console.log(fs.readFileSync('test.txt'));
} catch {
	console.error('нету такого');
}