export const hasNumbers = (text) => {
  const newArray = text.split('')
  for (const value of newArray) {
    if (value / 1) return true
  }
}
