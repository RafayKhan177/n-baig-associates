"use client";

import SAM from "components/SAM";
import Post from "components/Post";
import Blog from "components/Blog";
import PropertyListings from "components/PropertyListings";
import { getDocById } from "api/functions/get";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const id = pathname.split("/").pop();
      const fetchedBlogData = await getDocById(id, "blogs"); // Fixed the argument order
      setBlogData(fetchedBlogData);
    };

    fetchData();
  }, [pathname]); // Added dependency to useEffect to avoid unnecessary fetches

  return (
    <main>
      <Post info={blogData} />
      <SAM />
      <PropertyListings />
      <Blog />
    </main>
  );
}
