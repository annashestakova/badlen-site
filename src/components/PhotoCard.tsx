import Image from "next/image";

type PhotoCardProps = {
  image: string;
  title: string;
  text: string;
};

export function PhotoCard({ image, title, text }: PhotoCardProps) {
  return (
    <article className="photo-card">
      <Image
        src={image}
        alt={title}
        width={960}
        height={1200}
        sizes="(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 33vw"
      />
      <div>
        <p>BADLEN</p>
        <h3>{title}</h3>
        <span>{text}</span>
      </div>
    </article>
  );
}
