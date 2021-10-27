
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './style.css'
const Newservice = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data,e) =>{
        console.log(data);
       axios.post('http://localhost:4000/cars',data)
       .then(res=>{ if(res.data.insertedId){
           alert('Added successfully here Lets chill guys ')
       }});
       e.target.reset();
    };
    // React.useEffect(() => {
    //     if (formState.isSubmitSuccessful) {
    //       reset({ something: '' });
    //     }
    //   }, [formState, submittedData, reset]);
    return (
        <div className="services">
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
      <textarea {...register("description")} placeholder="description" />
      <input  {...register("price")} placeholder="price" />
      <input {...register("img")}  placeholder="image url"/>
      <input type="submit" />
    </form>
        </div>
    );
};

export default Newservice;