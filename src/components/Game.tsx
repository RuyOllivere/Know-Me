import { Chess } from 'chess.js';
import { useRef, useState } from 'react';
import { Chessboard, type PieceDropHandlerArgs } from 'react-chessboard';

function Game() {
  const chessGameRef = useRef(new Chess());
  const chessGame = chessGameRef.current;

  // track the current position of the chess game in state to trigger a re-render of the chessboard - Random move
  const [chessPosition, setChessPosition] = useState(chessGame.fen());

  // make a random "CPU" move
  function makeRandomMove() {
    // get all possible moves`
    const possibleMoves = chessGame.moves();

    // exit if the game is over
    if (chessGame.isGameOver()) {
      return;
    }

    // pick a random move
    const randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];

    // make the move
    chessGame.move(randomMove);

    // update the position state
    setChessPosition(chessGame.fen());
  }

  // handle piece drop
  function onPieceDrop({
    sourceSquare,
    targetSquare
  }: PieceDropHandlerArgs) {
    if (!targetSquare) {
      return false;
    }

    try {
      const move = chessGame.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q'
      });

      if (move) {
        setChessPosition(chessGame.fen());

        if (
          chessGame.history().length === 1 &&
          move.from === 'g2' &&
          move.to === 'g4'
        ) {
          alert("You won't be alone anymore! For the top salesperson who will break sales records");
        }

        setTimeout(makeRandomMove, 500);
        return true;
      }

      return false;
    } catch {
      return false;
    }
  }

  const chessboardOptions = {
    position: chessPosition,
    onPieceDrop,
    id: 'play-vs-random'
  };

  return (
    <Chessboard options={chessboardOptions} />
  );
}

export default Game;
