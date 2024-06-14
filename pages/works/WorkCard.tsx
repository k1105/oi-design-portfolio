import Image from "next/image";

type Props = {
  title: string;
  image?: string;
  slug?: string | null;
};

export default function WorkCard({
  title,
  image = "/img/placeholder-600x400.png",
  slug,
}: Props) {
  return (
    <>
      <a
        href={`/works/${slug}`}
        style={{ textDecoration: "none" }}
        className={!slug ? "unclickable" : ""}
      >
        <div className="main">
          <div className="image-wrapper">
            <Image
              src={image}
              fill
              priority
              style={{
                objectFit: "cover",
                borderRadius: "15px",
              }}
              alt="thumbnail"
            />
          </div>

          <p className="title">{title}</p>
        </div>
      </a>

      <style jsx>{`
        .main {
          margin-bottom: 3rem;
        }

        .unclickable {
          pointer-events: none;
        }

        .image-wrapper {
          width: 21vw;
          height: 14vw;
          position: relative;
          margin-bottom: 1rem;
        }

        .title {
          color: black;
        }

        @media screen and (max-width: 600px) {
          .image-wrapper {
            width: 90vw;
            height: 60vw;
          }
        }
      `}</style>
    </>
  );
}
