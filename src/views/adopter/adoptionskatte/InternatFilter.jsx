import { Stack, Button } from "@chakra-ui/react";

function InternatFilter({ internatFilter, setInternatFilter }) {
  return (
    <Stack direction="row" spacing={4} align="center">
      <Button
        textDecor={internatFilter === "" ? "underline" : "none"}
        variant={"carouselBtn"}
        onClick={() => setInternatFilter("")}
      >
        Alle
      </Button>
      <Button
        textDecor={internatFilter === "Aalborg" ? "underline" : "none"}
        variant={"carouselBtn"}
        onClick={() => setInternatFilter("Aalborg")}
      >
        Aalborg
      </Button>
      <Button
        textDecor={internatFilter === "Billund" ? "underline" : "none"}
        variant={"carouselBtn"}
        onClick={() => setInternatFilter("Billund")}
      >
        Billund
      </Button>
      <Button
        textDecor={internatFilter === "Brøndby" ? "underline" : "none"}
        variant={"carouselBtn"}
        onClick={() => setInternatFilter("Brøndby")}
      >
        Brøndby
      </Button>
      <Button
        textDecor={internatFilter === "Slagelse" ? "underline" : "none"}
        variant={"carouselBtn"}
        onClick={() => setInternatFilter("Slagelse")}
      >
        Slagelse
      </Button>
    </Stack>
  );
}

export default InternatFilter;
