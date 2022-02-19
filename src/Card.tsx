import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

import { CardType } from './initial_data'

type CardProps = {
   key: string,
   card: CardType,
   index: number,
}

type ContainerProps = {
   isDragging: boolean
}

const Container = styled.div<ContainerProps>`
   border: 1px solid lightgrey;
   border-radius: 8px;
   padding: 8px;
   margin-bottom: 8px;
   background-color: ${props => props.isDragging ? 'lightgreen' : 'white'};
`

export function Card(props: CardProps) {
   return (
      <Draggable draggableId={props.card.id} index={props.index}>
         {
            (provided, snapshot) => {
               return (
                  <Container
                     {...provided.draggableProps}
                     {...provided.dragHandleProps}
                     ref={provided.innerRef}
                     isDragging={snapshot.isDragging}
                  >
                     {props.card.content}
                  </Container>
               )
            }
         }
      </Draggable>
   )
}
