import { InputControl, CheckboxContainer } from "formik-chakra-ui";
import * as Yup from "yup";
import { Field, useField } from "formik";
import {
  Checkbox,
  Text,
  CheckboxGroup,
  FormControl,
  FormLabel,
  Box,
} from "@chakra-ui/react";
import CustomCheck from "./CustomCheck";
import { EmailField } from "./EmailField";

const KontaktCheckGroupInitialValue = (formState) => {
  return {
    valgteMetoder: formState?.valgteMetoder || [],
  };
};

const KontaktCheckGroupValidation = () => {
  return {
    valgteMetoder: Yup.array()
      .min(1, "*Vælg mindst en metode du kan kontaktes på")
      .of(Yup.string().required())
      .required("*Vælg mindst en metode du kan kontaktes på"),
  };
};

function KontaktCheckGroup({ valgteMetoder, errors, touched }) {
  return (
    <Box>
      <Field name={"valgteMetoder"}>
        {({ field }) => (
          <FormControl id={"valgteMetoder"}>
            <>
              <Checkbox {...field} value={"email"} name={"valgteMetoder"}>
                Email
              </Checkbox>
              {valgteMetoder.includes("email") ? (
                <EmailField valgteMetoder={valgteMetoder} />
              ) : (
                console.log("no email")
              )}
            </>
            <>
              <Checkbox {...field} value={"telefon"} name={"valgteMetoder"}>
                Telefon
              </Checkbox>
            </>

            <>
              <Checkbox {...field} value={"facebook"} name={"valgteMetoder"}>
                Facebook
              </Checkbox>
            </>

            {errors.valgteMetoder && touched.valgteMetoder ? (
              <Text
                fontStyle={"italic"}
                textAlign={"right"}
                color={"brand.errorMsg"}
                fontSize={"xxs"}
              >
                {errors.valgteMetoder}
              </Text>
            ) : null}
          </FormControl>
        )}
      </Field>
    </Box>
  );
}

export {
  KontaktCheckGroupInitialValue,
  KontaktCheckGroupValidation,
  KontaktCheckGroup,
};
