"use client";
import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={14} py={9}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Flex alignItems={"center"}>
            <Heading pl={{ base: "24px", md: "40px", lg: "56px" }} size="2xl">
              TodoList Application
            </Heading>
          </Flex>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button
                onClick={toggleColorMode}
                ml={{ base: "14px", md: "40px", lg: "56px" }}
              >
                {colorMode === "light" ? "Dark" : "Light"} &nbsp;
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      "https://api.dicebear.com/5.x/bottts-neutral/svg?eyes=robocop"
                    }
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={
                        "https://api.dicebear.com/5.x/bottts-neutral/svg?eyes=robocop"
                      }
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Abdullah Azhar Khan</p>
                  </Center>
                  <br />
                  <MenuDivider />
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
