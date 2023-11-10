// CSS
import styles from './TaskList.module.css'

export default function TaskList({ taskList }) {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id}>
            <div>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div>
              <span>&#8665;</span>{/* Trocar por um SVG */}
              <span>&#8855;</span>
            </div>
          </div>
        ))
      ) : (
        <p>Não tem tarefas cadastradas</p>
      )}
    </>
  )
}
