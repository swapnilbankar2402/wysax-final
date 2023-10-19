"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import LanguageChanger from "./LanguageChanger";

const Clientcomponent = ({ locale }: { locale: string }) => {
  const { t } = useTranslation();

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <h4>{t("WYSAX Timetable: Effortless Timetable Management")}</h4>
        <LanguageChanger />
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link href={"/" + locale + "/about"}>About</Link>
        <Link href={"/" + locale + "/pricing"}>Pricing</Link>
        <Link href={"/" + locale + "/faqs"}>FAQs</Link>
      </div>
    </>
  );
};

export default Clientcomponent;
