"use client"

import React, { useState } from "react";
import SectionHeader from "components/Common/SectionHeader";
import { Input, Textarea, Select } from "@chakra-ui/react";
import { Button } from "@mantine/core";

export default function App({ handleSave }) {
    const [formData, setFormData] = useState({
        title: "",
        subtitle: "",
        imageUrl: "",
        about: "",
        category: "Other", // Default category
    });

    const handleChange = (e, field) => {
        setFormData({
            ...formData,
            [field]: e.target.value,
        });
    };

    const handleClick = () => {
        handleSave(formData)
    };

    const categoryOptions = ["PROJECTS", "LAWS & TAXES", "CONSTRUCTION", "LIFESTYLE", "HOME DECOR", "TOURISM", "AREA GUIDES", "ZAMEEN PRODUCT UPDATES", "TEAM"];

    return (
        <section className="w-full overflow-hidden backdrop-blur-sm">
            <SectionHeader
                headerInfo={{
                    title: "Post Form",
                    subtitle: "Write New Post",
                    description:
                        "We offer a comprehensive range of architectural and construction services to bring your ideas to life.",
                }}
            />
            <div className="flex flex-col my-10 rounded-md  p-10 gap-4">
                <Select
                    placeholder="Select Category"
                    className="bg-slate-300 rounded-md"
                    value={formData.category}
                    onChange={(e) => handleChange(e, "category")}
                >
                    {categoryOptions.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </Select>
                <Input
                    placeholder="Title"
                    className=" shadow-md bg-slate-300 rounded-md"
                    value={formData.title}
                    onChange={(e) => handleChange(e, "title")}
                />
                <Input
                    placeholder="Subtitle"
                    className=" shadow-md bg-slate-300 rounded-md"
                    value={formData.subtitle}
                    onChange={(e) => handleChange(e, "subtitle")}
                />
                <Input
                    placeholder="Image Url"
                    className=" shadow-md bg-slate-300 rounded-md"
                    value={formData.imageUrl}
                    onChange={(e) => handleChange(e, "imageUrl")}
                />
                <Textarea
                    placeholder="About"
                    className=" shadow-md bg-slate-300 rounded-md"
                    value={formData.about}
                    onChange={(e) => handleChange(e, "about")}
                />
                <Button className=" shadow-md py-6" bg={"#000"} onClick={handleClick}>
                    Save
                </Button>
            </div>
        </section>
    );
}
