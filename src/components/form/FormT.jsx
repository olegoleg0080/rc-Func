import { Component } from "react";
import { FormSub, FormToDoComponent, Input, Label } from "./form.styled";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
const initialValue = {
    title: "",
    description: "",
    level: "hard",
};

const schemaValidation = Yup.object({
    title: Yup.string()
        .min(2, "Must be min 2 characters or less")
        .required("Title must be required"),
    description: Yup.string().required("Description must be required"),
    // level: Yup.string().oneOf(["hard","normal" ,"easy" ]).required("Required"),
});
class FormToDo extends Component {
    render() {
        return (
            <Formik
                initialValues={{ ...initialValue }}
                onSubmit={(values, actions) => {
                    console.log("FormToDo: ", values)
                    actions.resetForm({ ...initialValue });
                    this.props.onAdd(values);
                }}
                validationSchema={schemaValidation}
            >
                <FormToDoComponent>
                    <Label>
                        Title
                        <Input name="title" type="text" />
                        <ErrorMessage component="div" name="title" />
                    </Label>
                    <Label>
                        description
                        <Input name="description" type="text" />
                        <ErrorMessage component="p" name="description" />
                    </Label>
                    <Label>
                        <Field as="select" name="level">
                            <option value="hard">hard</option>
                            <option value="normal">normal</option>
                            <option value="easy">easy</option>
                        </Field>
                    </Label>
                    <FormSub type="submit">Add</FormSub>
                </FormToDoComponent>
            </Formik>
        );
    }
}
export default FormToDo;
