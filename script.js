// Smooth scroll active menu
    document.querySelectorAll('nav a').forEach(link=>{
      link.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
        document.querySelectorAll('nav a').forEach(a=>a.classList.remove('active'));
        this.classList.add('active');
      });
    });

    // Reveal on scroll animation
    function reveal() {
      document.querySelectorAll('.reveal .team-member, .reveal .program, .reveal .testimonial').forEach(el=>{
        const rect = el.getBoundingClientRect();
        if(rect.top < window.innerHeight - 50){
          el.style.opacity=1;
          el.style.transform='translateY(0)';
        }
      });
    }
    window.addEventListener('scroll', reveal);
    reveal();

    // Countdown Timer
    const countdownDate = new Date("Aug 30, 2025 23:59:59").getTime();
    const timer = setInterval(function(){
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;
      if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "Admissions Closed";
      }
    }, 1000);


  // Array of images for the carousel
  const images = [
    "img/event1.jpg",
    "img/hero1.jpg",
    "img/hero2.jpg",
    "img/hero3.jpg"
  ];

  let currentIndex = 0;
  const header = document.querySelector("header");

  function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length; // Loop back when it reaches the end
    header.style.background = `linear-gradient(rgba(0,64,128,0.6), rgba(0,64,128,0.6)), url('${images[currentIndex]}') center/cover no-repeat`;
  }

  // Change every 5 seconds
  setInterval(changeBackground, 5000);


