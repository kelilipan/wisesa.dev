import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "@/components/Link";
import { FaExternalLinkAlt } from "react-icons/fa";
import ThemeSwitcher from "./ThemeSwitcher";
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
const links = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Blog",
    url: "/blog",
  },
  {
    text: "Projects",
    url: "/projects",
  },
  {
    text: "Snippets",
    url: "/snippet",
  },
  {
    text: "Timeline",
    url: "https://timeline.wisesa.dev",
  },
  {
    text: "About",
    url: "/about",
  },
];

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const closeModal = () => onClose();
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 backdrop-blur" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-dark shadow-xl rounded-xl border-2 border-dashed border-gray-200 dark:border-light">
              <div className="mt-2">
                <div className="flex flex-col w-full">
                  {links.map((data, idx) => (
                    <Link
                      onClick={closeModal}
                      className="w-full text-center font-semibold p-4 hover:bg-gray-100 dark:hover:bg-light"
                      href={data.url}
                      isExternal={data.text === "Timeline"}
                      key={idx}
                    >
                      {data.text}{" "}
                      {data.text === "Timeline" && (
                        <FaExternalLinkAlt className="text-xs inline ml-1 mb-1" />
                      )}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center p-4">
                <ThemeSwitcher />
                <button
                  type="button"
                  className="hover:bg-gray-100 font-semibold dark:hover:bg-light p-4"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
export default MobileMenu;
