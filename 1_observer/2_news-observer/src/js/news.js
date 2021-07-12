import Observer from './observer.js'
import Gleb from './users/gleb.js'
import Paul from './users/paul.js'

class News extends Observer{
    constructor() {
        super()
        this.newsText = document.querySelector('.news-text')
    }
    
    createNews() {
        this.newsText.innerHTML = this.news
    }
}

const autoNews = new News()

// create users
const ivan = new Paul()
const gleb = new Gleb()

// register users
autoNews.register(ivan)
autoNews.register(gleb)

autoNews.setNews('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae consectetur ipsa')
autoNews.createNews()

