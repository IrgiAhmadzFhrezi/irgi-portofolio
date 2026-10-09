import en from './en';
import id from './id';

export type Language = 'en' | 'id';

export const translations = { en, id };
export const language = $state<{ current: Language }>({ current: 'en' });

export function setLanguage(nextLanguage: Language) {
  language.current = nextLanguage;

  if (typeof window !== 'undefined') {
    document.documentElement.lang = nextLanguage;
    localStorage.setItem('language', nextLanguage);
  }
}

export function initializeLanguage() {
  if (typeof window === 'undefined') return;

  const savedLanguage = localStorage.getItem('language');
  const initialLanguage: Language = savedLanguage === 'id' ? 'id' : 'en';

  language.current = initialLanguage;
  document.documentElement.lang = initialLanguage;
}
