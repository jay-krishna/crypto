//npm install --save simple-crypto-js
const SimpleCrypto = require("simple-crypto-js").default

const plainText = "plainText";
const cipher = "cipher";
const salt = "salt";
const cb = true;
let cipher_text = "";
if (cb) {
    cipher_text = `${salt}-${cipher}`;
} else {
    cipher_text = `${cipher}-${salt}`;
}

const simpleCrypto = new SimpleCrypto(cipher_text);
const encryptedText = simpleCrypto.encrypt(plainText);

console.log(encryptedText);

const decipherText = simpleCrypto.decrypt(encryptedText);
console.log(decipherText);