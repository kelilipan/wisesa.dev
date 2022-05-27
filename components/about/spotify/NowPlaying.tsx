import Link, { CustomLinkProps } from "@/components/Link";
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

const LinkWrapper: React.FC<CustomLinkProps> = ({ children, href }) => {
  return (
    <Link
      href={href}
      isExternal={href !== "#"}
      style={{ textDecoration: "none" }}
    >
      {children}
    </Link>
  );
};

const NowPlaying = ({
  albumImageUrl,
  artist,
  isPlaying,
  songUrl,
  title,
}: NowPlayingProps) => {
  return (
    <LinkWrapper href={isPlaying ? songUrl || "#" : "#"}>
      <div className="group rounded-md border-gray-200 dark:border-light border-2 border-dashed transition duration-200 ease-in-out hover:bg-gray-100 dark:hover:bg-light flex p-2 gap-2 relative">
        <Image
          className="rounded-md"
          src={(isPlaying && albumImageUrl) || NO_COVER}
          alt={isPlaying ? title : "Not listening to anything"}
          height={80}
          width={80}
        />
        <div className="flex flex-col h-[80px] justify-around z-10">
          {!isPlaying ? (
            "Not listening to anything"
          ) : (
            <>
              <strong className="line-clamp-1">{title}</strong>
              <p className="m-0 no-underline line-clamp-1">{artist}</p>
            </>
          )}
        </div>
        {isPlaying && (
          <div className="ml-auto lds-ripple right-1 top-2">
            <div />
            <div />
          </div>
        )}
      </div>
    </LinkWrapper>
  );
};

export default NowPlaying;
