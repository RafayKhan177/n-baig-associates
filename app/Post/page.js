"use client";

import PostForm from "components/PostForm";
import { postDoc } from "api/functions/post";

export default function page() {
  const handleSave = async (data) => {
    const res = await postDoc(data, "blogs");
    if (res === true) {
      alert("Posted");
    }
  };

  return (
    <section>
      <PostForm handleSave={handleSave} />
    </section>
  );
}
