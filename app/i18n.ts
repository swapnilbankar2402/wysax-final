import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import resourcesToBackend from "i18next-resources-to-backend";
import i18nConfig from "@/i18nConfig";
import HttpApi from "i18next-http-backend";

// export default async function initTranslations(
//   locale: string,
//   namespaces: string[]
// ) {
//   const i18nInstance = createInstance();

//   await i18nInstance
//     .use(initReactI18next)
//     .use(
//       resourcesToBackend(
//         (language: string, namespace: string) =>
//           import(`locales/${language}/${namespace}.json`)
//       )
//     )
//     .init({
//       lng: locale,
//       fallbackLng: i18nConfig.defaultLocale,
//       supportedLngs: i18nConfig.locales,
//       defaultNS: namespaces[0],
//       fallbackNS: namespaces[0],
//       ns: namespaces,
//       preload: typeof window === "undefined" ? i18nConfig.locales : [],
//     });

//   return i18nInstance;
// }

const HOST_API = `https://api.timetable.wysax.com`;

export default async function initTranslations(locale: string) {
  const i18nInstance = createInstance();

  await i18nInstance
    .use(initReactI18next)
    .use(HttpApi)
    .init({
      fallbackLng: i18nConfig.defaultLocale,
      lng: locale,
      // debug: true,
      keySeparator: false,
      interpolation: {
        escapeValue: false,
      },
      backend: {
        // loadPath: `${HOST_API}/wysax-translations?lng=${locale}`,
        loadPath: `${HOST_API}/wysax-translations?lng={{lng}}`,
      },
    });

  return i18nInstance;
}
