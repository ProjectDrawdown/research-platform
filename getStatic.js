import { promises as fs } from "fs"
import path from "path"
import matter from "gray-matter"

async function getFrontMatter (directory, filename) {
  const filePath = path.join(directory, filename)
  const fileContents = await fs.readFile(filePath, "utf8")
  return matter(fileContents).data
}

export default async function getStaticFilesFrontMatter(pathName) {
  const directory = path.join(process.cwd(), pathName)
  const files = await fs.readdir(directory)

  const promises = files.map((filename) => {
    return getFrontMatter(directory, filename)
  })

  const frontMatter = await Promise.all(promises)

  return frontMatter
}

