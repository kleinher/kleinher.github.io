import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hernan Kleinubing
      </h1>
      <p className="mb-4">
        {`I'm a Software Engineer focused mainly in Backend. Also Electronics Hobbist 
         interested in technology and it's apliances. Driven by clean code principles, 
         scalability, and optimizing performance to build reliable and high-performing 
         applications.
         Currently based in Spain`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
