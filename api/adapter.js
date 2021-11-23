import { Low, JSONFileSync, Memory } from 'lowdb'
import { readFile } from 'fs/promises'
const json = JSON.parse(await readFile(new URL('./db.json', import.meta.url)))
const isLocal = !process.env.NOW_REGION
const type = isLocal ? new JSONFileSync('./db.json') : new Memory()

const db = new Low(type)
db.write(json)

export default db
