import { useField } from "formik";

const CustomSelect=({label,...props}) => {
    const[field,meta] = useField(props);
    console.log("field",field);
    console.log("meta",meta);

    return(
        <>
            <label>{label}</label>
            <select  
                {...field} 
                {...props}
                classname={meta.error && meta.touched ? "input-error": ""}
            >
               
            </select>
            {meta.error && meta.touched && (<div className="error text-red-500">{meta.error}</div>)}
        </>

    )
}

export default CustomSelect;