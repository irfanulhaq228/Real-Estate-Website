import * as Yup from "yup";

export const SignupSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().min(5).max(30).required("Password in required"),
});

export const SigninSchema = Yup.object({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password in required"),
});

export const AgentContactSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  phone: Yup.number().required("Phone Number is required"),
  email: Yup.string().email().required("Email is required"),
  message: Yup.string().required("Message in required"),
});

export const SellByOwnerSchema = Yup.object({
  streetAddress: Yup.string().required("Street Address is required"),
  unit: Yup.number(),
  city: Yup.string().required("City is required"),
  zipCode: Yup.number().required("Zip Code in required"),
});

export const SellByOwnerHomeSchema = Yup.object({
  price: Yup.string().required("Price is required"),
  homeType: Yup.string().required("Home Type is required"),
  lotSize: Yup.string().required("Lot Size is required"),
  lotUnit: Yup.string().required("Lot Unit is required"),
  description: Yup.string().required("Description is required"),
  relatedWebsite: Yup.string().required("Related Website is required"),
  phone: Yup.string().required("Phone is required"),
});
