function CellComponent({ value, onClick })
{
    return (
        <button className="cell" onClick={onClick} disabled={value !== null}>
            { value }
        </button>
    )
}

export default CellComponent