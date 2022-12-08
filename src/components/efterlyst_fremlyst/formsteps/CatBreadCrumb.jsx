import { Breadcrumb, BreadcrumbItem, Button } from "@chakra-ui/react";

function CatBreadCrumb({ step, setCurrentStepIndex }) {
  return (
    <Breadcrumb display={"grid"} justifyContent="center">
      <BreadcrumbItem>
        <Button
          disabled={step === "step3" ? true : false}
          variant={"breadcrumb"}
          onClick={() => setCurrentStepIndex(0)}
        >
          1. Kattens info
        </Button>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <Button
          disabled={step === "step2" ? false : true}
          variant={"breadcrumb"}
          onClick={() => setCurrentStepIndex(1)}
        >
          2. Din info
        </Button>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <Button
          variant={"breadcrumb"}
          disabled={step === "step3" ? false : true}
        >
          3. Færdig
        </Button>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}

export default CatBreadCrumb;
