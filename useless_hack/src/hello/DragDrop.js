import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import './DragDrop.css'
import { useState } from "react"
export const DragDrop = () => {
    const [letter,setLetter] = useState[
        {
            id: 0,
            char: "H"
        },
        {
            id: 1,
            char: "E"
        }
    ]
    function handleDragEnd(result) {
        const newLet=Array.from(letter);
    }
    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="letters">
                {(provided) => (
                    <ul ref={provided.innerRef} {...provided.droppableProps}>
                        {letter.map(({ id, char }, index) =>
                            <Draggable key={id} draggableId={id.toString()} index={index}>
                                {(provided) => (
                                    <li  ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
                                        <div className={`box ${char}`}>{char}</div>
                                    </li>
                                )}
                            </Draggable>
                        )}
                        {provided.placeholder}
                    </ul>
                )}

            </Droppable>
        </DragDropContext>)
}