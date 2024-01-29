"use client";

import PostForm from "components/Management/PostForm";
import { postDoc } from "api/functions/post";
import { useToast } from "@chakra-ui/react";
import SectionHeader from "components/Common/SectionHeader";
import { Container } from "@mantine/core";

export default function Page() {
  const toast = useToast();
  const handleSave = async (data) => {
    try {
      const res = await postDoc(data, "blogs");
      if (res === true) {
        toast({
          title: "Post Posted.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Something Went Wrong.",
        description: `Error: ${error}`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Container size={"lg"}>
      <SectionHeader
        headerInfo={{
          title: "Post Form",
          subtitle: "Write New Post",
          description:
            "We offer a comprehensive range of architectural and construction services to bring your ideas to life.",
        }}
      />
      <PostForm handleSave={handleSave} />
    </Container>
  );
}
