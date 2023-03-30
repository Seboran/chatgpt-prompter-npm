import * as fs from 'fs'

export default async (
  filePath: string,
  encoding: BufferEncoding
): Promise<Record<string, any>> => {
  return new Promise((resolve, reject) =>
    fs.readFile(filePath, encoding, function (err, data) {
      if (err) {
        reject(err)
      } else {
        try {
          const dataJson = JSON.parse(data)
          resolve(dataJson)
        } catch (e) {
          reject(e)
        }
      }
    })
  )
}
