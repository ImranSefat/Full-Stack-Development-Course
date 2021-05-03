import Image from 'next/image'

export default function BlogThumbnail({ blog }) {
    const { title, slug, readingTime, thumbnail } = blog.fields
    return (
        <div className="m-12 bg-blue-300 p-3 rounded-md shadow-xl cursor-pointer transition duration-300 transform hover:scale-110 group">
            <Image src={'https:' + thumbnail.fields.file.url}
                width={thumbnail.fields.file.details.image.width}
                height={thumbnail.fields.file.details.image.height}
            />
            <div className="text-3xl m-3">
                {title}
            </div>
            <div className="text-xl m-3 text-gray-500 group-hover:animate-bounce">
                {readingTime + " minutes reading"}
            </div>

        </div>
    )
}
