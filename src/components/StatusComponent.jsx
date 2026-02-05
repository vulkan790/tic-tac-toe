function StatusComponent({ winner, isXNext })
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