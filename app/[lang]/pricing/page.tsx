import { Metadata } from "next";
import { useTranslation } from "react-i18next";

export const metadata: Metadata = {
  title: "Pricing & Plan | WYSAX",
  description:
    "Discover the different pricing plans available on WYSAX. Check the pricing plans for a detailed overview",
};

const page = () => {
  // const { t } = useTranslation();

  return (
    <>
      <div>This is pricing page</div>
      {/* <p>{t("Ready to start with WYSAX")}</p> */}
    </>
  );
};

export default page;
