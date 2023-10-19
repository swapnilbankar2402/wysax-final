import Clientcomponent from "@/components/Clientcomponent";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

export default async function Home({ params }: { params: { lang: string } }) {
  const { t } = await initTranslations(params.lang);
  // const { t } = await initTranslations(params.lang, ["home"]);

  return (
    <TranslationsProvider locale={params.lang}>
      <main>
        {/* <h1>{t("header")}</h1> */}
        <h1>{t("Pricing")}</h1>
        <p>{params.lang}</p>
        <Clientcomponent locale={params.lang} />
      </main>
    </TranslationsProvider>
  );
}
