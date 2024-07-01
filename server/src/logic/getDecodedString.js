function decodeBase64(base64String) {
  // Decode the base64 string
  const decodedString = atob(base64String);
  return decodedString;
}
export default decodeBase64;
