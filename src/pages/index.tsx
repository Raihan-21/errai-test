import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/molecules/Navbar";
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { setUrl } from "@/store/data";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const results = useSelector((state: any) => state.results.items);
  const selectedUrl = useSelector((state: any) => state.results.selectedUrl);
  const isSelected = useSelector((state: any) => state.results.isSelected);
  const dispatch = useDispatch();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex minHeight={"100vh"}>
        <Navbar />
        <Flex flexDirection={"column"} padding={10} width={"100%"}>
          <Text fontWeight={"bolder"} fontSize={"x-large"} marginBottom={10}>
            Public Figure Search Engine
          </Text>
          <VStack
            marginBottom={5}
            spacing={3}
            alignItems={"start"}
            maxHeight={"200px"}
            overflowY={"scroll"}
          >
            {results.length > 0 &&
              results.map((result: any, i: any) => (
                <Box
                  cursor={"pointer"}
                  onClick={() => dispatch(setUrl(result.link))}
                >
                  <Text color={"blueviolet"} fontWeight={"bold"}>
                    {result.title}
                  </Text>
                  <Text>{result.snippet}</Text>
                </Box>
              ))}
          </VStack>
          {results.length > 0 && isSelected && (
            <div className={styles.iframeContainer}>
              <Text
                borderRadius={10}
                backgroundColor={"white"}
                width={"min-content"}
                paddingX={5}
                // color={"white"}
                marginY={1}
                marginLeft={1}
              >
                Browser
              </Text>
              {/* {isSelected && ( */}
              <iframe
                src={selectedUrl}
                className={styles.iframe}
                height={"100%"}
              ></iframe>
            </div>
          )}
        </Flex>
      </Flex>
    </>
  );
}
