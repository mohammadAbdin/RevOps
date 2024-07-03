export default function decodeBase64(base64String) {
  // Decode the base64 string
  const decodedString = atob(base64String);

  const finalContent = decodedString.replace(/\\n/g, "\n");
  console.log(finalContent);
  return finalContent;
}
