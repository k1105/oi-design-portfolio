// pages/works/[slug].tsx
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { client } from "@/libs/client";
import Layout from "../layout";
import Image from "next/image";
import { Open_Sans } from "next/font/google";
import { Zen_Kaku_Gothic_New } from "next/font/google";

const EnTitle = Open_Sans({ weight: "700", subsets: ["latin"] });
const JaTitle = Zen_Kaku_Gothic_New({ weight: "700", subsets: ["latin-ext"] });

interface WorkPageProps {
  work: Work;
}

const WorkPage: NextPage<WorkPageProps> = ({ work }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout pageTitle={work.title}>
      <div>
        {work.images && work.images.length > 0 && (
          <div>
            {work.images.map((image, index) => (
              <div
                key={index}
                style={{
                  width: "100%",
                  height: "auto",
                  position: "relative",
                  aspectRatio: `${image.width} / ${image.height}`,
                  marginBottom: "10px",
                }}
              >
                <Image
                  src={image.url}
                  alt={work.title}
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        )}
        <div>
          <h1 className={`${JaTitle.className} ${EnTitle.className} headline`}>
            {work.title}
          </h1>
          <div className={`${EnTitle.className} info`}>
            <p>{work.year}</p>
            {work.category && (
              <p>
                {(() => {
                  let categories = "";
                  for (const w of work.category) {
                    categories.length == 0
                      ? (categories += w)
                      : (categories += ` / ${w}`);
                  }
                  return categories;
                })()}
              </p>
            )}
          </div>

          <p className="description">{work.description}</p>
        </div>
      </div>
      <style jsx>{`
        .headline {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .info {
          color: gray;
          margin-bottom: 2rem;
          display: flex;
          gap: 30px;
        }

        .description {
          margin-bottom: 2rem;
          width: 70%;
          line-height: 1.5rem;
        }

        @media screen and (max-width: 600px) {
          .headline {
            font-size: 1.2rem;
          }
          .info {
            font-size: 0.8rem;
          }

          .description {
            width: 100%;
            font-size: 0.8rem;
            line-height: 1.2rem;
          }
        }
      `}</style>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "works" });

  const paths = data.contents.map((work: Work) => ({
    params: { slug: work.slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string };
  const data = await client.get({
    endpoint: "works",
    queries: { filters: `slug[equals]${slug}` },
  });

  const work = data.contents[0];

  if (!work) {
    return { notFound: true };
  }

  return { props: { work }, revalidate: 10 };
};

export default WorkPage;
