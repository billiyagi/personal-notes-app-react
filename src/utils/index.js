const showFormattedDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('id-ID', options);
};

function getTheme() {
  return localStorage.getItem('theme');
}

function getLocale() {
  return localStorage.getItem('locale');
}

function applyTheme(theme) {
  return localStorage.setItem('theme', theme)
}

function applyLocale(locale) {
  return localStorage.setItem('locale', locale)
}

export { showFormattedDate, applyTheme, applyLocale, getLocale, getTheme };
