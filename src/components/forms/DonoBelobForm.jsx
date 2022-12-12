import RadioBelobCard from "./formFields/RadioBelobCard";
import { Button, RadioGroup, FormControl } from "@chakra-ui/react";
import { Text, Flex, Box } from "@chakra-ui/react";
import { BsHeart } from "react-icons/bs";
import { Form, Formik, Field } from "formik";
import { InputControl } from "formik-chakra-ui";
import * as Yup from "yup";

function DonoBelobForm({ data, step1Belob, setStep1Belob, onBelobCallback }) {
  const belobmulighederArr = Object.entries(data).map((e) => ({
    id: e[0],
    opt: e[1],
  }));

  let findOptions = belobmulighederArr.map(({ opt, ...rest }) => {
    return opt;
  });

  let findBelob = findOptions.map(({ belob, ...rest }) => {
    return belob;
  });

  let findVaerdi = findOptions.map(({ vaerdi, ...rest }) => {
    return vaerdi;
  });
  const options = findBelob;

  const initialValues = (step1Belob) => {
    return {
      belobRadioGroup: step1Belob?.belobRadioGroup || "",
      andetBelobTal: step1Belob?.andetBelobTal || "",
    };
  };

  const validationSchema = Yup.object({
    belobRadioGroup: Yup.string().required("*Du skal vælge et beløb"),
    andetBelobTal: Yup.number().when("belobRadioGroup", {
      is: (belobRadioGroup) => belobRadioGroup === "Andet beløb*",
      then: Yup.number()
        .required("*Indtast venligst et beløb")
        .typeError("*Indtast venligst et tal"),
    }),
  });

  return (
    <Formik
      initialValues={initialValues(step1Belob)}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
        onBelobCallback(values);
        setStep1Belob(values);
      }}
    >
      {({
        handleSubmit,
        isSubmitting,
        values,
        setFieldValue,
        errors,
        touched,
      }) => (
        <Form onSubmit={handleSubmit} autoComplete={"off"}>
          <Field name={"belobRadioGroup"}>
            {({ field }) => (
              <FormControl
                id={"belobRadioGroup"}
                position="relative"
                zIndex={2}
                bg="brand.white"
              >
                <RadioGroup
                  {...field}
                  value={values}
                  mt={"0.2rem"}
                  borderRadius="0.1rem"
                  border="1px solid"
                  borderColor="brand.borderGrey"
                  display="grid"
                >
                  {options.map((value, optindex) => (
                    <RadioBelobCard
                      key={value}
                      {...field}
                      value={value}
                      isChecked={values.belobRadioGroup === value}
                      onChange={() => setFieldValue("belobRadioGroup", value)}
                    >
                      <Flex alignItems={"center"} gap="1rem" py="1rem">
                        <BsHeart size={40} color="brand.blue" />
                        <Box>
                          <Text fontSize={"sm"} fontWeight={"bold"}>
                            {value}
                          </Text>
                          {findVaerdi.find((v, index) =>
                            index === optindex ? (
                              <Text key={v.id}>{v.vaerdi}</Text>
                            ) : null
                          )}
                          {optindex === 5 ? (
                            <InputControl
                              name="andetBelobTal"
                              label="Andet beløb"
                              inputProps={{
                                autoComplete: "off",
                                marginTop: "0.5rem",
                                value:
                                  values.belobRadioGroup !== "Andet beløb*"
                                    ? ""
                                    : values.andetBelobTal,
                                isDisabled:
                                  values.belobRadioGroup === "Andet beløb*"
                                    ? false
                                    : true,
                                _hover: {
                                  _disabled: {
                                    boxShadow: "none",
                                    cursor: "default",
                                  },
                                },
                              }}
                              labelProps={{
                                position: "absolute",
                                visibility: "hidden",
                              }}
                              fontSize={"smaller"}
                              placeholder="F.eks. 800"
                              bg="brand.white"
                            />
                          ) : null}
                        </Box>
                      </Flex>
                    </RadioBelobCard>
                  ))}
                </RadioGroup>
              </FormControl>
            )}
          </Field>
          {errors.belobRadioGroup && touched.belobRadioGroup ? (
            <Text
              fontStyle={"italic"}
              textAlign={"right"}
              color={"brand.errorMsg"}
              fontSize={"xxs"}
            >
              {errors.belobRadioGroup}
            </Text>
          ) : null}

          <Box display={"grid"} justifySelf={"center"} mt={"3rem"} mb="1rem">
            <Button
              type="submit"
              variant="formSubmitBtn"
              isLoading={isSubmitting}
            >
              Næste
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
export default DonoBelobForm;
