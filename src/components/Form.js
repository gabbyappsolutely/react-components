import React, {useState} from 'react'

const Form = (props)=>{
	let [form, setForm] = useState({email: '', password:''})
	const handleChange = e=>{
		let {name, value} = e.target
		setForm(prevState=>({...prevState, [name]:value}))
	}
	const onSubmit = e=>{
		props.onSubmit(form)
	}
	return (
		<form onSubmit={onSubmit}>
			<div className="form-group">
				<label>Email</label>
				<input name="email" onChange={handleChange} type="text" />
			</div>
			<div className="form-group">
				<label>Password</label>
				<input name="password" onChange={handleChange} type="password" />
			</div>
			<button>Submit</button>
		</form>
	)
}