import translations from './translations.json';

export function translate(language, phrase){
    if(translations[language][phrase]){
        return translations[language][phrase];
    } else {
        return phrase;
    }
}
export { translate as default };