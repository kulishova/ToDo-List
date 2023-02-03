import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../UI/Button'
import styles from './TodosActions.module.css'

function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button title="Clear Completed Todos" disabled={!completedTodosExist}>
        <RiDeleteBin2Line onClick={deleteCompletedTodos} />
      </Button>
    </div>
  )
}

export default TodosActions
