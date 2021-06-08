import {
  Button,
  Flex,
  FlexProps,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaCheckCircle, FaTrashAlt } from "react-icons/fa";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

interface ControlProps extends FlexProps {
  clearCanvas: () => void;
  color: string;
  setColor: (color: string) => void;
  strokeWidth: number;
  setWidth: (width: number) => void;
}
const colorList = [
  "rgba(255, 0, 0, 0.6)",
  "rgba(0, 255, 0, 0.6)",
  "rgba(0, 0, 255, 0.6)",
];
const CanvasControl = ({
  clearCanvas,
  color,
  setColor,
  strokeWidth,
  setWidth,
  ...props
}: ControlProps) => {
  const bgColor = useColorModeValue("blackAlpha.50", "whiteAlpha.100");
  return (
    <Flex
      alignItems="center"
      p="2"
      direction="row"
      zIndex="modal"
      pos="fixed"
      bgColor={bgColor}
      bottom={["20%", "unset"]}
      right={1}
      borderRadius="full"
      {...props}
    >
      <Slider
        aria-label="brush size"
        value={strokeWidth}
        orientation="vertical"
        min={2}
        max={12}
        onChange={setWidth}
        minH="120px"
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Stack direction="column">
        {colorList.map((data, key) => (
          <Button
            onClick={() => setColor(data)}
            boxSize="32px"
            size="sm"
            rounded="full"
            key={key}
            bgColor={data}
            aria-label="brush color"
            _hover={undefined}
          >
            {data === color && <FaCheckCircle />}
          </Button>
        ))}
        <Button
          onClick={() => {
            clearCanvas();
          }}
          boxSize="32px"
          size="sm"
          rounded="full"
          aria-label="brush color"
          _hover={undefined}
        >
          <FaTrashAlt />
        </Button>
      </Stack>
    </Flex>
  );
};

export default CanvasControl;
