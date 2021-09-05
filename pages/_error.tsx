import Main from "@/components/Main";
import { RouteLink } from "@/components/RouteLink";
import { FaHome } from "react-icons/fa";
import Image from "next/image";

const offline = () => {
  return (
    <Main>
      <div className="text-center">
        <Image
          width={280}
          height={216}
          src="/dino.gif"
          className="mx-auto"
          alt="offline dino"
        />
        <p className="mt-4">Uh... something happens :((</p>
        <RouteLink href="/">
          <FaHome className="inline" /> Home
        </RouteLink>
      </div>
    </Main>
  );
};

export default offline;
