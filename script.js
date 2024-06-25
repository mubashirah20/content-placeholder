const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

//for all elements that have animated-bg/text classes
const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_text = document.querySelectorAll('.animated-bg-text')

//timeout to only show for a while
setTimeout(getData, 2500)

//to define the data we want to insert
function getData {
    header.innerHTML ='<img src="images/bird-8788491_1280.jpg" alt="">'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quasi?'
    profile_img.innerHTML = '<img src="images/ai-generated-8700791_1280.jpg" alt="">'
    name.innerHTML = 'John Doe'
    date.innerHTML = 'June 24,2024'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bgs_text.forEach(bg => bg.classList.remove('animated-bg-text'))
}