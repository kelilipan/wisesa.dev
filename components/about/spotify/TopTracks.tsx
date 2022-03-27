import React from "react";
import Link from "@/components/Link";
import Image from "next/image";

const NO_COVER = "/no-cover.png";

type TopTracksProps = {
  tracks: {
    artist: string;
    cover: string;
    songUrl: string;
    title: string;
  }[];
};

const TopTracks = ({ tracks }: TopTracksProps) => {
  return tracks.length ? (
    <div className="flex flex-col gap-2">
      {tracks.map(({ songUrl, cover, title, artist }, idx) => (
        <Link
          isExternal
          href={songUrl || "#"}
          style={{ textDecoration: "none" }}
        >
          <div className="group rounded-md border-gray-200 dark:border-light border-2 border-dashed transition duration-200 ease-in-out hover:bg-gray-100 dark:hover:bg-light flex p-2 gap-2 items-center">
            <strong>{idx + 1} .</strong>
            <Image
              className="rounded-md"
              src={cover || NO_COVER}
              alt={title}
              height={80}
              width={80}
            />
            <div className="flex flex-col h-[80px] justify-around">
              <strong>{title}</strong>
              <p className="m-0 no-underline">{artist}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  ) : null;
};

export default TopTracks;
