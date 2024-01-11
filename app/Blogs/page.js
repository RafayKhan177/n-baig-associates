"use client";
import BlogTabs from "components/BlogTabs";
import { useState } from "react";

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState("LAWS & TAXES");

  const selectCategory = (cat) => {
    setSelectedCategory(cat);
  };

  return (
    <section className="w-screen flex flex-col justify-center">
      <BlogTabs currCat={selectedCategory} selectCategory={selectCategory} />
    </section>
  );
}
