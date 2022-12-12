import { Box, Flex, Heading, Spinner, Text, Button } from "@chakra-ui/react";

function Step4Dono({ setCurrentStepIndex }) {
  return (
    <Box
      position={"absolute"}
      zIndex="50"
      bg="white"
      width="100%"
      height="150vh"
      mt="-4rem"
      overflow="hidden"
    >
      <Flex justify={"center"} flexDir="column" alignItems="center">
        <Heading as="h1" size="heading3" mt="10rem">
          Is not integrated yet
        </Heading>
        <Text fontSize="sm" my="2rem" textAlign="center">
          Redirection to payment integration
        </Text>
        <Spinner color="brand.blue" />
        <Button
          onClick={() => setCurrentStepIndex(4)}
          mt="2rem"
          variant="redBtn"
          mb="1rem"
        >
          Gennemfør betaling
        </Button>
      </Flex>
    </Box>
  );
}
export default Step4Dono;
