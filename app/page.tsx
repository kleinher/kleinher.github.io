import { BlogPosts } from 'app/components/posts'
import Image from 'next/image';
import myImage from './cara.jpg';
export default function Page() {
  return (
    <section>
      <div className="flex items-center mb-8">
        {/* Imagen redonda */}
        <Image
          src={myImage} // Puedes usar directamente el objeto importado
          alt="Hernan Kleinubing"
          width={96} // Ajusta según el tamaño deseado
          height={96}
          className="rounded-full mr-4" // Aplica clases para hacerlo redondo
        />
        <h1 className="text-2xl font-semibold tracking-tighter">
          Hernan Kleinubing
        </h1>
      </div>
      <p className="mb-4">
        {`Backend Software Engineer.Currently based in Spain`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
