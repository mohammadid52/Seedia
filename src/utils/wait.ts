export const wait = (timeout: number) => {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}
export const isAvailable = (fieldName: string, inThis: any) =>
  inThis && inThis.hasOwnProperty(fieldName) && inThis[fieldName] !== ''
