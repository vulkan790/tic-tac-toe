export type CeilValue = "X" | "O" | null

export interface CeilProps
{
    value: CeilValue
    onClick: () => void
}

export interface BoardProps
{
    board: CeilValue[]
    onCellClick: (index: number) => void
}

export interface StatusProps
{
    winner: CeilValue | "draw" | null
    isXNext: boolean
}