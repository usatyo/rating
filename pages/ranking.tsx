import { NextPage } from 'next'
import ReturnButton from '../components/returnButton'
import { useUsers } from '../hooks/useUsers'
import { Users } from '../models/types'

const Ranking: NextPage = () => {
  const infos: Users[] = useUsers()

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>rank</th>
            <th>name</th>
            <th>rate</th>
          </tr>
        </thead>
        <tbody>
          {infos.map((info, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{info.name}</td>
              <td>{info.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReturnButton />
    </div>
  )
}

export default Ranking
