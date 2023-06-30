import { useFormik } from "formik";
import { ContactScema } from "../../schema/contact";



const Contact = () => {

    const onSubmit =async (values, actions) =>{
        console.log(values);
        console.log(actions);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm()
    }

    const { values, errors, touched, isSubmitting, handleBluer, handleChange, handleSubmit } = useFormik({
        initialValues: {
            Nama:"",
            Email:"",
            Subject:"",
            Massage:"",
        },
        validationSchema: ContactScema,
        onSubmit
    })

    console.log(errors)

    return(
        <div>
            <div className="w-[80%] lg:w-[60%] mt-28 container mx-auto">
                <h1 className="uppercase text-hijau font-bold text-2xl lg:text-5xl">contact us</h1>
                <p className="text-[#7a7a7a] text-sm">Silahkan isi form di bawah ini</p>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 container mx-auto w-[80%] lg:w-[60%]">
                {/*  */}
                <div className="mt-5">
                    <form action="" onSubmit={handleSubmit} autoComplete="off">
                        <div className="py-1">
                            <label htmlFor="nama" className="block py-1 text-xs font-semibold ">Nama Lengkap <span className="text-red-500">*</span></label>
                            <input
                                value={values.Nama}
                                onChange={handleChange}
                                name="Nama"
                                id="nama"
                                type="text"
                                placeholder="Nama Lengkap"
                                className={errors.Nama && touched.Nama ? "input-error":"block mx-auto  focus:outline-[#e3e3e3] border-[#e3e3e3] text-[#7a7a7a] border-b w-full p-2 "}
                                onBlur={handleBluer}
                            /> 
                            {errors.Nama && touched.Nama && (<p className="error text-red-500">{errors.Nama}</p>)}
                        </div>
                        <div className="py-1">
                            <label htmlFor="Email" className="block py-1 text-xs font-semibold ">Email <span className="text-red-500">*</span></label>
                            <input
                                value={values.Email}
                                onChange={handleChange}
                                name="Email"
                                id="Email"
                                type="email"
                                placeholder="Email"
                                className={errors.Email && touched.Email ? "input-error":"block mx-auto  focus:outline-[#e3e3e3] border-[#e3e3e3] text-[#7a7a7a] border-b w-full p-2 "}
                                onBlur={handleBluer}
                            /> 
                            {errors.Email && touched.Email && (<p className="error text-red-500">{errors.Email}</p>)}
                        </div>
                        <div className="py-1">
                            <label htmlFor="Subject" className="block py-1 text-xs font-semibold ">Subject <span className="text-red-500">*</span></label>
                            <input
                                value={values.Subject}
                                onChange={handleChange}
                                name="Subject"
                                id="Subject"
                                type="text"
                                placeholder="Subject"
                                className={errors.Subject && touched.Subject ? "input-error":"block mx-auto  focus:outline-[#e3e3e3] border-[#e3e3e3] text-[#7a7a7a] border-b w-full p-2 "}
                                onBlur={handleBluer}
                            /> 
                            {errors.Subject && touched.Subject && (<p className="error text-red-500">{errors.Subject}</p>)}
                        </div>
                        <div className="py-1">
                            <label htmlFor="massege"className="block py-1 text-xs font-semibold ">Pertanyaan yang diinginkan<span className="text-red-500">*</span></label>
                            <textarea 
                                value={values.Massage}
                                name="Massage" 
                                id="massege"
                                cols="78"
                                rows="4"
                                onChange={handleChange}
                                placeholder="Massege" 
                                className={errors.Massage && touched.Massage? "input-error":"block mx-auto focus:outline-[#e3e3e3]  border-[#e3e3e3]  text-[#7a7a7a] border-b w-full p-2 overflow-y-hidden"}
                                onBlur={handleBluer}
                            >
                            </textarea>
                            {errors.Massage && touched.Massage && (<p className="error text-red-500">{errors.Massage}</p>)} 
                        </div>
                        <button disabled={isSubmitting} type="submit" className="block mx-auto py-2 px-6 rounded-sm mt-4 bg-hijau text-white capitalize w-full">kirim</button>
                    </form>
                </div>
                {/*  */}
                <div className="py-2 mt-10 lg:mt-0 md:ms-28 lg:ms-28">
                    <div>
                        <h1 className="uppercase text-hijau font-bold text-base">pt.aneka cipta aplikasi</h1>
                        <p className="text-xs">Jl. Raya Pos Pengumben, no. 12 EF, RT.5/RW.6, Kebon <br /> Jeruk - Jakarta Barat, DKI Jakarta 11560</p>
                    </div>
                    <div className="mt-10">
                        <h1 className="uppercase text-hijau font-medium  text-base">office hour</h1>
                        <p className="text-xs">Senin - Jumat <br />
                                                09:00 WIB - 17:00 WIB <br />
                                                Minggu Libur</p>
                    </div>
                    <div className="mt-10">
                        <h1 className="uppercase text-hijau font-bold  text-base">contact info</h1>
                        <div className="flex items-center gap-3 text-hijau text-xs">
                            <i class="fa-solid fa-phone"></i>
                            <p>0813 1722 8123</p>
                        </div>
                        <a className="flex items-center gap-3 text-hijau text-xs">
                            <i class="fa-solid fa-envelope"></i>
                            <p>info@kulogroup.com</p>
                        </a>
                    </div>
                    <div className="mt-10">
                        <h1 className="uppercase text-hijau font-medium text-base">social media</h1>
                        <ul className='flex gap-4 mt-2 text-hijau'>
                            <li><a href="https://www.facebook.com/kulogroup?_rdc=1&_rdr"><i class="fa-brands fa-facebook fa-2xl" ></i></a></li>
                            <li><a href="https://www.instagram.com/kedaikopikulo/?hl=en"><i class="fa-brands fa-instagram fa-2xl"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact