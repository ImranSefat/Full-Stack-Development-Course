import Head from 'next/head'
import { createClient } from 'contentful'
import BlogThumbnail from '../components/BlogThumbnail'

export default function Home({ blogs }) {
  console.log(blogs)

  return (
    <div >
      <Head>
        <title>HOME | Imran's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="m-12 ">
        <div >
          <p className="text-7xl font-serif text-center">Imran's Blogs</p>
        </div>



        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {blogs.map(blog => (
            <BlogThumbnail blog={blog} key={blog.sys.id} />
          ))}
        </div>



      </div>
    </div>
  )
}


export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })

  const res = await client.getEntries({
    content_type: 'blog'
  })

  return {
    props: {
      blogs: res.items
    }
  }
}