import { Metadata } from "next";

import { TopCard } from "@/features/top/components/TopCard";

export const metadata: Metadata = {
  title: "Todo",
};

const TopPage = async () => {
  return <TopCard />;
};

export default TopPage;
