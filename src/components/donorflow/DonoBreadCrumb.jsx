import { Breadcrumb, BreadcrumbItem, Button } from "@chakra-ui/react";

function DonoBreadCrumb({ currenStepIndex, setCurrentStepIndex, step2Info }) {
  return (
    <Breadcrumb
      sx={{ ol: { display: "flex", flexWrap: "wrap" } }}
      display="grid"
      justifyContent="center"
      mt="4rem"
      mb="2rem"
      mx="1rem"
    >
      <BreadcrumbItem>
        <Button
          disabled={currenStepIndex === 4 ? true : false}
          variant={"breadcrumb"}
          onClick={() => setCurrentStepIndex(1)}
        >
          1. Oplysninger
        </Button>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Button
          disabled={currenStepIndex === 4 || step2Info === "" ? true : false}
          variant={"breadcrumb"}
          onClick={() => setCurrentStepIndex(2)}
        >
          2. Oversigt
        </Button>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Button disabled variant={"breadcrumb"}>
          3. Betaling
        </Button>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Button
          disabled={currenStepIndex === 4 ? false : true}
          variant={"breadcrumb"}
        >
          4. Færdig
        </Button>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}

export default DonoBreadCrumb;
