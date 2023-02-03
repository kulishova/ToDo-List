import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')
  const onSubmitHendler = (event) => {
    event.preventDefault() // вызываем метод, чтобы не выполнять действия по умолчанию при сабмите формы
    addTodo(text) // добавляем новую задачу в массив задач, в компоненте App меняем состояние
    setText('') // обнуляем значение в поле ввода т.е. возвращаем пустую строку
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHendler}>
        <input
          placeholder="Enter new todo"
          value={text} //  получаем значение из состояния компонента
          onChange={(e) => setText(e.target.value)} //  передаем значении формы в функции setText
        />
        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default TodoForm
