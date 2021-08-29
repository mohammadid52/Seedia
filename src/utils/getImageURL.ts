export default function getImageURL(fileName?: string): string {
  return `${process.env.PUBLIC_URL}/images/${fileName}`
}
