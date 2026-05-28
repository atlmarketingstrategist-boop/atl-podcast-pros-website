import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const imagesDir = path.join(__dirname, '..', 'public', 'assets', 'images')

const formatSize = (bytes) => {
  if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(2)} MB`
  return `${(bytes / 1024).toFixed(1)} KB`
}

const processImages = async () => {
  const files = fs.readdirSync(imagesDir)
  const imageFiles = files.filter((f) => /\.(jpg|jpeg|png)$/i.test(f))

  console.log(`\nFound ${imageFiles.length} images to optimize\n`)
  console.log('─'.repeat(70))

  let totalBefore = 0
  let totalAfter = 0

  for (const file of imageFiles) {
    const filePath = path.join(imagesDir, file)
    const beforeSize = fs.statSync(filePath).size
    totalBefore += beforeSize

    try {
      const ext = path.extname(file).toLowerCase()
      const metadata = await sharp(filePath).metadata()
      let pipeline = sharp(filePath)

      // Resize if wider than 1920px
      if (metadata.width > 1920) {
        pipeline = pipeline.resize(1920, null, { withoutEnlargement: true })
      }

      const tmpPath = filePath + '.tmp'

      if (ext === '.png') {
        await pipeline
          .png({ quality: 85, compressionLevel: 9, effort: 10 })
          .toFile(tmpPath)
      } else {
        await pipeline
          .jpeg({ quality: 80, progressive: true, mozjpeg: true })
          .toFile(tmpPath)
      }

      const afterSize = fs.statSync(tmpPath).size
      fs.renameSync(tmpPath, filePath)
      totalAfter += afterSize

      const saved = beforeSize - afterSize
      const pct = ((saved / beforeSize) * 100).toFixed(1)
      const arrow = saved > 0 ? '↓' : '↑'
      console.log(
        `${file.padEnd(36)} ${formatSize(beforeSize).padStart(9)} ${arrow} ${formatSize(afterSize).padStart(9)}  (${pct}% saved)`
      )
    } catch (err) {
      totalAfter += beforeSize
      console.error(`  ERROR: ${file} — ${err.message}`)
    }
  }

  console.log('─'.repeat(70))
  const totalSaved = totalBefore - totalAfter
  const totalPct = ((totalSaved / totalBefore) * 100).toFixed(1)
  console.log(
    `${'TOTAL'.padEnd(36)} ${formatSize(totalBefore).padStart(9)} → ${formatSize(totalAfter).padStart(9)}  (${totalPct}% saved, ${formatSize(totalSaved)} freed)\n`
  )
}

processImages().catch(console.error)
