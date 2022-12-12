import React from "react";
import { Box } from "@chakra-ui/react";
import SArticle from "./SArticle";

export default function SArticleMenu() {
  const menuData = [
    {
      titel: "Giv en donation",
      tekst:
        "Støt med et enkelt beløb til kattene her. Vi sætter stor pris på alle donationer, store som små. Tak for din støtte!",
      url: "/gor-en-forskel/doner",
      knaptekst: "Donér",
    },
    {
      titel: "Støt fast",
      tekst:
        "Støt månedligt med et valgfrit beløb. Vi er taknemmelige for din faste støtte da den er med til at give os et stabilt økonomisk fundament til kattene!",
      url: "/gor-en-forskel/stot-fast",
      knaptekst: "Støt fast",
    },
    {
      titel: "Bliv medlem",
      tekst:
        "Bliv medlem for 240 kroner om året og få rabatter og andre fordele mens du samtidig støtter katttene. Tak for at du bidrager til at vi kan hjælpe kattene!",
      url: "/gor-en-forskel/bliv-medlem",
      knaptekst: "Bliv medlem",
    },
    {
      titel: "Arv",
      tekst:
        "Overvej at skrive kattene i dit testamente. Du kan gratis benytte dig af vores advokat, som kan rådgive dig i hvordan du efterlader et beløb til kattene.",
      url: "/gor-en-forskel/kattene-i-testamente",
      knaptekst: "Læs mere",
    },
    {
      titel: "Bliv plejefamilie",
      tekst:
        "Mange kattemødre og killinger har brug for at komme i en kærlig og tryg plejefamilie før de er klar til at blive adopteret fra et af vores internater.",
      url: "/gor-en-forskel/bliv-plejefamilie",
      knaptekst: "Læs mere",
    },
    {
      titel: "Bliv erhvervssponsor",
      tekst:
        "Kontakt os, hvis din virksomhed har lyst til at støtte os gennem et firmasponsorat, eller du har en god idé til, hvordan vi i fællesskab kan samle ind til kattene.",
      url: "/gor-en-forskel/sponsorer",
      knaptekst: "Læs mere",
    },
  ];

  return (
    <Box
      as="section"
      display={"grid"}
      placeContent="center"
      py="3rem"
      px="1rem"
    >
      <Box
        display={"grid"}
        gridTemplateColumns={{
          base: "1fr",
          md: "1fr 1fr",
          lg: "repeat(3, 1fr)",
        }}
        maxW="container.xl"
        gap="2rem"
      >
        {menuData.map((mp) => (
          <SArticle key={mp.titel} {...mp} />
        ))}
      </Box>
    </Box>
  );
}
