import React, { useState } from 'react';
import AddTaskCardButton from './button/AddTaskCardButton';
import TaskCard from './TaskCard';
import './css/task.css';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const reorder = (taskCardsList, startIndex, endIndex) => {
    // タスクを並び替える
    const remove = taskCardsList.splice(startIndex, 1); // [2,3]
    taskCardsList.splice(endIndex, 0, remove[0]); // [2,1,3]
};

const TaskCards = () => {
    const [taskCardsList, setTaskCardsList] = useState([
        {
            id: '0',
            draggableId: 'item0',
        },
    ]);

    const handleDragEnd = (result) => {
        reorder(taskCardsList, result.source.index, result.destination.index);
        setTaskCardsList(taskCardsList);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppable" direction="horizontal">
                {(provided) => (
                    <div className="taskCardsArea" {...provided.droppableProps} ref={provided.innerRef}>
                        {taskCardsList.map((taskCard, index) => {
                            return <TaskCard key={taskCard.id} taskCardsList={taskCardsList} setTaskCardsList={setTaskCardsList} taskCard={taskCard} index={index} />;
                        })}
                        {provided.placeholder}
                        <AddTaskCardButton taskCardsList={taskCardsList} setTaskCardsList={setTaskCardsList} />
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default TaskCards;
