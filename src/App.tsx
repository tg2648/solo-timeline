import styled from 'styled-components';
import { useState } from 'react'
import { DragDropContext, DragStart, DragUpdate, DropResult } from 'react-beautiful-dnd';

import { initialGameData, HandType, CARD_COLLECTION } from './data'
import { Hand } from './Hand'

const Container = styled.div`
  margin-bottom: 10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

function App() {

  const [gameData, setGameData] = useState(initialGameData)

  function onDragStart(start: DragStart) {
    // document.body.style.color = 'orange';
    // document.body.style.transition = 'background-color 0.2s ease';
  }

  function onDragUpdate(update: DragUpdate) {
    // const { destination, source } = update;
    // const opacity = destination
    //   ? destination.index / gameData.hands[source.droppableId].cardIds.length
    //   : 0;

    // document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`
  }

  function onDragEnd(result: DropResult) {
    // document.body.style.color = 'inherit';
    // document.body.style.backgroundColor = 'inherit';

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

    const startHand = gameData.hands[source.droppableId]
    const finishHand = gameData.hands[destination.droppableId]

    // Dropping in the same hand
    if (source.droppableId === destination.droppableId) {

      const newCardIds = Array.from(startHand.cardIds)

      newCardIds.splice(source.index, 1)
      newCardIds.splice(destination.index, 0, draggableId)

      const newHand: HandType = {
        ...startHand,
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

    } else {
      // Dropping in the different hand

      const startCardIds = Array.from(startHand.cardIds)
      startCardIds.splice(source.index, 1);
      const newStartHand: HandType = {
        ...startHand,
        cardIds: startCardIds
      }

      const finishCardIds = Array.from(finishHand.cardIds)
      finishCardIds.splice(destination.index, 0, draggableId);
      const newFinishHand: HandType = {
        ...finishHand,
        cardIds: finishCardIds
      }

      setGameData((oldData) => {
        return {
          ...oldData,
          hands: {
            ...oldData.hands,
            [newStartHand.id]: newStartHand,
            [newFinishHand.id]: newFinishHand,
          }
        }
      })
    }
  }


  return (
    <DragDropContext
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
      onDragEnd={onDragEnd}
    >
      <Container>
        {gameData.handOrder.map((handId) => {
          const hand = gameData.hands[handId]
          const cards = hand.cardIds.map(cardId => CARD_COLLECTION[cardId])

          return (
            <Hand
              key={hand.id}
              hand={hand}
              cards={cards}
            />
          )
        })}
      </Container>
    </DragDropContext>
  )
}

export default App
