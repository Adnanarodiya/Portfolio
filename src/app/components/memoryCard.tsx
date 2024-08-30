"use client"
import React, { useState, useEffect } from 'react';

interface Card {
  id: number;
  emoji: string;
}

const MemoryCard: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [solved, setSolved] = useState<number[]>([]);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [moves, setMoves] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const emojis: string[] = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = (): void => {
    const shuffledCards: Card[] = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({ id: index, emoji }));
    setCards(shuffledCards);
    setFlipped([]);
    setSolved([]);
    setDisabled(false);
    setMoves(0);
    setGameOver(false);
  };

  const handleClick = (id: number): void => {
    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);
    } else if (flipped.length === 1) {
      setDisabled(true);
      setFlipped([flipped[0], id]);
      setMoves((prevMoves) => prevMoves + 1);

      if (cards[flipped[0]].emoji === cards[id].emoji) {
        setSolved((prevSolved) => [...prevSolved, flipped[0], id]);
        setFlipped([]);
        setDisabled(false);
        if (solved.length + 2 === cards.length) setGameOver(true);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setDisabled(false);
        }, 1000);
      }
    }
  };

  const cardContent = (id: number, emoji: string, isFlipped: boolean): JSX.Element => {
    return (
      <div
        className={`w-16 h-16 flex items-center justify-center text-3xl cursor-pointer rounded-lg transition-all duration-300 ${
          isFlipped 
            ? 'bg-white text-black' 
            : 'bg-black text-white hover:bg-gray-800'
        } border border-gray-300`}
        onClick={() => !disabled && !isFlipped && handleClick(id)}
      >
        {isFlipped ? emoji : '?'}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-4 text-white">
      <h1 className="text-4xl font-bold mb-4 ">Memory Card Game</h1>
      <div className="mb-4">
        <span className="text-xl font-semibold ">Moves: {moves}</span>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-4">
        {cards.map((card) => (
          <div key={card.id}>
            {cardContent(
              card.id,
              card.emoji,
              flipped.includes(card.id) || solved.includes(card.id)
            )}
          </div>
        ))}
      </div>
      {gameOver && (
        <div className="text-2xl font-bold mb-4 ">
          Congratulations! You won in {moves} moves!
        </div>
      )}
      <button
        className="px-4 py-2 bg-white text-black rounded hover:bg-gray-800 transition-colors duration-300"
        onClick={initializeGame}
      >
        New Game
      </button>
    </div>
  );
};

export default MemoryCard;