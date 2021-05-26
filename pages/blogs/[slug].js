import Head from 'next/head'
import { createClient } from 'contentful'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'


const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})


export default function Blogs({ blog }) {
    const { title, readingTime, slug, featuredImage, tags, content } = blog.fields
    const document = {
        nodeType: 'document',
        data: {},
        content: [
            {
                nodeType: 'paragraph',
                data: {},
                content: [
                    {
                        nodeType: 'text',
                        value: 'Hello world!',
                        marks: [],
                        data: {}
                    },
                ],
            },
        ],
    }
    console.log(content);
    return (
        <div>
            <Head>
                <title>{title} | Imran's Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <div className="sm:mx-20 lg:mx-32 xl:mx-96">
                <div className="flex flex-col items-center">
                    <Image src={'https:' + featuredImage.fields.file.url}
                        width={featuredImage.fields.file.details.image.width}
                        height={featuredImage.fields.file.details.image.height}

                    />
                </div>


                <div className="my-12">
                    <p className="text-5xl font-serif my-4">{title}</p>
                    <p className="text-xl  text-gray-500">{'Reading Time : ' + readingTime + ' minutes'}</p>

                    <div className="flex">
                        {tags.map(tag => (
                            <div key={tag} className="bg-blue-400 rounded p-2 m-2">
                                <p className="text-white">{tag}</p>
                            </div>
                        ))}
                    </div>


                </div>
                <article className="unprose prose-xl">
                    {documentToReactComponents(content)}
                </article>

            </div>

        </div>

    )
}


export async function getStaticProps({ params }) {
    const { items } = await client.getEntries({
        content_type: 'blog',
        'fields.slug': params.slug

    })
    console.log(items[0]);
    return {
        props: {
            blog: items[0]
        }
    }
}

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: 'blog',
        // 'fields.slug': params.slug
    })
    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug }
        }
    })

    return {
        paths,
        fallback: false
    }
}
