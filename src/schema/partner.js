import * as yup from "yup";

export const PartnerSchema = yup.object().shape({
    nama    : yup
                .string("masukan Namap Lengkap")
                .min(5)
                .max(12)
                .required("Required"),
    noTelp  : yup
                .string() 
                .max(12)
                .required("Required"),
    Email   : yup
                .string("masukan email")
                .email("Required")
                .required("masukan email"),
    Brand   : yup
                .string()
                .oneOf(["kulo","pochijang","xiboba","kitamura","bueva","mazeru","miejontor","xij ","motahu","absolutea","elageprek"],"i")
                .required("required"),
    kota    : yup
                .string("masukan nama kota")
                .required("Required"),
    Lokasi    : yup
                .string("masukan Lokasai")
                .required("Required"),
    Pertanyaan: yup 
                .string("masukan pertanyaan")
                .required("Required")
                
        
    // Kota: yup.string().required(),
    // Lokasi:  yup.string().required(),

})