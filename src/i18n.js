import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// JSON-файлы переводов
import en from '/public/locales/en/translation.json'; // Путь к вашим переводам
import uz from '/public/locales/uz/translation.json'; // Если используется русский язык
import ru from '/public/locales/ru/translation.json'; // Если используется русский язык


i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    uz: { translation: uz },
    ru: { translation: ru }, // Если используется русский язык
  },
  lng: 'en', // Установите язык по умолчанию
  fallbackLng: 'en', // Язык для резервного варианта
  interpolation: { escapeValue: false }, // Без экранирования
});

export default i18n;
