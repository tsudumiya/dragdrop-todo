import React from 'react';
import Task from './Task';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { faReorder } from '@fortawesome/free-solid-svg-icons';

const reorder = (taskList, startIndex, endIndex) => {
    // タスクを並び替える
    const remove = taskList.splice(startIndex, 1); // [2,3]
    taskList.splice(endIndex, 0, remove[0]); // [2,1,3]
};

const Tasks = ({ taskList, setTaskList }) => {
    const handleDragEnd = (result) => {
        reorder(taskList, result.source.index, result.destination.index);
        setTaskList(taskList);
    };
    return (
        <div>
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => {
                        return (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                {taskList.map((task, index) => {
                                    /* return <div>{task.text}</div>; */
                                    return (
                                        <div key={task.id}>
                                            <Task index={index} task={task} taskList={taskList} setTaskList={setTaskList} />
                                        </div>
                                    );
                                })}
                                {provided.placeholder}
                            </div>
                        );
                    }}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

export default Tasks;
