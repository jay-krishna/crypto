function hasLeadingZero(text) {
	return text.length > 1 && text[0] === '0';
}

function isEmpty(text) {
	return text.length === 0;
}

function validateStringEncrypt(plainText, cipher, salt) {
	if (isEmpty(plainText)) {
		throw Error("Plain Text cannot be empty");
	}
	if (isEmpty(cipher)) {
		throw Error("Cipher cannot be empty");
	}
	if (isEmpty(salt)) {
		throw Error("Salt cannot be empty");
	}
}

function validateStringDecrypt(encryptedText, cipher, salt) {
	if (isEmpty(encryptedText)) {
		throw Error("Encrypted Text cannot be empty");
	}
	if (isEmpty(cipher)) {
		throw Error("Cipher cannot be empty");
	}
	if (isEmpty(salt)) {
		throw Error("Salt cannot be empty");
	}
}

function encrypt() {
	try {
		const plainText = document.getElementById("plain_text").value;
		const cipher = document.getElementById("cipher_key").value;
		const salt = document.getElementById("salt").value;
		const cb = document.getElementById("salt_cb").checked;
		let cipher_text = "";
		if (cb) {
			cipher_text = `${salt}-${cipher}`;
		} else {
			cipher_text = `${cipher}-${salt}`;
		}
		validateStringEncrypt(plainText, cipher, salt);
		if (hasLeadingZero(plainText)) {
			throw new Error("Leading zeros not allowed")
		}
		const simpleCrypto = new SimpleCrypto(cipher_text);
		const encryptedText = simpleCrypto.encrypt(plainText);
		document.getElementById("encrypted_text").value = encryptedText;
	} catch (err) {
		console.log(err);
		alert(err);
	}
}

function decrypt() {
	try {
		const encryptedText = document.getElementById("encrypted_text").value;
		const cipher = document.getElementById("cipher_key").value;
		const salt = document.getElementById("salt").value;
		const cb = document.getElementById("salt_cb").checked;
		let cipher_text = "";
		if (cb) {
			cipher_text = `${salt}-${cipher}`;
		} else {
			cipher_text = `${cipher}-${salt}`;
		}
		validateStringDecrypt(encryptedText, cipher, salt);
		const simpleCrypto = new SimpleCrypto(cipher_text);
		const decipherText = simpleCrypto.decrypt(encryptedText);
		document.getElementById("plain_text").value = decipherText;
	} catch (err) {
		console.log(err);
		alert(err);
	}
}

function toggle(id_cb, id_ele) {
	const cb = document.getElementById(id_cb).checked;
	id_ele.forEach((element) => {
		const passwordEle = document.getElementById(element);
		const type = passwordEle.getAttribute('type');
		if (cb) {
			passwordEle.setAttribute(
				'type',
				'password'
			);
		} else {
			passwordEle.setAttribute(
				'type',
				'text'
			);
		}
	});
}

function copy(id) {
	/* Get the text field */
	var copyText = document.getElementById(id);

	/* Select the text field */
	copyText.select();
	copyText.setSelectionRange(0, 99999); /* For mobile devices */

	/* Copy the text inside the text field */
	navigator.clipboard.writeText(copyText.value);

	/* Alert the copied text */
	// alert("Copied the text: " + copyText.value);
}