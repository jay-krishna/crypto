function encrypt() {
	try {
		const plainText = document.getElementById("plain_text").value;
		const cipher = document.getElementById("cipher_key").value;
		const simpleCrypto = new SimpleCrypto(cipher);
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
		const simpleCrypto = new SimpleCrypto(cipher);
		const decipherText = simpleCrypto.decrypt(encryptedText);
		document.getElementById("plain_text").value = decipherText;
	} catch (err) {
		console.log(err);
		alert(err);
	}
}

function toggle(id_cb, id_ele) {
	const passwordEle = document.getElementById(id_ele);
	const type = passwordEle.getAttribute('type');
	const cb = document.getElementById(id_cb).checked;
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