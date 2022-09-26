import { Box, Button, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup, Select, Stack, TextField } from '@mui/material'
import { NextPage } from 'next'
import ReturnButton from '../../components/returnButton'
import { HANDICAP, RESULT } from '../../constants/constants'
import usePostDatas from '../../hooks/usePostDatas'

const PostResult: NextPage = () => {
  const [data, { change: handleChange, click: handleClick }] = usePostDatas()

  return (
    <Stack>
      <Stack>
        <TextField
          variant='outlined'
          label='黒番'
          value={data.black}
          onChange={(e) => handleChange("black", e.target.value)}
        />
      </Stack>
      <Stack>
        <TextField
          variant='outlined'
          label='白番'
          value={data.white}
          onChange={(e) => handleChange("white", e.target.value)}
        />
      </Stack>
      <Stack>
        {/* <label>ハンデ</label> */}
        <Select
          value={data.handicap}
          label='ハンデ'
          onChange={(e) => handleChange("handicap", String(e.target.value))}
        >
          {HANDICAP.map((val, idx) => (
            <MenuItem value={idx} key={idx}>{val}</MenuItem>
          ))}
        </Select>
      </Stack>
      <Stack>
        <FormLabel>結果</FormLabel>
        <RadioGroup
          onChange={(e) => handleChange("result", String(e.target.value))}
          value={data.result}
        >
          <Stack direction="row">
            {RESULT.map((val, idx) => (
              <FormControlLabel value={idx - 1} control={<Radio />} label={val} key={idx} />
            ))}
          </Stack>
        </RadioGroup>
      </Stack>
      <Button variant='contained' onClick={handleClick}>
        送信
      </Button>
      <ReturnButton />
    </Stack>
  )
}

export default PostResult
