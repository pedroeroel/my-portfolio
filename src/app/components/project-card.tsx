import Image from 'next/image';

export default function ProjectCard(
    title: string,
    description: string,
    imageUrl: string,
    projectUrl: string,
) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <Image
                src={imageUrl}
                alt={title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-700 mb-4">{description}</p>
            <a
                href={projectUrl}
                target="_blank"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
            >
                View Project
            </a>
        </div>
    );
}