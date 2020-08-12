import Link from "next/link";
import { useState } from "react";

export default () => {
  const [languages] = useState([
    {
      code: "en",
      name: "English",
    },
    {
      code: "es",
      name: "Spanish",
    },
    {
      code: "fr",
      name: "French",
    },
  ]);

  return (
    <ul>
      {languages.map((language) => {
        return (
          <li key={language.code}>
            <Link as={`/${language.code}/`} href={`/[lang]`}>
              <a>{language.name}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
