export type Users = {
    name: string,
    rate: number,
}

export const DEFAULT_USER: Users = {
    name: "",
    rate: 1500,
}

export type Datas = {
    black: string,
    white: string,
    handicap: number,
    result: number,
}

export const DEFAULT_DATA: Datas = {
    black: "",
    white: "",
    handicap: 0,
    result: 0,
}