import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

import { CardType } from './initial_data'

type CardProps = {
   key: string,
   card: CardType,
   index: number,
   isDragDisabled: boolean,
}

type ContainerProps = {
   isDragging: boolean
}

const Container = styled.div<ContainerProps>`
   display: flex;
   justify-content: center;
   align-items: center;

   width: 100px;
   height: 150px;
   border: 1px solid lightgrey;
   border-radius: 8px;
   padding: 8px;
   margin-right: 8px;
   background-color: ${props => props.isDragging ? 'lightgreen' : 'white'};
`

export function Card(props: CardProps) {
   return (
      <Draggable
         draggableId={props.card.id}
         index={props.index}
         isDragDisabled={props.isDragDisabled}
      >
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
