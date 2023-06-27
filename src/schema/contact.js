import * as yup from "yup";

export const ContactScema = yup.object().shape({
    Nama    : yup
                .string("masukan nama")
                .min(4)
                .max(59)
                .required("required"),
    Email   : yup
                .string("masukan email")
                .email("require")
                .required("masukan email"),
    Subject : yup
                .string()
                .required(),
    Massage : yup
                .string()
                .required(),

})

// Nama:"",
// Email:"",
// Subject:"",
// Massage:"",