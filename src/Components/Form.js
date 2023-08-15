import React from "react";




const Form = (props) => {
    
    const {
        values, submit, change, errors
    } = props
    
    
    const onSubmit = (e) => {
        e.preventDefault()
        submit()
      
    
    };

    const onChange = (e) => {
        const { name, value, checked, type } = e.target
        const valueToUse = type === 'checkbox' ? checked: value
        change(name, valueToUse)
    }

    
return (
    <div>
        <h2>Pizza Order Form</h2>
        <form id = "pizza-form" onSubmit={onSubmit}> 

            {/**ERRORS */}
            <div className="errors">
                <div>{errors.name}</div>
            </div>

            {/**NAME INPUT */}
                <label>Enter Your Name        
                    <input id="name-input"
                        placeholder="Name"
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={onChange}
                    />
                </label>

                {/**DROPDOWN */}
                <label>Select A Size 
                    <select 
                        id="size-dropdown" 
                        value={values.size}
                        onChange={onChange} 
                        name="size"
                    >
                        <option value=''>- Select an Option -</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </label>

                {/**Checklist for TOPPINGS */}
                <div className="form-toppings checboxes">
                <label>Pepperoni
                    <input
                        type="checkbox"
                        name="pepperoni"
                        checked={values.pepperoni}
                        onChange={onChange}
                    />
                </label>

                <label>Pineapple
                    <input
                        type="checkbox"
                        name="pineapple"
                        checked={values.pineapple}
                        onChange={onChange}
                    />
                </label>

                <label>Sausage
                    <input
                        type="checkbox"
                        name="sausage"
                        checked={values.sausage}
                        onChange={onChange}
                    />
                </label>

                <label>Olive
                    <input
                        type="checkbox"
                        name="olive"
                        checked={values.olive}
                        onChange={onChange}
                    />
                </label>
            </div>

            <label>Special Instructions
                <input
                    placeholder="Special Instructions Here"
                    id="special-text"
                    type="text"
                    name="special"
                    value={values.special}
                    onChange={onChange}
                 />
            </label>

            <input
                id="order-button"
                value="Add to Order"
            />
        </form>
        
        
    </div>
)

    

}

export default Form