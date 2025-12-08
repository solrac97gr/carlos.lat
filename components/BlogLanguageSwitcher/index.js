import { Container, LanguageButton } from "./index.styles";

export const BlogLanguageSwitcher = ({ slug, currentLang, availableLanguages }) => {
  if (!availableLanguages || availableLanguages.length <= 1) {
    return null;
  }

  const getLanguageLabel = (lang) => {
    return lang === "en" ? "🇬🇧 English" : "🇪🇸 Español";
  };

  return (
    <Container>
      <p>Read this article in:</p>
      <div className="buttons">
        {availableLanguages.map((lang) => (
          <LanguageButton
            key={lang}
            href={`/blog/${slug}?lang=${lang}`}
            $isActive={lang === currentLang}
          >
            {getLanguageLabel(lang)}
          </LanguageButton>
        ))}
      </div>
    </Container>
  );
};
