import Image from 'next/image'
import Link from 'next/link'

export default function BlogThumbnail({ blog }) {
    const { title, slug, readingTime, thumbnail } = blog.fields
    return (
        <div className="m-12  bg-blue-300 p-3 rounded-md shadow-xl transition duration-300 transform hover:scale-110 group">
            <Image src={'https:' + thumbnail.fields.file.url}
                width={thumbnail.fields.file.details.image.width}
                height={thumbnail.fields.file.details.image.height}
            />
            <div className="text-3xl m-3 text-white">
                {title}
            </div>
            <div className="text-xl m-3 text-gray-500 group-hover:animate-bounce">
                {readingTime + " minutes reading"}
            </div>
            <Link href={'/blogs/' + slug} >
                <a>
                    <div className="p-6 bg-gray-800 text-white text-center rounded-lg">
                        Read Blog
                    </div>
                </a>
            </Link>


        </div>
    )
}
