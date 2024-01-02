const hideElement = async (element, ms) => {
  element.style.transition = `opacity ${ms - 50}ms`

  await new Promise((resolve) => {
    element.style.opacity = "0"
    setTimeout(() => {
      resolve()
    }, ms)
  })

  element.style.display = "none"
}

const showElement = async (element, ms, displayType = "flex") => {
  const style = window.getComputedStyle(element)
  element.style.transition = element.style.transition
    ? `${style.transition}, opacity ${ms}ms ease-in`
    : `opacity ${ms}ms`

  element.style.display = displayType

  await new Promise((resolve) => {
    //   element.style.opacity = "1"
    setTimeout(() => {
      resolve()
    }, ms)
  })

  element.style.opacity = "1"
  console.log(style.transition, element)
}

// This function will shuffle array elements and return a new array
const shuffleArrayElements = (arr) => {
  let min = 0
  let max = arr.length
  const sequence = []
  const shuffleArray = []
  let num

  for (let i = min; i < max; i++) {
    num = Math.floor(Math.random() * (max - min)) + min

    if (sequence.includes(num)) {
      while (sequence.includes(num)) {
        num = Math.floor(Math.random() * (max - min)) + min
      }
    }
    sequence.push(num)

    shuffleArray.push(arr[num])
  }

  return shuffleArray
}

export { hideElement, showElement, shuffleArrayElements }
