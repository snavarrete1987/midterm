import React from 'react';
import { useForm } from 'react-hook-form';
import './SignUpUser.css';


function SignUpUser() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = data => {
        if (data.password !== data.confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
        alert(JSON.stringify(data));
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form-container'>
            <label>FirstName:</label>
            <input className='form-input'{...register("firstName", { required: "Mandatory." })} placeholder="FirstName" />
            {errors.firstName && <p>{errors.firstName.message}</p>}

            <label>LastName:</label>
            <input className='form-input'{...register("lastName", { required: "Mandatory." })} placeholder="LastName" />
            {errors.lastName && <p>{errors.lastName.message}</p>}

            <label>UserName:</label>
            <input className='form-input' {...register("userName", { required: "Mandatory." })} placeholder="UserName" />
            {errors.userName && <p>{errors.userName.message}</p>}

            <label>Email:</label>
            <input className='form-input'{...register("email", {
                required: "Mandatory.",
                pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email is not valid."
                }
            })} placeholder="Email" />
            {errors.email && <p>{errors.email.message}</p>}

            <label>Password:</label>
            <input className='form-input' type="password" {...register("password", {
                required: "Mandatory.",
                minLength: {
                    value: 6,
                    message: "The password must be at least 6 characters"
                }
            })} placeholder="Password" />
            {errors.password && <p>{errors.password.message}</p>}

            <label>Confirm Password:</label>
            <input className='form-input' type="password" {...register("confirmPassword", {
                validate: value =>
                    value === watch('password') || "Password do not match."
            })} placeholder="Confirm password." />
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

            <button type="submit">Submit</button>
        </form>
    );
}

export default SignUpUser;
