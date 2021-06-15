import { useState } from 'react'

const useFormUser = (initial) => {
  const [value, setValue] = useState(initial)

  const onChange = (e) =>
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })

  return [value, onChange]
}

export default useFormUser
