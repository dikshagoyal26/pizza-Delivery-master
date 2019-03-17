import React from 'react';
const Select = (props) =>{
	return(
		<div>
			<label htmlFor={props.name}>{props.title}</label>
			<select name={props.name}
					onChange={props.handleChange}
					className='form-control'
					value={props.value}
			>
				<option value="" disabled>{props.placeholder}</option>
				{props.options.map(option => {
					return(<option key={option}
							       value={option}
							       label={option}>{option}
							</option>)
					})
				}
			</select>
		</div>
		)
}
export default Select;