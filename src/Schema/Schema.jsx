import * as Yup from 'yup';

export const SignupSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().min(5).max(30).required("Password in required")
});

export const SigninSchema = Yup.object({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password in required")
});

export const AgentContactSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    phone: Yup.number().required("Phone Number is required"),
    email: Yup.string().email().required("Email is required"),
    message: Yup.string().required("Message in required")
});