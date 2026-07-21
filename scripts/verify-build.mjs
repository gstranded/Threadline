import { access, readFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const buildDir = resolve(rootDir, 'build', 'chrome-mv3-prod')
const manifestPath = resolve(buildDir, 'manifest.json')

const manifest = JSON.parse(await readFile(manifestPath, 'utf8'))
const popupPath = manifest.action?.default_popup

if (typeof popupPath !== 'string' || popupPath.length === 0) {
  throw new Error('Built extension is missing action.default_popup')
}

await access(resolve(buildDir, popupPath))
console.log(`[verify-build] Toolbar popup: ${popupPath}`)
