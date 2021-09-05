import { FaCheckCircle, FaTrashAlt } from "react-icons/fa";
interface ControlProps {
  clearCanvas: () => void;
  color: string;
  setColor: (color: string) => void;
}
const colorList = [
  "rgba(255, 0, 0, 0.5)",
  "rgba(0, 255, 0, 0.5)",
  "rgba(0, 0, 255, 0.5)",
];
const CanvasControl = ({ clearCanvas, color, setColor }: ControlProps) => {
  return (
    <div className="flex fixed items-center p-2 z-50 top-[10%] md:top-[unset] bg-gray-100 dark:bg-light rounded-full right-1">
      <div className="flex flex-col space-y-2">
        {colorList.map((data, key) => (
          <button
            onClick={() => setColor(data)}
            className="rounded-full w-8 h-8"
            key={key}
            style={{ backgroundColor: data }}
            aria-label="Change brush color"
          >
            {data === color && <FaCheckCircle className="mx-auto" />}
          </button>
        ))}
        <button
          onClick={() => {
            clearCanvas();
          }}
          className="rounded-full w-8 h-8 bg-gray-200 dark:bg-dark"
          aria-label="Clear doodle"
        >
          <FaTrashAlt className="mx-auto" />
        </button>
      </div>
    </div>
  );
};

export default CanvasControl;
