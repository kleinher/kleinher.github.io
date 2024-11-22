import { readMDXFile } from 'app/blog/utils'
import { CustomMDX } from 'app/components/mdx'
import { BlogPosts } from 'app/components/posts'
import path from 'path'

export default function Page() {
    let { metadata, content } = readMDXFile("app/resume/resume.mdx")
    return (
        <section>
            <article className="prose">
                <CustomMDX source={content} />
            </article>

        </section>
    )
}