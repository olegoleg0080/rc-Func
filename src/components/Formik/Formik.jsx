import { Field, Form, Formik} from "formik";


export const FormikApp = () => (
    <div>
        <Formik
            initialValues={{
                email: "",
                color: "red",
                firstName: "",
                lastName: "",
            }}
            onSubmit={(values) => {
                console.log(values);
            }}
        >

            <Form>
                <Field type="email" name="email" placeholder="Email" />
            </Form>
            
        </Formik>
    </div>
);
