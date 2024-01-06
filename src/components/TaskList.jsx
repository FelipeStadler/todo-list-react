// CSS
import styles from './TaskList.module.css'

export default function TaskList({ taskList, handleDelete, handleEdit }) {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id}>
            <div>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.acoes}>
              <img src='edit.svg' onClick={() => handleEdit(task)} />
              <img src='delete.svg' onClick={() => handleDelete(task.id)} />
            </div>
            <br/>
          </div>
        ))
      ) : (
        <p>Não tem tarefas cadastradas</p>
      )}
    </>
  )
}
