// CSS
import styles from './Modal.module.css'

export default function Modal({ children }) {
  const closeModal = (e) => {
    const modal = document.querySelector('#modal')
    modal?.classList.add('hide')
  }

  return (
    <div id="modal" className='hide'>
      <div className={styles.fade} onClick={closeModal}></div>
      <div className={styles.modal}>
        <h2>Texto Modal</h2>
        {children}
      </div>
    </div>
  )
}
