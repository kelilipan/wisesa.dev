const Main: React.FC = ({ children, ...props }) => {
  return (
    <div
      id="main-content"
      className="flex flex-1 h-full w-full max-w-5xl mx-auto pt-6 px-2 md:pt-11 md:px-0"
      {...props}
    >
      {children}
    </div>
  );
};

export default Main;
