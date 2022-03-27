interface MainProps {
  className?: string;
}
import cx from "clsx";
const Main: React.FC<MainProps> = ({ children, className, ...props }) => {
  return (
    <div
      id="main-content"
      className={cx(
        "flex flex-col flex-1 h-full w-full max-w-5xl mx-auto pt-6 px-2 md:pt-11 md:px-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Main;
