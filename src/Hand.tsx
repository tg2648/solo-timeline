import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'

import { HandType, CardType } from './initial_data'
import { Card } from './Card'

type HandProps = {
   key: string,
   hand: HandType,
   cards: CardType[]
}

type CardListType = {
   isDraggingOver: boolean
}

const Container = styled.div`
   margin: 8px;
   border: 1px solid lightgrey;
   border-radius: 2px;
   width: 200px;

   display: flex;
   flex-direction: column;
`

const CardList = styled.div<CardListType>`
   padding: 8px;
   transition: background-color 0.2s ease;
   background-color: ${props => props.isDraggingOver ? 'skyblue' : 'white'};
   flex-grow: 1;
   min-height: 100px;
`

export function Hand(props: HandProps) {
   return (
      <Container>
         <Droppable droppableId={props.hand.id}>
            {(provided, snapshot) => {
               return (
                  <CardList
                     {...provided.droppableProps}
                     ref={provided.innerRef}
                     isDraggingOver={snapshot.isDraggingOver}
                  >
                     {props.cards.map((card, index) => {
                        return (
                           <Card key={card.id} card={card} index={index} />
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