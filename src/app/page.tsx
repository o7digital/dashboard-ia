"use client";

import dynamic from "next/dynamic";

const PremiumMockup = dynamic(() => import("@/components/PremiumMockup"), {
  ssr: false,
});

export default function HomePage() {
  return <PremiumMockup />;
}
