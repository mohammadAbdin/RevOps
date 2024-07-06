export default function decodeBase64(base64String) {
  const decodedString = atob(base64String);

  const finalContent = decodedString.replace(/\\n/g, "\n");
  return finalContent;
}
