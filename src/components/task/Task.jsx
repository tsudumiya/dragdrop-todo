import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './css/task.css';
import { Draggable } from 'react-beautiful-dnd';

const Task = ({ task, taskList, setTaskList, index }) => {
    const handleDelite = (id) => {
        setTaskList(
            taskList.filter((task) => {
                return task.id !== id;
            })
        );
    };
    return (
        <Draggable index={index} draggableId={task.draggableId}>
            {(provided) => {
                return (
                    <div className="taskBox" key={task.id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <p className="taskText">{task.text}</p>
                        <button className="taskTrashButton" onClick={() => handleDelite(task.id)}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                );
            }}
        </Draggable>
    );
};

export default Task;
