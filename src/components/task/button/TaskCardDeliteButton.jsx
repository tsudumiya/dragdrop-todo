import React from 'react';
import '../css/task.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const TaskCardDeliteButton = ({ taskCardsList, setTaskCardsList, taskCard }) => {
    const taskCardDeliteButton = (id) => {
        // タスクカードを削除する
        setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
    };
    return (
        <div>
            <button className="taskCardDeliteButton" onClick={() => taskCardDeliteButton(taskCard.id)}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
        </div>
    );
};

export default TaskCardDeliteButton;
