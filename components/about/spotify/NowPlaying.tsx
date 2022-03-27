import { Fragment } from "react";
import Link from "@/components/Link";
import Image from "next/image";

const NO_COVER = "/no-cover.png";

export type NowPlayingProps = {
  album?: string;
  albumImageUrl?: string;
  artist?: string;
  isPlaying: boolean;
  songUrl?: string;
  title?: string;
};
const NowPlaying = ({
  albumImageUrl,
  artist,
  isPlaying,
  songUrl,
  title,
}: NowPlayingProps) => {
  const Wrapper = isPlaying ? Link : Fragment;
  return (
    <Wrapper
      isExternal
      href={songUrl || "#"}
      style={{ textDecoration: "none" }}
    >
      <div className="group rounded-md border-gray-200 dark:border-light border-2 border-dashed transition duration-200 ease-in-out hover:bg-gray-100 dark:hover:bg-light flex p-2 gap-2">
        <Image
          className="rounded-md"
          src={(isPlaying && albumImageUrl) || NO_COVER}
          alt={isPlaying ? title : "Not listening to anything"}
          height={80}
          width={80}
        />
        <div className="flex flex-col h-[80px] justify-around">
          {!isPlaying ? (
            "Not listening to anything"
          ) : (
            <>
              <strong>{title}</strong>
              <p className="m-0 no-underline">{artist}</p>
            </>
          )}
        </div>
        {isPlaying && (
          <div className="ml-auto lds-ripple">
            <div />
            <div />
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default NowPlaying;
