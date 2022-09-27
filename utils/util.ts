import { K, RANK } from '../constants/constants'
import { getRateFromName } from '../repositories/userRepo'

export const calc_rate = async (
  b: string,
  w: string,
  handi: number,
  result: number,
): Promise<number[]> => {
  const b_rate: number = await getRateFromName(b)
  const w_rate: number = await getRateFromName(w)
  const dif: number = (b_rate - w_rate + handi * 50) * result
  const width: number = Math.round((dif / 800 + 0.5) * K)
  const new_b: number = b_rate - width * result
  const new_w: number = w_rate + width * result
  return [new_b, new_w]
}

export const rate_to_rank = (rate: number): string => {
  const idx = Math.floor((rate - 1000) / 50)
  const rank = RANK[idx]
  return rank
}
