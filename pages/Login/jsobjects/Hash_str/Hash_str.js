export default {
  hash(varin) {
    var md = forge.md.sha256.create(); // Create a SHA256 object
    md.update(varin); // Update with the input string
    return md.digest().toHex(); // Return the hashed value in Hex format
  },
};
