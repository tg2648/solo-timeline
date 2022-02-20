import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

import { CardType } from './data'
import sampleImg from './sample.png'

type CardProps = {
   key: string,
   card: CardType,
   index: number,
   isYearDisplayed: boolean,
   isDragDisabled: boolean,
}

type ContainerProps = {
   isDragging: boolean
}

const Container = styled.div<ContainerProps>`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   width: 100px;
   height: 160px;
   border: 1px solid lightgrey;
   border-radius: 8px;
   margin-right: 8px;
   background-color: ${props => props.isDragging ? 'lightgreen' : 'white'};
`

const CardContent = styled.div`
   margin-top: 5px;
`

const CardYear = styled.div`
   margin-bottom: 5px;
`

const CardYearPlaceholder = styled(CardYear)`
   min-height: 18px;
`

const CardImg = styled.div`
   margin-top: 7px;
   margin-bottom: 7px;
   height: 100%;
   width: 100%;
   background: url(${sampleImg}) no-repeat center;
   background-size: cover;
   filter: invert(100%);
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
                     <CardContent>
                        {props.card.content}
                     </CardContent>
                     <CardImg></CardImg>
                        {
                           props.isYearDisplayed
                           ? <CardYear>{props.card.year}</CardYear>
                           : <CardYearPlaceholder/>
                        }
                  </Container>
               )
            }
         }
      </Draggable>
   )
}
