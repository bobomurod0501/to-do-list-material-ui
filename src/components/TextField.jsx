import { useField, ErrorMessage } from "formik";


const TextField1 = ({label, ...props}) => {
    const [field, meta] = useField(props)
    // console.log(field, meta)
    return(
        <div>
            <label htmlFor={field.name}>{label}</label>
            <input 
             {...field} {...props}
             className={`form-control shadow-none text-success ${meta.touched && meta.error && "is-invalid"}`}
             style={{width:400, height:50}}
            //  autoComplete="off"
             />
             <ErrorMessage  name={field.name} className="error"/>
        </div>
    )
}

export default TextField1;