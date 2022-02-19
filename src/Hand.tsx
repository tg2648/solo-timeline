import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'

import { HandType, CardType } from './initial_data'
import { Card } from './Card'

type HandProps = {
   key: string,
   hand: HandType,
   cards: CardType[]
}

const Container = styled.div`
   margin: 8px;
   border: 1px solid lightgrey;
   border-radius: 2px;
`

const CardList = styled.div`
   padding: 8px;
`

export function Hand(props: HandProps) {
   return (
      <Container>
         <Droppable droppableId={props.hand.id}>
            {(provided, snapshot) => {
               return (
                  <CardList
                     ref={provided.innerRef}
                     {...provided.droppableProps}
                  >
                     {props.cards.map((card, index) => {
                        <Card key={card.id} card={card} index={index} />
                     })}
                     {provided.placeholder}
                  </CardList>
               )
            }}
         </Droppable>
      </Container>
   )
}