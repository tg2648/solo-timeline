import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

import { CardType } from './initial_data'

type CardProps = {
   key: string,
   card: CardType,
   index: number,
}

const Container = styled.div`
   border: 1px solid lightgrey;
   border-radius: 8px;
   padding: 8px;
   margin-bottom: 8px;
   /* background-color: white; */
`

export function Card(props: CardProps) {
   return (
      <Draggable draggableId={props.card.id} index={props.index}>
         {
            (provided) => {
               return (
                  <Container
                     {...provided.draggableProps}
                     {...provided.dragHandleProps}
                     ref={provided.innerRef}
                  >
                     {props.card.content}
                  </Container>
               )
            }
         }
      </Draggable>
   )
}
