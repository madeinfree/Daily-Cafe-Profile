(function() {
  let navTop = document.getElementsByClassName('nav-top')[0]
  let heroWrapper = document.getElementsByClassName('hero-wrapper')[0]
  let profileComposeTopLeft = document.getElementsByClassName('profile-compose-top-left')[0]
  let profileComposeTopRight = document.getElementsByClassName('profile-compose-top-right')[0]
  let profileCircleImage = document.querySelector('.profile-circle-picture .image img')
  window.addEventListener('scroll', function(e) {
    if (window.scrollY > 150) {
      navTop.classList.add('nav-top-hidden')
      heroWrapper.classList.add('hero-wrapper-slide-up')
      profileComposeTopLeft.classList.add('profile-compose-top-left-slide')
      profileComposeTopRight.classList.add('profile-compose-top-right-slide')
      profileCircleImage.style.transform = 'scale(1)'
    } else {
      navTop.classList.remove('nav-top-hidden')
      heroWrapper.classList.remove('hero-wrapper-slide-up')
      profileComposeTopLeft.classList.remove('profile-compose-top-left-slide')
      profileComposeTopRight.classList.remove('profile-compose-top-right-slide')
      profileCircleImage.style.transform = 'scale(0)'
    }
  })
}())
