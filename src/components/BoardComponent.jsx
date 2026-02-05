import CellComponent from "./CellComponent"

function BoardComponent({ board, onCellClick })
{
    return (
        <div className="board">
            {board.map((value, index) => (
                <CellComponent key={index} value={value} onClick={() => onCellClick(index)} />
            ))}
        </div>
    )
}

export default BoardComponent