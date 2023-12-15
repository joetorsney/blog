import { getMarkdownContent } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";
import Layout from "../src/components/layouts/layout";
import { SEO } from "../src/components/SEO";

const markdownFileName = 'about.md'

interface ProjectPageProps {
  content: string
}

const About = (props: ProjectPageProps) => (
  <Layout>
    <SEO title='About & Experience'/>
    <div className="flex justify-center">
      <article className='prose lg:prose-lg prose-p:text-justify prose-p:text-white prose-invert' dangerouslySetInnerHTML={{__html: props.content}} />
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

export default About;