import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

function AuthForm() {

    const regExp = {
        alphaBet: /^[a-zA-Z]+$/,
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    }

    const scheamValidate = Yup.object().shape({
            username: Yup.string()
                .matches( regExp.alphaBet, "გამოიყენეტ მხოლოდ a-z მდე დიდი და პატარა სიმბოლები")
                .min(3, "აუცილებელია მინიმუმ 3 სიმბოლო")
                .max(8, 'მაქსიმალური ასოთა რაოდენობა 8')
                .required("ველის შევსსება აუცილებელია"),
            email: Yup.string()
                .email("არ არის ვალიდური ელ.ფოსტა")
                .required("ველის შევსსება აუცილებელია"),
        }
    )


    return (
        <>

            <Formik
            initialValues={
                {
                    username: "",
                    email: "",
                }
            }
            validationSchema={scheamValidate}
            onSubmit={ () => console.log("test")}
            >
                <Form className="flex flex-col max-w-4/12 mx-auto shadow-2xl p-5 bg-white">
                    <label htmlFor="">userName</label>
                    <Field name="username" className="border border-amber-600" />
                    <ErrorMessage name="username" component="span" />
                    <label htmlFor="">Email</label>
                    <Field name="email" className="border border-amber-600" />
                    <ErrorMessage name="email" />
                    <button type="submit">Button</button>
                </Form>

            </Formik>
        </>
    )



}
export default AuthForm;