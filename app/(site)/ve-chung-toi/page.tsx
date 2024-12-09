import React from "react";
import VeChungToi from "@/components/VeChungToi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Về chúng tôi",
  description: "Chúng tôi là BTX",
};
const VeChungToiPage = () => {
  return (
    <>
      <VeChungToi />
    </>
  );
}

export default VeChungToiPage;
