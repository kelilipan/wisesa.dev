import {
  GridItem,
  Grid,
  Heading,
  Tooltip,
  Icon,
  HStack,
  Box,
  Text,
  Divider,
} from "@chakra-ui/react";
import {
  SiAdobephotoshop,
  SiAndroid,
  SiBootstrap,
  SiCentos,
  SiCodeigniter,
  SiCplusplus,
  SiDocker,
  SiEslint,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGooglecloud,
  SiGraphql,
  SiHeroku,
  SiJavascript,
  SiJupyter,
  SiLaravel,
  SiManjaro,
  SiMysql,
  SiNetlify,
  SiNextDotJs,
  SiNginx,
  SiNodeDotJs,
  SiNotion,
  SiPhp,
  SiPrettier,
  SiPython,
  SiReact,
  SiStyledComponents,
  SiTailwindcss,
  SiTensorflow,
  SiTrello,
  SiTypescript,
  SiUbuntu,
  SiVisualstudiocode,
  SiWebpack,
  SiWindows,
  SiYarn,
  SiZeit,
} from "react-icons/si";
import { IoLogoPwa } from "react-icons/io5";
const Knowledgebase = () => {
  const data = [
    {
      title: "Languages",
      items: [
        { name: "C++", icon: SiCplusplus },
        { name: "PHP", icon: SiPhp },
        { name: "Python", icon: SiPython },
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript (Learning)", icon: SiTypescript },
        { name: "GraphQL (Learning)", icon: SiGraphql },
        { name: "SQL (Relational Database)", icon: SiMysql },
      ],
    },
    {
      title: "Frontend",
      items: [
        { name: "Bootstrap", icon: SiBootstrap },
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextDotJs },
        {
          name: "Styled Component, Emotion css, Styled system, & Chakra-UI",
          icon: SiStyledComponents,
        },
        {
          name: "TailwindCSS",
          icon: SiTailwindcss,
        },
        {
          name: "PWA (Learning)",
          icon: IoLogoPwa,
        },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "CodeIgniter", icon: SiCodeigniter },
        { name: "Firebase", icon: SiFirebase },
        { name: "Laravel", icon: SiLaravel },
        { name: "MySQL", icon: SiMysql },
        {
          name: "Node.js",
          icon: SiNodeDotJs,
        },
      ],
    },
    {
      title: "Infrastructure",
      items: [
        { name: "Google Cloud Platform", icon: SiGooglecloud },
        { name: "Netlify", icon: SiNetlify },
        { name: "Vercel", icon: SiZeit },
        { name: "Heroku", icon: SiHeroku },
        { name: "Nginx", icon: SiNginx },
        {
          name: "Docker",
          icon: SiDocker,
        },
        {
          name: "Github Actions",
          icon: SiGithubactions,
        },
      ],
    },
    {
      title: "Programming tools",
      items: [
        { name: "Git", icon: SiGit },
        { name: "Visual Studio Code", icon: SiVisualstudiocode },
        { name: "Prettier", icon: SiPrettier },
        { name: "ESLint", icon: SiEslint },
        { name: "Yarn", icon: SiYarn },
        { name: "Webpack (Learning)", icon: SiWebpack },
      ],
    },
    {
      title: "Operating system",
      items: [
        { name: "Windows", icon: SiWindows },
        { name: "Android", icon: SiAndroid },
        { name: "Manjaro", icon: SiManjaro },
        { name: "Ubuntu", icon: SiUbuntu },
        { name: "Centos", icon: SiCentos },
      ],
    },
    {
      title: "Other services/Software",
      items: [
        { name: "Adobe Photoshop", icon: SiAdobephotoshop },
        { name: "Github", icon: SiGithub },
        { name: "Jupyter Notebook & Google colaboratory", icon: SiJupyter },
        { name: "Tensorflow (Learning)", icon: SiTensorflow },
        { name: "Figma", icon: SiFigma },
        { name: "Notion", icon: SiNotion },
        { name: "Trello", icon: SiTrello },
      ],
    },
  ];
  return (
    <Box mt="3">
      <Divider mt="4" w="50%" mx="auto" />
      <Heading as="h4" fontSize="3xl">
        Knowledgebase
      </Heading>
      <Text>
        Several tools that I used (and currently learning how to use it)
      </Text>
      <Text fontSize="sm" fontStyle="italic">
        Pro tip: hover to see what it means.
      </Text>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gap={4}
        rowGap={6}
        mt="2"
      >
        {data.map(({ title, items }, key) => (
          <GridItem key={key}>
            <Heading as="h5" fontSize="xl">
              {title}
            </Heading>
            <HStack mt="2" spacing={3} wrap="wrap">
              {items.map((item, idx) => (
                <Tooltip
                  placement="top"
                  hasArrow
                  key={idx}
                  label={item.name}
                  aria-label={item.name}
                >
                  <span>
                    <Icon as={item.icon} fontSize="4xl" />
                  </span>
                </Tooltip>
              ))}
            </HStack>
          </GridItem>
        ))}
      </Grid>
      <Divider mt="4" mx="auto" width="50%" />
    </Box>
  );
};

export default Knowledgebase;
