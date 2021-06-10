import { NextSeo, NextSeoProps } from "next-seo";
import { useRouter } from "next/router";
import config from "@/site.config";

interface HeadProps extends NextSeoProps {
  images?: any;
  image?: string;
}
const Head = ({ title, description, images, image, ...props }: HeadProps) => {
  const router = useRouter();
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        site_name: "Ketringan",
        title: `${title} · Wisesa.dev`,
        description,
        url: config.baseUrl + (router.asPath || ""),
        images: images
          ? images
          : image !== undefined
          ? {
              url: `${config.baseUrl}/${image}`,
              width: 1200,
              height: 627,
              alt: "Wisesa.dev",
            }
          : undefined,
      }}
      {...props}
    />
  );
};

export default Head;
