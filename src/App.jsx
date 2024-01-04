import { useState } from 'react'

// components
import Footer from './components/Footer'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import Modal from './components/Modal'

//CSS
import styles from './App.module.css'

function App() {
  const [taskList, setTaskList] = useState([])

  const deleteTask = (id) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id
      })
    )
  }

  const hideOrShowModal = (display) => {
    const modal = document.querySelector('#modal')
    if(display){
      modal?.classList.remove('hide')
    } else{
      modal?.classList.add('hide')
    }
  }

  const editTask = () => {
    hideOrShowModal(true)
  }

  return (
    <div>
      <Modal children={<TaskForm btnText='Editar Tarefa' taskList={taskList} />} />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm
            btnText='Criar Tarefa'
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask} handleEdit={editTask} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
