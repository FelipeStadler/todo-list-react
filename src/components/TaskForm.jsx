import { useState, useEffect } from 'react'

// CSS
import styles from './TaskForm.module.css'

export default function TaskForm({ btnText, taskList, setTaskList }) {

  const [id, setId] = useState(0)
  const [title, setTitle] = useState('')
  const [difficulty, setDifficulty] = useState(0)

  const addTaskHandler = (e) => {
    e.preventDefault()

    const id = Math.floor(Math.random() * 1000)
    const newTask = {id, title, difficulty}

    setTaskList([...taskList, newTask])

    setTitle('')
    setDifficulty(0)
  }

  const handleChange = (e) => {
    if(e.target.name == 'title') {
      setTitle(e.target.value)
    } else {
      setDifficulty(parseInt(e.target.value))
    }
  }

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor='title'>Título:</label>
        <input
          type='text'
          name='title'
          placeholder='Título da tarefa'
          value={title}
          onChange={handleChange}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor='difficulty'>Dificuldade:</label>
        <input
          type='text'
          name='difficulty'
          placeholder='Dificuldade da tarefa'
          value={difficulty}
          onChange={handleChange}
        />
      </div>
      <input type='submit' value={btnText} />
    </form>
  )
}
