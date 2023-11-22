import { setResults } from "@/store/data";
import { Box, Collapse, Flex, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const SubNavbarItem = ({ data }: { data: any }) => {
  //   const [isOpen, setIsOpen] = useState(false);
  const { isOpen, onToggle } = useDisclosure();

  const dispatch = useDispatch();
  const selectItem = useCallback(async (data: any) => {
    try {
      const res = await axios.get(
        `https://customsearch.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CX_KEY}&q=${data.value}`
      );
      dispatch(setResults(res.data.items));
      console.log(res.data.items);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Box>
      <Flex
        paddingX={10}
        paddingY={2}
        cursor={"pointer"}
        backgroundColor={isOpen ? "secondary" : "transparent"}
        columnGap={2}
        alignItems={"center"}
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
            <Box
              paddingLeft={20}
              paddingRight={5}
              marginBottom={2}
              cursor={"pointer"}
              onClick={() => selectItem(child)}
              key={i}
            >
              {child.text}
            </Box>
          ))}
        </Collapse>
      )}
    </Box>
  );
};

export default SubNavbarItem;
