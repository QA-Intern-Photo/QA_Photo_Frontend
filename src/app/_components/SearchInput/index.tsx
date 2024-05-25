'use client'
import ReactDOM from 'react-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import styles from './SearchInput.module.scss'

import SearchIcon from '/public/icons/search.svg'

interface IFormInput {
  keyword: string
}

export default function SearchInput() {
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input
        className={styles.input}
        placeholder={'검색'}
        {...register('keyword')}
      />
      <SearchIcon className={styles.icon} />
    </form>
  )
}
