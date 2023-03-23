/** @format */

import i18n from './i18n';
import en from './translations/en';
import it from './translations/it';

/**
 * we need always include "*-US" for some valid language codes because when you change the system language,
 * the language code is the suffixed with "-US". i.e. if a device is set to English ("en"),
 * if you change to another language and then return to English language code is now "en-US".
 */
const EN_US_LOCALE = 'en-US';
// const IT_LOCALE = 'it'; // TEMP, TODO: uncomment it when you need Italian
i18n.translations = { en, [EN_US_LOCALE]: en, it };
i18n.locale = EN_US_LOCALE;
i18n.fallbacks = true;

export * from './translate';
