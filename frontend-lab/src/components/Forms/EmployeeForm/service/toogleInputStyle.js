import styles from '../EmployeeForm.module.css'

export const toogleInputStyle = (input, fieldHasError) => {
  if (fieldHasError) {
    input.classList.add(styles.inputInCaseOfError)
    input.classList.remove(styles.inputInCaseOfSuccess)
  } else {
    input.classList.remove(styles.inputInCaseOfSuccess)
    input.classList.remove(styles.inputInCaseOfError)
  }
}
