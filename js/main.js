// Swiper
var swiper = new Swiper(".popular-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      510: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      758: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      900: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

    //search function
    let search = document.querySelector("#search-input");
    let searchButton = document.querySelector('#searchButton')
    let myWebsiteUrl = 'https://www.scss.tcd.ie/~connolr3/TPLF/index.html' //change URL to current url where website is hosted like the scss one
  
    search.addEventListener('keydown', function(event){
      if (event.key === 'Enter'){
        const searchQuery = search.value;
        console.log("User searched for:", searchQuery);
        const searchURL = `https://www.google.com/search?q=${searchQuery}&as?sitesearch=${myWebsiteUrl}`;
        window.open(searchURL, '_blank');
  
      }
    });
    
  // Show Video
  let playButton = document.querySelector(".play-movie");
  let video = document.querySelector(".video-container");
  let myvideo = document.querySelector("#myvideo");
  let closebtn = document.querySelector(".close-video");
  
  playButton.onclick = () => {
    video.classList.add("show-video");
    // Auto Play When Click On Button
    myvideo.play();
  };
  closebtn.onclick = () => {
    video.classList.remove("show-video");
    // Pause On Close Video
    myvideo.pause();
  }; 

