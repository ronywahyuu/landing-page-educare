'use strict'
// handle smooth scroll 
const navbarEl = document.querySelector('.navbar-nav')
const learnMoreBtn = document.querySelector('.learn-more')
navbarEl.addEventListener('click', (event) => {
    console.log(event)
    if (event.target.classList.contains('nav-link')) {
        const scrollTo = event.target.getAttribute('href');
        document.querySelector(scrollTo).scrollIntoView({
            behavior: "smooth"
        })
    }
})
learnMoreBtn.addEventListener('click', (event) => {
    console.log(event)
    if (event.target.classList.contains('nav-link')) {
        const scrollTo = event.target.getAttribute('href');
        document.querySelector(scrollTo).scrollIntoView({
            behavior: "smooth"
        })
    }
})

// handle blog data
const blogCardContainer = document.querySelector('.blog-card-container')
const blogContainer = document.querySelector('.blog')
const blogColumn = document.querySelectorAll('.blog-column')[2]

const blogs = [blog1, blog2, blog3, blog4]
console.log(blogs)
const renderBlog = function () {
    blogs.map(blog => {
        const html = `
        <div class="blog-card">
            <div class="meta">
                <div class="photo"
                    style="background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)">
                </div>
                <ul class="details">
                    <li class="author"><a href="#">John Doe</a></li>
                    <li class="date">Aug. 24, 2015</li>
                    
                </ul>
            </div>
        <div class="description">
            <h1>${blog.title}</h1>
            <h2>${blog.tag}</h2>
            <p>${blog.content}</p>
            <p class="read-more">
                <a href="#">Read More</a>
            </p>
        </div>
        </div>
        `

        blogCardContainer.insertAdjacentHTML('afterbegin', html)
    })

}
renderBlog()

// handle testimonial data
const testi1 = {
    id: 1,
    title: "Best platform for online selling",
    testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip exea commodo consequat",
    img: "https://picsum.photos/200",
    name: "Andrew Garfield",
    role: "Entrepreneur"
}
const testi2 = {
    id: 1,
    title: "Best platform for online selling",
    testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip exea commodo consequat",
    img: "https://via.placeholder.com/600/771796",
    name: "Andrew Garfield",
    role: "Entrepreneur"
}
const testi3 = {
    id: 1,
    title: "Best platform for online selling",
    testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip exea commodo consequat",
    img: "https://via.placeholder.com/600/24f355",
    name: "Andrew Garfield",
    role: "Entrepreneur"
}
const testimonials = [testi1, testi2, testi3]


const renderTestimonial = function () {
    testimonials.map(testi => {
        const html = `
            <div class="swiper-slide">
              <div class="testimonial">
                <h5 class="testimonial-header" style="color: #EC7E50;">"Best    platform for online selling"</h5>

                <blockquote class="testimonial-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex
                    ea commodo consequat.
                </blockquote>

                <address class="testimonial-author d-flex">
                    <img class="testimonial-photo" src="${testi.img}" alt="">

                    <div class="testimonial-author-text d-flex flex-column justify-content-center">
                        <h6 class="testimonial-name">Andrew Garfield</h6>
                        <p class="testimonial-role">Entrepreneur</p>
                    </div>
                </address>
              </div>
            </div>        
        `
        document.querySelector('.swiper-wrapper').insertAdjacentHTML('afterbegin',html)
    })
}

renderTestimonial()

// handle swiper js
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});

function checkObj(obj, checkProp) {

            //bener
            return (obj.hasOwnProperty(checkProp)) ? obj[checkProp] : "Not Found"

            //undefined
            return (obj.hasOwnProperty(checkProp)) ? obj.av : "Not Found"

        }

        checkObj({
            gift: "pony",
            pet: "kitten",
            bed: "sleigh"
        }, "gift")

        document.write(checkObj({
            gift: "pony",
            pet: "kitten",
            bed: "sleigh"
        }, "gift"))