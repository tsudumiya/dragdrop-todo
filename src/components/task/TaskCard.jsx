import React from 'react';
import TaskAddInput from './input/TaskAddInput';
import TaskCardDeliteButton from './button/TaskCardDeliteButton';
import TaskCardTitle from './TaskCardTitle';
import Tasks from './Tasks';
import './css/task.css';
import { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';

const TaskCard = ({ taskCardsList, setTaskCardsList, taskCard, index }) => {
    const [inputText, setInputText] = useState('');
    const [taskList, setTaskList] = useState([]);

    return (
        <Draggable draggableId={taskCard.id} index={index}>
            {(provided) => (
                <div className="taskCard" ref={provided.innerRef} {...provided.draggableProps}>
                    <div className="taskCardTitleAndTaskCardDeliteButtonArea" {...provided.dragHandleProps}>
                        <TaskCardTitle />
                        <TaskCardDeliteButton taskCardsList={taskCardsList} setTaskCardsList={setTaskCardsList} taskCard={taskCard} />
                    </div>
                    <TaskAddInput inputText={inputText} setInputText={setInputText} taskList={taskList} setTaskList={setTaskList} />
                    <Tasks inputText={inputText} taskList={taskList} setTaskList={setTaskList} />
                </div>
            )}
        </Draggable>
    );
};

export default TaskCard;
