import Head from "@/components/Head";
import Main from "@/components/Main";
import Link from "@/components/Link";
import { useRouter } from "next/router";

const NotFound = () => {
  const { asPath } = useRouter();
  return (
    <Main className="text-center">
      <Head
        title="Whoops... 404 Not Found😭"
        description="Page that you looking for is not found :("
      />
      <h1 className="mt-6 text-8xl">4😭4</h1>
      <p className="mt-4">
        The page <code>{asPath}</code> does not exist.
      </p>

      <Link href="/" className="underline">
        Back to home.
      </Link>
    </Main>
  );
};

export default NotFound;
