import { Stack, Button } from "@chakra-ui/react";

function InternatFilter({ internatFilter, setInternatFilter, internatOpt }) {
  return (
    <Stack direction="row" spacing={4} align="center">
      <Button
        textDecor={internatFilter === "" ? "underline" : "none"}
        variant={"clean"}
        onClick={() => setInternatFilter("")}
      >
        Alle
      </Button>
      {internatOpt.map((btn) => {
        return (
          <Button
            key={btn.value}
            textDecor={internatFilter === btn.value ? "underline" : "none"}
            variant={"clean"}
            onClick={() => setInternatFilter(btn.value)}
          >
            {btn.value}
          </Button>
        );
      })}
    </Stack>
  );
}

export default InternatFilter;
