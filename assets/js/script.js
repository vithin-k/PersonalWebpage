
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }
// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


// screnn navigation button

  window.addEventListener('scroll', function() {
    var scrollButton = document.getElementById('scrollButton');
    if (window.scrollY === 0) {
      scrollButton.style.display = 'none';
    } else {
      scrollButton.style.display = 'block';
      document.querySelector('.scroll-button').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior:"smooth" });
      });
    }
  });

function sendEmail()
{
  Email.send({
    Host : "smtp.gmail.com",
    Username : "myvithin@gmail.com",
    To : 'myvithin@gmail.com',
    From : document.getElementById("gmail").value,
    Subject : "This is the subject",
    Body : document.getElementById("message").value,
}).then(
  message => alert("Message sent successfully")
); 
} 