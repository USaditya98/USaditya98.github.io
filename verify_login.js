const encryptedMessage = "dFJRSlVERBhjX1lUQFYcGEdSEFBRQVUYQlJGUVVAVVwQTl9NQhdASl9RWVRVF1VARFJeS1lBVVRJGRBhX0JCGFteXlxeUkNLHBdDVVlbVRQQVl5cEEdVV0BbVRhDXFlUXEQQWUJSEF1IVFVIRF5fVlFbHhhnUhBPX0JcXBBbWVNVF0RXEFJITFVZVBhRF0BdQlpRVlVZRBhfUVZdQhkeFg==";
const key = "0708";

function xorDecrypt(base64Text, key) {
    try {
        const binaryString = Buffer.from(base64Text, 'base64').toString('binary');
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }

        const keyBytes = new TextEncoder().encode(key);
        const result = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            result[i] = bytes[i] ^ keyBytes[i % keyBytes.length];
        }

        return new TextDecoder().decode(result);
    } catch (e) {
        return null;
    }
}

console.log("Decrypted with 0708:", xorDecrypt(encryptedMessage, key));
