import { Box, Flex, Collapse, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import SubNavbarItem from "./SubNavbarItem";
import { FaChevronRight } from "react-icons/fa";

import { motion } from "framer-motion";
const NavbarItem = ({ data }: { data: any }) => {
  //   const [isOpen, setIsOpen] = useState(false);
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
      <Flex
        paddingX={5}
        paddingY={2}
        // margin={1}
        // borderRadius={20}
        cursor={"pointer"}
        alignItems={"center"}
        backgroundColor={isOpen ? "secondary" : "transparent"}
        marginBottom={2}
        columnGap={2}
        onClick={onToggle}
      >
        <motion.div animate={{ rotateZ: isOpen ? 90 : 0 }}>
          <FaChevronRight />
        </motion.div>
        {data.text}
      </Flex>
      {data.children && (
        <Collapse in={isOpen}>
          {data.children.map((child: any, i: number) => (
            <SubNavbarItem data={child} key={i} />
          ))}
        </Collapse>
      )}
    </Box>
  );
};

export default NavbarItem;
