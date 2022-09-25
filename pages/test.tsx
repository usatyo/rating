import { NextPage } from 'next'
import { useEffect } from 'react'
import { calc_rate } from '../utils/util'

const Test: NextPage = () => {
  useEffect(() => {
    console.log(calc_rate('a', 'b', 0, 1))
    console.log(calc_rate('b', 'a', 0, -1))
    console.log(calc_rate('b', 'c', 0, 1))
    console.log(calc_rate('c', 'b', 0, 1))
  })
  return <div></div>
}

export default Test
