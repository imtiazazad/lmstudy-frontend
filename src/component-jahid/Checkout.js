import React from 'react';
import { useForm } from "react-hook-form";

const Checkout = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='flex flex-col lg:flex-row p-0 lg:p-8 gap-7'>
            <section className='w-full lg:w-4/6 p-5 shadow-md rounded-xl'>
                <h3 className='text-lg'>Personal Information</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid grid-col-1 lg:grid-cols-2 gap-7 mt-5'>
                        <div className='relative'>
                            <label className='absolute -top-4 left-3 z-10 bg-white p-1 text-gray-400'>First Name</label>
                            <input
                                className='border border-gray-400 border-solid rounded-md p-3 w-full outline-0'
                                {...register("firstName", { required: true, maxLength: 20 })} />
                            {errors.firstName?.type === 'required' && "First name is required"}
                        </div>
                        <div className='relative'>
                            <label className='absolute -top-4 left-3 z-10 bg-white p-1 text-gray-400'>Last Name</label>
                            <input
                                className='border border-gray-400 border-solid rounded-md p-3 w-full outline-0'
                                {...register("lastName", { required: true, maxLength: 20 })} />
                            {errors.lastName?.type === 'required' && "Last name is required"}
                        </div>
                        <div className='relative'>
                            <label className='absolute -top-4 left-3 z-10 bg-white p-1 text-gray-400'>Email</label>
                            <input
                                className='border border-gray-400 border-solid rounded-md p-3 w-full outline-0'
                                type='email'
                                {...register("email", { required: true, maxLength: 20 })} />
                            {errors.email?.type === 'required' && "email is required"}
                        </div>
                        <div className='relative'>
                            <label className='absolute -top-4 left-3 z-10 bg-white p-1 text-gray-400'>Number</label>
                            <input
                                className='border border-gray-400 border-solid rounded-md p-3 w-full outline-0'
                                type="number"
                                {...register("number", { required: true, maxLength: 11 })} />
                            {errors.number?.type === 'required' && "Number is required"}
                        </div>
                    </div>
                    <p className='mt-5'>Existing Customer? <span className='text-green-800'> Click here to login</span></p>
                    <div className="divider"></div>
                    <h3 className='text-lg mt-5'>Payment Method</h3>
                    <div className='flex items-center gap-4 mt-4'>
                        <input type="radio" name="radio-4" className="radio radio-accent w-4 h-4" />
                        <span className='font-bold'>Credit Card</span>
                    </div>
                    <div className='grid grid-col-1 lg:grid-cols-2 gap-7 mt-5'>
                        <div className='relative'>
                            <label
                                className='absolute -top-4 left-3 z-10 bg-white p-1 text-gray-400'>
                                Name on Card
                            </label>
                            <input
                                className='border border-gray-400 border-solid rounded-md p-3 w-full outline-0'
                                {...register("cardName", { required: true, maxLength: 20 })} />
                            {errors.cardName?.type === 'required' && "card name is required"}
                        </div>
                        <div className='relative'>
                            <label
                                className='absolute -top-4 left-3 z-10 bg-white p-1 text-gray-400'>
                                Card Number
                            </label>
                            <input
                                className='border border-gray-400 border-solid rounded-md p-3 w-full outline-0'
                                type="number"
                                {...register("cardNumber", { required: true, maxLength: 11 })} />
                            {errors.cardNumber?.type === 'required' && "Number is required"}
                        </div>
                    </div>
                    <div className='grid grid-col-1 lg:grid-cols-3 gap-7 mt-8'>
                        <div className='relative'>
                            <label
                                className='absolute -top-4 left-3 z-10 bg-white p-1 text-gray-400'>
                                Expire Month
                            </label>
                            <input
                                className='border border-gray-400 border-solid rounded-md p-3 w-full outline-0'
                                {...register("exMonth", { required: true, maxLength: 20 })} />
                            {errors.exMonth?.type === 'required' && "exMonth is required"}
                        </div>
                        <div className='relative'>
                            <label
                                className='absolute -top-4 left-3 z-10 bg-white p-1 text-gray-400'>
                                Expire Year
                            </label>
                            <input
                                className='border border-gray-400 border-solid rounded-md p-3 w-full outline-0'
                                type="number"
                                {...register("exYear", { required: true, maxLength: 11 })} />
                            {errors.exYear?.type === 'required' && "Year is required"}
                        </div>
                        <div className='relative'>
                            <label
                                className='absolute -top-4 left-3 z-10 bg-white p-1 text-gray-400'>
                                CVV
                            </label>
                            <input
                                className='border border-gray-400 border-solid rounded-md p-3 w-full outline-0'
                                type="number"
                                {...register("cvv", { required: true, maxLength: 11 })} />
                            {errors.cvv?.type === 'required' && "CVV is required"}
                        </div>
                    </div>
                    <div className='flex items-center gap-4 mt-5'>
                        <input type="radio" name="radio-4" className="radio radio-accent w-4 h-4" />
                        <span className='font-bold'>Paypal</span>
                    </div>
                    <div className='flex items-center gap-4 mt-5'>
                        <input type="checkbox" class="w-4 h-4 rounded-1" />
                        <span>I have read and accepted <span className='text-green-800'>Terms & Conditions</span></span>
                    </div>
                    <input className="btn mt-5 btn-primary" type="submit" value='Confirm and Pay' />
                </form>
            </section>
            <section className='w-full lg:w-2/6 p-5 shadow-md rounded-xl sticky top-0'>
                <h3 className='text-lg'>Booking Summary</h3>
                <div className="divider"></div>
                <div>
                    <div className='flex gap-4'>
                        <div class="avatar">
                            <div class="w-24 rounded">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                        <div>
                            <h3 className='text-lg text-blue-700'>Darren Elder</h3>
                            <div className='flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="orange">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="orange">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="orange">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="orange">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="gray">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <p>35</p>
                            </div>
                            <div className='flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="gray">
                                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                </svg>
                                <p className='text-gray-500'>Newyork, USA</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between items-center mt-4'>
                            <p className='text-gray-500'>Date</p>
                            <p className='text-gray-500'>16 Nov 2019</p>
                        </div>
                        <div className='flex justify-between items-center mt-4'>
                            <p className='text-gray-500'>Time</p>
                            <p className='text-gray-500'>10.00 Am</p>
                        </div>
                        <div className='flex justify-between items-center mt-4'>
                            <p className='text-gray-500'>Consulting Fee</p>
                            <p className='text-gray-500'>$100</p>
                        </div>
                        <div className='flex justify-between items-center mt-4'>
                            <p className='text-gray-500'>Booking Fee</p>
                            <p className='text-gray-500'>$10</p>
                        </div>
                        <div className='flex justify-between items-center mt-4'>
                            <p className='text-gray-500'>Video Call</p>
                            <p className='text-gray-500'>$50</p>
                        </div>
                        <div className="divider"></div>
                        <div className='flex justify-between items-center mt-4'>
                            <p className='text-lg font-bold'>Total</p>
                            <p className='text-blue-500 font-bold'>$160</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Checkout;