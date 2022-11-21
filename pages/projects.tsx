import { getMarkdownContent } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";
import Layout from "../src/components/layouts/layout";

const markdownFileName = 'projects.md'

interface ProjectPageProps {
  content: string
}

const Projects = (props: ProjectPageProps) => (
  <Layout>
    <div className="flex justify-center">
      <article className='prose lg:prose-lg prose-p:text-justify' dangerouslySetInnerHTML={{__html: props.content}} />
    </div>
  </Layout>
)

export async function getStaticProps() {
  const markdownFile = getMarkdownContent(markdownFileName)
  const content = await markdownToHtml(markdownFile)

  return {
    props: {
      content: content
    }
  }
}

export default Projects;