export default function extractFileNameFromUrl(url: string): string {
  const parts: string[] = url.split("/");
  const fileName: string = parts.pop() || "";
  return fileName;
}
