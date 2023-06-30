import { Field, Form, Formik } from "formik";

import background from "../../plugin/img/partner_img.png";
import { PartnerSchema } from "../../schema/partner";
import CustomSelect from "../js/CustomSelect";

const Partner = () => {
    return(
        
        <div>
            <div className="mt-20 h-[40vh] md:h-[60vh] lg:mt-0 lg:h-[74.5vh] bg-no-repeat bg-cover" style={{ backgroundImage:`url(${background})`}}></div>
            <section>
                <div className="text-center mt-20 ">
                    <h1 className="uppercase text-hijau font-extrabold text-4xl">partnership opportunities</h1>
                    <p className="text-xs md:lg:text-sm text-hijau mt-6 leading-6 px-10 lg:px-16">
                        Saat ini Kulo Group sudah memiliki 11 brand yaitu Kedai Kopi Kulo, Pochajjang, Kitamura, Mazeru, Oseng Mie Jontor, Bu Eva Spesial Sambal, dan kelima brand lainnya merupakan hasil kolaborasi  dengan Mitra Boga Ventura (MBV) yaitu Xiji, Xiboba, Mo Tahu Aja, Ela Greek Doughnut, dan Absolutea yang sudah tersebar dari sabang sampai merauke.
                        Sudah lebih dari 1000 outlet yang berada didalam naungan Kulo Group. Dimulai dari brand pertama yaitu Kedai Kopi Kulo hingga terciptalah 10 brand lain dalam kurun waktu 3 tahun. 
                        Melalui 11 brand ini, kami sangat terbuka untuk kesempatan menjadi mitra dari Kulo Group. Dapatkan peluang bisnis untuk menjadi mitra berbagai brand di Kulo Group.
                    </p>
                    <p className="mt-8 font-bold text-sm">Daftarkan dirimu untuk menjadi bagian dari kami.</p>
                </div>
                <div className="text-center px-5 lg:px-0 mt-20 lg:mt-40">
                    <h1 className="uppercase text-hijau font-extrabold text-2xl lg:text-4xl">partnership with us</h1>
                    <span className="text-xs lg:text-sm px-5 lg:px-0">Untuk pengajuan partnership, Silahkan mengisi formulir online</span>
                </div>
            </section>
            {/* <Formik 
                initialValues={{Brand : ""}}
                validationSchema={PartnerSchema}
            >
                {(props) => (
                    <Form>
                        <CustomSelect
                            label="Brand"
                            name="Brand"
                            placeholder="pleasse input brand"
                        >
                            <option value="">pilih brand</option>
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
                        </CustomSelect>    


                        <button type="submit">submit</button>
                    </Form>
                )}

            </Formik> */}
        </div>
    )
}
export default Partner