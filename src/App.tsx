import { useState } from 'react'
import logo from './logo.svg'
import { DragDropContext, DragStart, DropResult } from 'react-beautiful-dnd';
import './App.css'

function App() {

  function onDragStart(start: DragStart) {
    document.body.style.color = 'orange';
    document.body.style.transition = 'background-color 0.2s ease';
  }

  function onDragEnd(result: DropResult) {
    document.body.style.color = 'inherit';
    document.body.style.backgroundColor = 'inherit';

    const { destination, source, draggableId } = result;
  }

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
      onDragStart={onDragStart}
    >

    </DragDropContext>
  )
}

export default App
