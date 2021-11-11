import moment from 'moment'

const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', (error) => reject(error))
    image.setAttribute('crossOrigin', 'anonymous') // needed to avoid cross-origin issues on CodeSandbox
    image.src = url
  })

function getRadianAngle(degreeValue) {
  return (degreeValue * Math.PI) / 180
}

/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 * @param {File} image - Image File url
 * @param {Object} pixelCrop - pixelCrop Object provided by react-easy-crop
 * @param {number} rotation - optional rotation parameter
 */
export default async function getCroppedImg(imageSrc, pixelCrop, rotation = 0) {
  const image = await createImage(imageSrc)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  const maxSize = Math.max(image.width, image.height)
  const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2))

  // set each dimensions to double largest dimension to allow for a safe area for the
  // image to rotate in without being clipped by canvas context
  canvas.width = safeArea
  canvas.height = safeArea

  // translate canvas context to a central location on image to allow rotating around the center.
  ctx.translate(safeArea / 2, safeArea / 2)
  ctx.rotate(getRadianAngle(rotation))
  ctx.translate(-safeArea / 2, -safeArea / 2)

  // draw rotated image and store data.
  ctx.drawImage(
    image,
    safeArea / 2 - image.width * 0.5,
    safeArea / 2 - image.height * 0.5
  )
  const data = ctx.getImageData(0, 0, safeArea, safeArea)

  // set canvas width to final desired crop size - this will clear existing context
  canvas.width = pixelCrop.width
  canvas.height = pixelCrop.height

  // paste generated rotate image with correct offsets for x,y crop values.
  ctx.putImageData(
    data,
    Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x),
    Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y)
  )

  // As Base64 string
  // return canvas.toDataURL('image/jpeg');

  // As a blob
  return new Promise((resolve) => {
    canvas.toBlob((file) => {
      resolve(URL.createObjectURL(file))
    }, 'image/jpeg')
  })
}

export const eclipse = (str = '', len = 50) => {
  if (str.length > len) {
    return str.substring(0, len) + '...'
  } else return str
}

export const join = (arr, key, joinPattern = ',') =>
  arr.map((d) => d[key]).join(joinPattern)

export const doResize = (e) => {
  const textbox = e.target
  var maxrows = 50
  var txt = textbox.value
  var cols = textbox.cols

  var arraytxt = txt?.split('\n')
  var rows = arraytxt.length

  for (let i = 0; i < arraytxt.length; i++)
    // @ts-ignore
    rows += parseInt(arraytxt[i].length / cols)

  if (rows > maxrows) textbox.rows = maxrows
  else textbox.rows = rows
}

export const removedWords = [
  'a',
  'an',
  'the',
  'and',
  'but',
  'or',
  'for',
  'nor',
  'so',
  'yet',
  'at',
  'by',
  'from',
  'in',
  'into',
  'of',
  'on',
  'to',
  'with',
  'am',
  'are',
  'be',
  'been',
  'can',
  'could',
  'did',
  'do',
  'does',
  'had',
  'has',
  'have',
  'is',
  'may',
  'might',
  'must',
  'ought to',
  'shall',
  'should',
  'was',
  'were',
  'will',
  'would',
]

export const getTags = (str) => {
  if (str && str.length > 0) {
    return str.split(' ').filter((tag) => !removedWords.includes(tag))
  }
}

export const getFromNowTime = (time) => moment(time).fromNow()
