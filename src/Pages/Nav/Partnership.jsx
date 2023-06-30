import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Partner from "../../Components/Navigation/Partner";
import Scroll from "../../Components/ScrolTop";
import { useFormik } from "formik";
import { PartnerSchema } from "../../schema/partner";
import React, {useState} from "react";
import "../../plugin/css/partner.css";
import { pertanyaan } from "../../Components/js/Partner";
import "../../plugin/css/dropson.css";




const Partnership =() => {

    const [show,setShow] = useState({});

    const toggleVisibility = (divId) =>{
        setShow((prevState) => ({
            ...prevState,
            [divId]: !prevState[divId]
        }))
    }
    // formik
    const onSubmit =async (values, actions) =>{
        console.log(values);
        console.log(actions);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm()
    };

    const { values, errors,touched,isSubmitting, handleBluer, handleChange, handleSubmit } = useFormik({
        initialValues: {
            nama: "",
            noTelp: "",
            Email: "",
            kota:"",
            Lokasi:"",
            Brand: "",
            Pertanyaan:"",
            
        },
        validationSchema: PartnerSchema,
        onSubmit,
    });

    console.log(errors);

    return (
        <div>
            <Navbar/>
            <Partner/>
            <form action="" onSubmit={handleSubmit} autoComplete="off" className="container mx-auto w-[80%] lg:w-[47%] mt-10 lg:mt-16">
                <div className="py-1">
                    <label htmlFor="nama" className="block py-1 text-xs font-semibold ">Nama Lengkap <span className="text-red-500">*</span></label>
                    <input
                        value={values.nama}
                        onChange={handleChange}
                        name="nama"
                        id="nama"
                        type="text"
                        placeholder="Nama Lengkap"
                        className={errors.nama && touched.nama ? "input-error":"block mx-auto  focus:outline-[#e3e3e3] bg-[#fafafa]  border-[#e3e3e3] text-[#7a7a7a] border w-full p-2"}
                        onBlur={handleBluer}
                    /> 
                    {errors.nama && touched.nama && (<p className="error text-red-500">{errors.nama}</p>)}
                </div>
                <div className="py-1">
                    <label htmlFor="noTelp" className="block py-1 text-xs font-semibold ">No Telpon <span className="text-red-500">*</span></label>  
                    <input
                        value={values.noTelp}
                        onChange={handleChange}
                        name="noTelp"
                        id="noTelp"
                        type="text"
                        placeholder="No Telpon"
                        className={errors.noTelp && touched.noTelp ? "input-error":"block mx-auto focus:outline-[#e3e3e3] bg-[#fafafa] border-[#e3e3e3] text-[#7a7a7a] border w-full p-2" }
                        onBlur={handleBluer}
                    />  
                    {errors.noTelp && touched.noTelp && (<p className="error text-red-500">{errors.noTelp}</p>)} 
                </div>
                <div className="py-1">
                    <label htmlFor="Email" className="block text-xs font-semibold py-1">Alamat Email<span className="text-red-500">*</span></label>  
                    <input
                        value={values.Email}
                        onChange={handleChange}
                        name="Email"
                        id="Email"
                        type="email"
                        placeholder="Email"
                        className={errors.Email && touched.Email ? "input-error":"block mx-auto focus:outline-[#e3e3e3] bg-[#fafafa] border-[#e3e3e3] text-[#7a7a7a] border w-full p-2"}
                        onBlur={handleBluer}
                    />
                    {errors.Email && touched.Email && (<p className="error text-red-500">{errors.Email}</p>)} 
                </div>
                <div className="py-1">
                    <label htmlFor="kota" className="block text-xs font-semibold py-1">Kota<span className="text-red-500">*</span></label>  
                    <input
                        value={values.kota}
                        onChange={handleChange}
                        name="kota"
                        id="kota"
                        type="text"
                        placeholder="Kota"
                        className={errors.kota && touched.kota ? "input-error":"block mx-auto focus:outline-[#e3e3e3] bg-[#fafafa] border-[#e3e3e3] text-[#7a7a7a] border w-full p-2"}
                        onBlur={handleBluer}
                    />
                    {errors.kota && touched.kota && (<p className="error text-red-500">{errors.kota}</p>)} 
                </div>
                <div className="py-1">
                    <label htmlFor="Lokasi" className="block text-xs font-semibold py-1">Lokasi<span className="text-red-500">*</span></label>  
                    <input
                        value={values.Lokasi}
                        onChange={handleChange}
                        name="Lokasi"
                        id="Lokasi"
                        type="text"
                        placeholder="Lokasi"
                        className={errors.Lokasi && touched.Lokasi ? "input-error":"block mx-auto focus:outline-[#e3e3e3] bg-[#fafafa] border-[#e3e3e3] text-[#7a7a7a] border w-full p-2"}
                        onBlur={handleBluer}
                    />
                    {errors.Lokasi && touched.Lokasi && (<p className="error text-red-500">{errors.Lokasi}</p>)} 
                </div>
                <div className="py-1">
                    <label htmlFor="Brand"className="block py-1 text-xs font-semibold ">Brand yang diinginkan<span className="text-red-500">*</span></label>
                    <select
                        value={values.Brand}
                        name="Brand" 
                        id="Brand"
                        onChange={handleChange}
                        className={errors.Brand && touched.Brand ? "input-error":"block mx-auto focus:outline-[#e3e3e3] bg-[#fafafa] border-[#e3e3e3] text-[#7a7a7a] border w-full p-2 uppercase"}
                        onBlur={handleBluer}
                    >
                        <option value="kulo">kedai Kopi Kulo</option>
                        <option value="pochijang">pochijang</option>
                        <option value="xiboba">xiboba</option>
                        <option value="kitamura">kitamura</option>
                        <option value="bueva">bu eva Sambal</option>
                        <option value="mazeru">mazeru</option>
                        <option value="miejontor">oseng mie jontor</option>
                        <option value="xiji">xiji</option>
                        <option value="motahu">mo tahu aja</option>
                        <option value="absolutea">absolutea</option>
                        <option value="elageprek">ela geprek dougnuths</option>
                    </select>
                </div>
                <div className="py-1">
                    <label htmlFor="tanya"className="block py-1 text-xs font-semibold ">Pertanyaan yang diinginkan<span className="text-red-500">*</span></label>
                    <textarea 
                        value={values.Pertanyaan}
                        name="Pertanyaan" 
                        id="tanya"
                        cols="78"
                        onChange={handleChange}
                        placeholder="Masukan Pertanyaan" 
                        className={errors.Pertanyaan && touched.Pertanyaan? "input-error":"block mx-auto focus:outline-[#e3e3e3] focus:w-full border-[#e3e3e3] bg-[#fafafa] text-[#7a7a7a] border w-full p-2 overflow-y-hidden"}
                        onBlur={handleBluer}
                    >
                        
                    </textarea>
                    {errors.Pertanyaan && touched.Pertanyaan && (<p className="error text-red-500">{errors.Pertanyaan}</p>)} 
                </div>
                <button disabled={isSubmitting} type="submit" className="block mx-auto py-2 px-6 rounded-lg mt-4 bg-hijau text-white capitalize" >kirim</button>
            </form>
            <div className="mt-20 lg:mt-40 mx-auto container scroll-smooth">
                <h1 className="uppercase text-hijau font-extrabold text-2xl lg:text-4xl text-center mb-5 lg:mb-16">f.a.q</h1>
                {pertanyaan.map((item)=> (
                    <div key={item.id} 
                    className={`hide-show-div2 ${show[item.id] ? 'show2' : 'border-b border-slate-400 text-sm mx-auto w-[80%] lg:w-[65%] mt-5'}`}>
                        <button onClick={() => toggleVisibility(item.name)} className="text-start normal-case border-none text-xs w-full">
                            {show[item.name] ? "" : ""}
                            <div className="font-bold text-hijau">{item.name}</div>
                            {show[item.name] && <div className="mt-2 ms-4 text-hijau ">{item.answer}</div>}
                        </button>
                    </div>
                ))}
            </div>
            <Footer/>
            <Scroll/>
        </div>
    )
}
export default Partnership