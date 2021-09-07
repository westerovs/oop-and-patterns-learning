const wrapper = document.querySelector('.wrapper');

const SHOW_TIME = 5000

const toast = (message) => {
    const container = document.createElement('div')
    container.classList.add('message')
    container.textContent = message
    wrapper.append(container)
    
    setTimeout(() => container.remove(), SHOW_TIME)
}

export {
    toast
}

