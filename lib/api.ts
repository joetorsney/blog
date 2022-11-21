import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const markdownDirectory = '_markdown/'

export function getMarkdownContent(name: string) {
  const fullPath = join(markdownDirectory, `${name}`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return content
}
