import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'

import { HandType, CardType } from './data'
import { Card } from './Card'

type HandProps = {
   key: string,
   hand: HandType,
   cards: CardType[],
}

type CardListType = {
   isDraggingOver: boolean
}

const Container = styled.div`
   display: flex;
   flex-direction: column;
   margin: 8px;
   border: 1px solid lightgrey;
   border-radius: 2px;
`

const CardList = styled.div<CardListType>`
   display: flex;

   padding: 8px;
   transition: background-color 0.2s ease;
   background-color: ${props => props.isDraggingOver ? 'skyblue' : 'white'};
   flex-grow: 1;
   min-height: 170px;
`

export function Hand(props: HandProps) {
   return (
      <Container>
         <Droppable droppableId={props.hand.id} direction='horizontal'>
            {(provided, snapshot) => {

               // Only drag from hand to timeline
               const isDragDisabled = props.hand.id === 'timeline'
               const isYearDisplayed = props.hand.id === 'timeline'

               return (
                  <CardList
                     {...provided.droppableProps}
                     ref={provided.innerRef}
                     isDraggingOver={snapshot.isDraggingOver}
                  >
                     {props.cards.map((card, index) => {
                        return (
                           <Card
                              key={card.id}
                              card={card}
                              index={index}
                              isYearDisplayed={isYearDisplayed}
                              isDragDisabled={isDragDisabled} />
                        )
                     })}
                     {provided.placeholder}
                  </CardList>
               )
            }}
         </Droppable>
      </Container>
   )
}