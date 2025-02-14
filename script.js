

lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  'albumLabel':'image %1 of %2',
  'disableScrolling':true,
  
})


    function showAlert() {
        alert("Are you sure you want to open this link?");
    }



const loader = document.querySelector(".loader");
const wrapper = document.querySelector(".wrapper");

document.addEventListener("DOMContentLoaded", async function () {
  await delay(400); // Wait for 400ms
  console.log("Hiding loader");
  await fadeout();
  wrapper.style.display = "block";
});

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function fadeout() {
  return new Promise((resolve) => {
    gsap.to(loader, {
      opacity: 0,
      duration: 0.75,
      onComplete: function () {
        console.log("animationcomplete");
        resolve();
      },
    });
  });
}

const quotes = [
  "Designing isn't just about visually appealing interfaces,",
  "One can never bound an artist/designer to time limits,",
  "Every creation is an asset for an artist, that he carries throughout his life,",
  "Experience is what determines the quality of life,",
  "When a UXer does creative development, you surely get the best,",
];

let currentIndex = 0;
function changeText() {
  const textElement = document.getElementById("quote-text");
  currentIndex = (currentIndex + 1) % quotes.length;
  textElement.textContent = quotes[currentIndex];
  setTimeout(changeText, 3000);
}
// Start the loop
changeText();

//typing animtion-knowmore
const text =
  "User Experience didn't randomly land into my life. Experience has been all in me, ever since I remember. Aligning things of my room, iterating post designs for social media, planning get-together with friends (considering all the circumstances), digging into the cause of any issue; these things came up altogether to make me realize 'what I am made for'. Experience for me, is ALL WHAT MATTERS IN OUR LITTLE LIVES. Studying online from various websites, I realized how 'my actions' (as user) are influenced by the experience they are giving me. And from there, it all started and now, it's just SERVING PEOPLE THROUGH BEST EXPERIENCE and GROWING BUSINESS AT THE SAME TIME, that I am all working towards.";
let index = 0;
// const speed = 80; // Adjust speed as per your liking

function type() {
  if (index < text.length) {
    document.getElementById("moretext").textContent += text.charAt(index);
    index++;
    setTimeout(type, 80);
  } else {
    document.getElementById("moretext").classList.remove("typing"); // Remove cursor once typing is done
  }
}
type()




//myworks span
document.addEventListener("DOMContentLoaded", function () {
  const titleElement = document.querySelector(".title h1");
  if (titleElement) {
    const text = titleElement.textContent;
    titleElement.innerHTML = ""; // Clear the current content
    text.split("").forEach((letter) => {
      const span = document.createElement("span");
      span.textContent = letter;
      titleElement.appendChild(span);
    });
  }
});

$(document).ready(function () {
  $("#knowmoreBtn").click(function () {
    $("#moresection").css("display", "block");
  });

  $("#backBtn").click(function () {
    $("#moresection").css("display", "none");
  });

  $("#toworks").click(function () {
    $("#moresection").hide(); // Close the modal
    $("html, body").animate({
      scrollTop: $("#myworks").offset().top
    }, 1000); // Smooth scroll to target div
  });

  $("#leftarrowha").click(function () {
    $("#homealike").css("display", "none");
    $("#myworks").css("display", "flex");
    $("#whyme").css("display", "block");
    $("#connect").css("display", "block");
    $("#heropage").css("display", "block");
    $("html, body").animate({
      scrollTop: $("#myworks").offset().top
    }, 1000);

  });
  $("#rightarrow").click(function () {
    $("#homealike").css("display", "none");
    $("#myworks").css("display", "none");
    $("#whyme").css("display", "none");
    $("#connect").css("display", "none");
    $("#linkedin").css("display", "block");
  
  
  })
  
  
  
  $("#p1desc").click(function () {
    $("#myworks").fadeOut("100", function () {
      $("#homealike").fadeIn("100", function () {
        $(this).css("display", "block");
        $("html, body").animate({ scrollTop: 0 }, 300, 'swing'); // Smooth and fast scroll to top
      });
      $("#heropage").css("display", "none");
      $("#whyme").css("display", "none");
      $("#connect").css("display", "none");
  
    });
  
    $("#nextproject").click(function () {
      $("#homealike").css("display", "none")
      $("#linkedin").css("display", "block")
      $("html, body").animate({
        scrollTop: $("#myworks").offset().top
      }, 1000);
    })
  
  });
  $("#leftarrow").click(function(){
    $("#homealike").css("display","none")
    $("#linkedin").css("display","none")
    $("#myworks").css("display","flex")
    $("#heropage").css("display","block")
    $("#whyme").css("display","block")
    $("#connect").css("display","block")
    $("html, body").animate({
      scrollTop: $("#whyme").offset().top
    }, 1000);

  })
  $("#p2desc").click(function () {
    $("#myworks").fadeOut("100", function () {
      $("#linkedin").fadeIn("100", function () {
        $(this).css("display", "block");
        $("html, body").animate({ scrollTop: 0 }, 300, 'swing'); // Smooth and fast scroll to top
      });
      $("#heropage").css("display", "none");
      $("#whyme").css("display", "none");
      $("#connect").css("display", "none");
  
    });
  });
});