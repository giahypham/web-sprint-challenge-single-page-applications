import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
    .string()
    .min(2, "name must be at least 2 characters"),
    special: yup
    .string(),
    size: yup
    .string()
    .oneOf(['small', 'medium', 'large'], 'Size is required'),
    pepperoni: yup.boolean(),
    pineapple: yup.boolean(),
    sausage: yup.boolean(),
    olive: yup.boolean()

})

export default formSchema;