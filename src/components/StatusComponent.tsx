import React from 'react'
import { StatusProps } from "../types/types"

function StatusComponent({ winner, isXNext }: StatusProps)
{
    if (winner)
    {
        return (
            <div className="status">
                Победитель: <strong>{ winner }</strong>
            </div>
        )
    }

    return (
        <div className="status">
            Следующий игрок: <strong>{ isXNext ? 'X' : 'O' }</strong>
        </div>
    )
}

export default StatusComponent