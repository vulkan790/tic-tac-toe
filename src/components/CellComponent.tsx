import React from 'react'
import { CeilProps } from "../types/types"

function CellComponent({ value, onClick }: CeilProps)
{
    return (
        <button className="cell" onClick={onClick} disabled={value !== null}>
            { value }
        </button>
    )
}

export default CellComponent