import { NextPage } from 'next'
import ReturnButton from '../../components/returnButton'
import { HANDICAP, RESULT } from '../../constants/constants'
import usePostDatas from '../../hooks/usePostDatas'

const PostResult: NextPage = () => {
  const [data, { change: handleChange, click: handleClick }] = usePostDatas()

  return (
    <div>
      <form>
        <div>
          <label>black</label>
          <input
            type='text'
            name='black'
            placeholder='black'
            value={data.black}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>white</label>
          <input
            type='text'
            name='white'
            placeholder='white'
            value={data.white}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>handicap</label>
          <select name='handicap' onChange={handleChange}>
            {HANDICAP.map((val, idx) => (
              <option value={idx} key={idx}>
                {val}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>result</label>
          {RESULT.map((val, idx) => (
            <>
              <input
                id={'option' + String(idx)}
                name='result'
                type='radio'
                value={idx - 1}
                onChange={handleChange}
              />
              <label htmlFor={'option' + String(idx)}>{val}</label>
            </>
          ))}
        </div>
        <button type='button' onClick={handleClick}>
          submit
        </button>
      </form>
      <ReturnButton />
    </div>
  )
}

export default PostResult
