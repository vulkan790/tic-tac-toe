import { useState } from 'react'
import BoardComponent from './components/BoardComponent'
import StatusComponent from './components/StatusComponent'
import './App.css'

function App() 
{
    const [board, setBoard] = useState(Array(9).fill(null))
    const [isXNext, setIsXNext] = useState(true)
    const [winner, setWinner] = useState(null)

    function calculateWinner(board)
    {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (const [a, b, c] of lines)
        {
            if (board[a] && board[a] === board[b] && board[a] === board[c])
                return board[a];
        }

        if (board.every(cell => cell !== null))
            return 'draw';
        return null;
    }

    const handleCellClick = (index) => {
        if (board[index] || winner)
            return
        
        const newBoard = [...board]
        newBoard[index] = isXNext ? 'X' : 'O'

        setBoard(newBoard)
        setIsXNext(!isXNext)

        const gameWinner = calculateWinner(newBoard);
        if (gameWinner)
            setWinner(gameWinner);
    }

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
        setWinner(null);
    }
 
    return (
        <div className="app">
            <h1>Крестики - нолики</h1>
            <BoardComponent board={board} onCellClick={handleCellClick} />
            <StatusComponent winner={winner} isXNext={isXNext} />
            <button onClick={resetGame}>Новая игра</button>
        </div>
    );
}

export default App