import { Icon, IconProps } from "@chakra-ui/react";
const id = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 60 40" {...props}>
      <path fill="#fff" d="M0 0H900V600H0z" />
      <path fill="red" d="M0 0H900V300H0z" />
    </Icon>
  );
};

export default id;
