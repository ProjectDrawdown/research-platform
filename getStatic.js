import { promises as fs } from "fs"
import path from "path"
import matter from "gray-matter"

async function getFrontMatter (directory, filename) {
  const filePath = path.join(directory, filename)
  const fileContents = await fs.readFile(filePath, "utf8")
  return {
    ...matter(fileContents).data,
    path: filename.split(".md")[0]
  }
}

export default async function getStaticFilesFrontMatter(pathName) {
  const directory = path.join(process.cwd(), pathName)
  const filenames = await fs.readdir(directory)

  const markdownFilenames = filenames.filter((filename) => {
    return filename.split(".").reverse()[0] === "md"
  })

  const promises = markdownFilenames.map((filename) => {
    return getFrontMatter(directory, filename)
  })

  const frontMatter = await Promise.all(promises)

  return frontMatter
}

