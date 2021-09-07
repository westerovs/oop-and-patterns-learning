import { toast } from './message.js'

const button = document.querySelector('.button')

const Observable = {
    _observers: [],
    add(callback) {
        this._observers.push(callback)
    },
    remove(callback) {
        this._observers = this._observers
            .filter(
                (callbackInStock) => callbackInStock !== callback,
            )
    },
    notify() {
        this._observers.forEach((callback) => callback())
    },
}

const push = (message) => () => toast(message)

const pushNewEmail = push('Вам пришло письмо !')
const pushNewChatMessage = push('Новое сообщение в чате !')

Observable.add(pushNewEmail)
Observable.add(pushNewChatMessage)

Observable.remove(pushNewEmail)

button.addEventListener('click', () => Observable.notify())
