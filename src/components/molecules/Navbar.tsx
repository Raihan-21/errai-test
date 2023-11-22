import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import NavbarItem from "./NavbarItem";
import styles from "@/styles/Home.module.css";

const Navbar = () => {
  const [menus, setMenus] = useState([
    {
      text: "Politician",
      value: "politican",
      children: [
        {
          text: "Indonesian",
          value: "indonesian",
          children: [
            {
              text: "Jokowi",
              value: "jokowi",
            },
            {
              text: "Prabowo",
              value: "prabowo",
            },
            {
              text: "Gibran",
              value: "gibran",
            },
            {
              text: "Ganjar",
              value: "Ganjar",
            },
            {
              text: "Anies",
              value: "Anies",
            },
          ],
        },
        {
          text: "International",
          value: "international",
          children: [
            {
              text: "Joe Biden",
              value: "joe biden",
            },
            {
              text: "Donald Trump",
              value: "donald trump",
            },
            {
              text: "Barrack Obama",
              value: "barrack obama",
            },
            {
              text: "Kamala Harris",
              value: "kamala harris",
            },
            {
              text: "Joe Biden",
              value: "joe biden",
            },
          ],
        },
      ],
    },
    {
      text: "Artist",
      value: "artist",
      children: [
        {
          text: "Indonesian",
          value: "indonesian",
          children: [
            {
              text: "Tompi",
              value: "tompi",
            },
            {
              text: "Armand Maulana",
              value: "armand maulana",
            },
            {
              text: "Once",
              value: "once",
            },
            {
              text: "Reza Rahardian",
              value: "reza rahardian",
            },
            {
              text: "Dian Sastro",
              value: "dian sastro",
            },
          ],
        },
        {
          text: "International",
          value: "international",
          children: [
            {
              text: "Adele",
              value: "adele",
            },
            {
              text: "Michael Jackson",
              value: "michael jackson",
            },
            {
              text: "Bruno Mars",
              value: "bruno mars",
            },
            {
              text: "Adele",
              value: "adele",
            },
            {
              text: "Adele",
              value: "adele",
            },
          ],
        },
      ],
    },
  ]);

  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  return (
    <Box
      paddingY={10}
      boxShadow={"1px 0px 8px 1px gray"}
      minWidth={"230px"}
      backgroundColor={"primary"}
      color={"white"}
      maxHeight={"100vh"}
      overflowY={"auto"}
      className={styles.navbarContainer}
    >
      <Box>
        {menus && menus.map((menu, i) => <NavbarItem data={menu} key={i} />)}
      </Box>
    </Box>
  );
};

export default Navbar;
