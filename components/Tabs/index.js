"use client";

import { Tabs } from '@mantine/core';
import { useRouter } from 'next/navigation';

const tabData = [
    { href: "LAWS & LAWS & TAXES", label: "LAWS & TAXES", },
    { href: "CONSTRUCTION", label: "CONSTRUCTION" },
    { href: "LIFESTYLE", label: "LIFESTYLE" },
    { href: "HOME DECOR", label: "HOME DECOR", },
    { href: "TOURISM", label: "TOURISM" },
    { href: "AREA GUIDES", label: "AREA GUIDES", },
    { href: "ZAMEEN PRODUCT UPDATES", label: "ZAMEEN PRODUCT UPDATES", },
];

export default function DynamicTabs() {
    const router = useRouter()
    return (
        <Tabs defaultValue={tabData[0].href} className='backdrop-blur-sm'>
            <Tabs.List>
                {tabData.map((tab) => (
                    <Tabs.Tab key={tab.href} onClick={() => router.push("/")} value={tab.href} m={"auto"}>
                        {tab.label}
                    </Tabs.Tab>
                ))}
            </Tabs.List>
        </Tabs>
    );
}
