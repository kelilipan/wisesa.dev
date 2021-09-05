import Main from "@/components/Main";
import Link from "@/components/Link";
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
        <Link href="/">
          <FaHome className="inline" /> Home
        </Link>
      </div>
    </Main>
  );
};

export default offline;
