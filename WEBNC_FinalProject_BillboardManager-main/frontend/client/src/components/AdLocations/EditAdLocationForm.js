import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, FormControl, FormLabel, Input, Box } from "@chakra-ui/react";

const EditAdLocationForm = ({ initialData, onSubmit }) => {
  return (
    <Formik initialValues={initialData} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <Box mb={4}>
            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Field as={Input} id="name" name="name" />
            </FormControl>
            {/* Thêm các trường input khác */}
          </Box>
          <Button
            mt={4}
            colorScheme="blue"
            isLoading={isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default EditAdLocationForm;
