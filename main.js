import { questions } from "./questions/questions.js"
import { advancedQuestions } from "./questions/advancedQuestions.js"
import { hardJavaScriptQuestions } from "./questions/hardQuestions.js"
import { hideElement, showElement, shuffleArrayElements } from "./helpers.js"

const questionWrapp = document.querySelector(".question-wrapp")
const submitBtn = document.querySelector("#submit-btn")
let result

const questionsPoll = [questions, advancedQuestions, hardJavaScriptQuestions]

let activePoll
let activeQuestions
let selectedNums = []

//return random number
const randNum = (arr, max = arr.length) => {
  let num = Math.floor(Math.random() * max + 0)

  while (selectedNums.includes(num)) {
    num = Math.floor(Math.random() * max + 0)
  }
  selectedNums.push(num)
  return num
}

// Create element
const createElement = function (type, className) {
  const el = document.createElement(type)
  el.classList.add(className)

  return el
}

// remove all nodes from parent
const clearChilds = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

// return random question object
const questionObj = (arr) => {
  const num = randNum(arr)
  const obj = arr[num]

  return obj
}

// create question element
const generateQuestionElement = (obj) => {
  const para = document.createElement("p")
  para.classList.add("question")
  para.textContent = obj.question

  return para
}

// create answers container
const answerEl = () => {
  const answers = document.createElement("div")
  answers.classList.add("answers-wrapp")

  return answers
}

// create form element
const generateForm = () => {
  const form = document.createElement("form")
  form.setAttribute("id", "submit-form")

  return form
}

//create answer element
const generateAnswers = (obj) => {
  let newObj = { ...obj }
  delete newObj.question
  let n = 0

  let entries = shuffleArrayElements(Object.entries(newObj))

  let answers = ``
  for (const [key, value] of entries) {
    let a = `
        <div class="answer">
        <input type="radio" id=${n} name="answer" value=${
      key === "correctAnswer" ? 1 : 0
    }></input>
        <label for=${n}>${value}</label>
    </div>
        `
    answers += a
    n++
  }

  return answers
}

//Handle correct answer animation
const correctHolder = document.querySelector(".correct")
const outerCircle = document.querySelector(".outer-circle")
const leftBar = document.querySelector(".left-bar")
const rightBar = document.querySelector(".right-bar")

const circleAnimation = async () => {
  outerCircle.classList.add("animate-circle")
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 550)
  })
}

const leftBarAnimation = async () => {
  leftBar.classList.add("animate-left-bar")
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 470)
  })
}

const rightBarAnimation = async () => {
  rightBar.classList.add("animate-right-bar")
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}

const renderCorrect = async () => {
  const previousQuestion = document.querySelector(".question-inner-wrapp")
  previousQuestion.remove()
  correctHolder.style.display = "block"
  correctHolder.style.opacity = "1"
  await circleAnimation()
  await leftBarAnimation()
  await rightBarAnimation()

  setTimeout(() => {
    correctHolder.style.opacity = "0"
    restartAnimation(result)
  }, 2000)

  generateFullQuestion(activeQuestions)
}

const renderIncorrect = async () => {
  const previousQuestion = document.querySelector(".question-inner-wrapp")
  previousQuestion.remove()
  incorrectWrapper.style.display = "block"
  incorrectWrapper.style.opacity = "1"
  incorrectBars.forEach((bar) => bar.classList.add("animate-x-bar"))

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 2200)
  })
  generateFullQuestion(activeQuestions)
}

// Handle incorrect answer animation
const incorrectWrapper = document.querySelector(".incorrect")
const incorrectBars = document.querySelectorAll(".x-bar")

const submitEventHandler = async () => {
  // e.preventDefault()
  let radioInputs = document.querySelectorAll("input[name=answer]")
  for (const input of radioInputs) {
    if (input.checked) {
      result = +input.value
    }
  }
  console.log(result)
  if (!!result) {
    console.log("CORRECT!")
    // 1.hide question window
    // 2. display correct message, after 2sec hide it
    // 3. go to next question
    renderCorrect()
  } else {
    console.log("INCORRECT!")
    // 1. hide question window
    // 2. display incorrect message, after 2sec hide it
    // 3. go to next question

    if (document.querySelector(".question-inner-wrapp")) {
      renderIncorrect()
    }
  }
}

function restartAnimation(result) {
  if (!!result) {
    outerCircle.classList.remove("animate-circle")
    leftBar.classList.remove("animate-left-bar")
    rightBar.classList.remove("animate-right-bar")
  } else if (!result) {
    incorrectBars.forEach((bar) => bar.classList.add("animate-x-bar"))
  }
}

const formEventHandler = (f) => {
  f.addEventListener("submit", submitEventHandler)
}

const generateFullQuestion = async (arr) => {
  //Hide correct element
  if (correctHolder) {
    correctHolder.style.display = "none"
  }
  if (incorrectWrapper) {
    incorrectWrapper.style.display = "none"
  }

  //Create inner wrapp element
  const innerWrapp = createElement("div", "question-inner-wrapp")
  questionWrapp.appendChild(innerWrapp)

  // question object
  const qObj = questionObj(arr)
  // generate p element with question text
  const para = generateQuestionElement(qObj)
  // generate answers wrapp
  const answerWrapp = answerEl()
  // generate form element
  const form = generateForm()
  //generate answers
  const answers = generateAnswers(qObj)

  // remove all child elements
  clearChilds(innerWrapp)
  // add question
  innerWrapp.append(para)
  //add answers to form
  form.insertAdjacentHTML("afterbegin", answers)
  // add form to answer wrapp
  answerWrapp.append(form)
  //append answerWrapp to questionWrapp
  innerWrapp.append(answerWrapp)

  // add event handler to form
  formEventHandler(form)
}

submitBtn.addEventListener("click", submitEventHandler)

// ***Handle modal***
const overlay = document.querySelector(".overlay")
const levelForm = document.querySelector(".levels-form")

const handleLevel = (form) => +form.level.value

levelForm.addEventListener("submit", async function (e) {
  e.preventDefault()
  activePoll = handleLevel(this)
  activeQuestions = questionsPoll[activePoll]

  await new Promise((resolve) => {
    overlay.style.opacity = "0"
    setTimeout(() => {
      resolve()
    }, 900)
  })

  overlay.style.display = "none"

  await generateFullQuestion(activeQuestions)
  showElement(questionWrapp, 800, "flex")
})

window.addEventListener("load", () => {
  showElement(overlay, 1500, "flex")
})

console.log("Hello World")
