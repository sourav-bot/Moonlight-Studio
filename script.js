const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })




    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
  // Define content for each section
const content = {
    'design': {
        description: 'Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.',
        image: 'https://sundown-ivory.vercel.app/page4-1.webp' // Replace with the path to the Design image
    },
    'project': {
        description: 'Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.',
        image: 'https://sundown-ivory.vercel.app/page4-2.webp' // Replace with the path to the second image (for Project)
    },
    'execution': {
        description: 'We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.',
        image: 'https://sundown-ivory.vercel.app/page4-3.webp' // Replace with the path to the third image (for Execution)
    }
};

// Get elements
const designText = document.getElementById('design');
const projectText = document.getElementById('project');
const executionText = document.getElementById('execution');
const descriptionElement = document.getElementById('description');
const imageElement = document.getElementById('main-image');

// Function to update content dynamically
function updateContent(section) {
    // Fade out the current image
    imageElement.classList.add('fade-out');

    setTimeout(() => {
        // Update description
        descriptionElement.textContent = content[section].description;

        // Update image source
        imageElement.src = content[section].image;

        // Fade in the new image
        imageElement.classList.remove('fade-out');
        imageElement.classList.add('fade-in');
    }, 300); // Adjust delay to match the transition duration
}

// Function to handle the highlight state
function handleHighlight(currentElement) {
    // Remove highlight and move other elements backward
    designText.classList.remove('highlight');
    projectText.classList.remove('highlight');
    executionText.classList.remove('highlight');

    // Move other elements backward (apply not-highlight class)
    designText.classList.add('not-highlight');
    projectText.classList.add('not-highlight');
    executionText.classList.add('not-highlight');

    // Apply highlight to the clicked element
    currentElement.classList.remove('not-highlight');
    currentElement.classList.add('highlight');
}

// Add click events for each clickable section
designText.addEventListener('click', function() {
    updateContent('design');
    handleHighlight(designText);
});

projectText.addEventListener('click', function() {
    updateContent('project');
    handleHighlight(projectText);
});

executionText.addEventListener('click', function() {
    updateContent('execution');
    handleHighlight(executionText);
});


var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
