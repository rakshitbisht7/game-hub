import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInputs from "./SearchInputs";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to='/'>
      <Image src={logo} boxSize="60px" objectFit='cover' />
      </Link>
      <SearchInputs />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
