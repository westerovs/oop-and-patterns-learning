import messageView from './message.js'
import abstractObservable  from './observable.js'

const observable = new abstractObservable()

const push = (text) => () => new messageView().create(text)

const messageNew = push('New message !')
const messageChat = push('Новое сообщение в чате !')

observable.add(messageNew)
observable.add(messageChat)
// observable.remove(messageNew)

const button = document.querySelector('.button')
button.addEventListener('click', () => observable.notify())

