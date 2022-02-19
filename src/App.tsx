import { useState } from 'react'
import { DragDropContext, DragStart, DropResult } from 'react-beautiful-dnd';

import './App.css'
import { initialGameData, HandType, GameData } from './initial_data'
import { Hand } from './Hand'


function App() {

  const [gameData, setGameData] = useState(initialGameData)

  function onDragStart(start: DragStart) {
    document.body.style.color = 'orange';
    document.body.style.transition = 'background-color 0.2s ease';
  }

  function onDragEnd(result: DropResult) {
    document.body.style.color = 'inherit';
    document.body.style.backgroundColor = 'inherit';

    const { destination, source, draggableId } = result;
    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      // Dropped back into the same location
      return
    }

    const hand = gameData.hands[source.droppableId]
    const newCardIds = Array.from(hand.cardIds)

    newCardIds.splice(source.index, 1)
    newCardIds.splice(destination.index, 0, draggableId)

    const newHand: HandType = {
      ...hand,
      cardIds: newCardIds
    }

    setGameData((oldData) => {
      return {
        ...oldData,
        hands: {
          ...oldData.hands,
          [newHand.id]: newHand,
        }
      }
    })
  }


  return (
    <DragDropContext
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      {gameData.handOrder.map((handId) => {
        const hand = gameData.hands[handId]
        const cards = hand.cardIds.map(cardId => gameData.cards[cardId])

        return (
          <Hand key={hand.id} hand={hand} cards={cards} />
        )
      })}
    </DragDropContext>
  )
}

export default App
