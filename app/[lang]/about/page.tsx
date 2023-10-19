import { Metadata } from "next";
import { useTranslation } from "react-i18next";

export const metadata: Metadata = {
  title: "About Us | WYSAX",
  description:
    "WYSAX is a school management software that offers end-to-end solutions for online admissions, Automatic timetables, library management, transportation management, reports, and more. Explore the features now!",
};

const page = () => {
  // const { t } = useTranslation();

  return (
    <>
      <div>This is about page</div>
      {/* <p>{t("Story of WYSAX & Team")}</p> */}
    </>
  );
};

export default page;
