const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


const navLink = document.querySelectorAll('.nav_link')
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



const contactForm = document.getElementById('contact_form'),
        contactMessage = document.getElementById('contact_message')
        userContact = document.getElementById('user_contact')

const sendEmail = (e) =>{
    e.preventDefault()

    if(userContact.value === ''){
        contactMessage.textContent = 'You must enter a email above ⬆️'
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)
    } 
    else{
        emailjs.sendForm('service_yn09ajl', 'template_4a1upgg', '#contact_form', 'OSJrRexS5hMxOvYeb')
        .then(()=> {
                contactMessage.textContent = 'You have been subscribed'
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)


        }, (error) =>{
            alert('Something has failed...Try Again', error)
        })
        userContact.value = ''
    }
}

contactForm.addEventListener('submit', sendEmail,)

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.data, footer_container, grouping`)
sr.reveal(`.bg_image`, {delay: 700, origin: 'bottom'})
sr.reveal(`.card, .coach_card, .plan_card`, {interval: 100})
