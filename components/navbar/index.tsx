import dynamic from "next/dynamic";
const DesktopNav = dynamic(() => import("./DesktopNav"), { ssr: false });
const MobileNav = dynamic(() => import("./MobileNav"), { ssr: false });

const Navbar = () => {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
};

export default Navbar;
