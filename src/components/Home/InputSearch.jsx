import React from 'react'
import { useForm } from 'react-hook-form'

const InputSearch = () => {

  const {handleSubmit, register, reset} = useForm()

  const submit = data => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(submit)} className='form-home'>
      <input type="text" {...register('searchText')} />
      <button className='btn-glass'><i class="fa-solid fa-magnifying-glass fa-2x"></i></button>
    </form>
  )
}

export default InputSearch