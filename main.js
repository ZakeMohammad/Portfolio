
let menuIcon=document.querySelector('#menu-icon');

let navbarr=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbarr.classList.toggle('active');
}


const toggleBtn = document.getElementById('toggleBtn');
const toggleableElements = document.querySelectorAll('.corse-box');

toggleBtn.addEventListener('click', () => {
  toggleableElements.forEach(element => {
    if (element.style.display === 'none') {
      element.style.display = 'block'; // Show the element
     toggleBtn.textContent='Show Less';
    } else {
      element.style.display = 'none'; // Hide the element
      toggleBtn.textContent='Show All';
    }
  });
});


const projectBoxes = document.querySelectorAll('.Project-Box');

projectBoxes.forEach(box => {
  const frontFace = box.querySelector('.frontforbox');
  const backFace = box.querySelector('.backforbox');
  const showFrontBtn = box.querySelector('.ShowProjectDeltils');
  const showBackBtn = box.querySelector('.BackFromProjectDetlils');

  // Event listeners for showing front and back faces
  showFrontBtn.addEventListener('click', () => {
      frontFace.style.transform = 'rotatey(-90deg)';
     backFace.style.transform = 'rotatey(0deg)';
  });

  showBackBtn.addEventListener('click', () => {
    backFace.style.transform = 'rotatey(-90deg)';
    frontFace.style.transform = 'rotatey(0deg)';
  });
});



document.getElementById('TalkWithMe').addEventListener('click', function() {
 
  var email = 'zakimohammad222@gmail.com';
  var subject = 'Regarding Your Website';
  var body = 'Hello,\n\nI would like to discuss...\n\nSincerely,\n[Zaki Mohammad]';

  var mailtoLink = 'mailto:' + email +
                   '?subject=' + encodeURIComponent(subject) +
                   '&body=' + encodeURIComponent(body);

  // Open default email client with pre-filled message
  window.location.href = mailtoLink;
});



document.getElementById('Talk').addEventListener('click', function() {
 
  var email = 'zakimohammad222@gmail.com';
  var subject = '';
  var body = 'Hello';

  var mailtoLink = 'mailto:' + email +
                   '?subject=' + encodeURIComponent(subject) +
                   '&body=' + encodeURIComponent(body);

  window.location.href = mailtoLink;
});







document.getElementById('ThanksForThis').addEventListener('click', function() {
  // Display an alert message
  Swal.fire({
    title: "Success!",
    text: "You made my day better with that kindness. Thank you so much!",
    icon: "success"
  });
});

//emails
let form = document.querySelector('form');

function sendEmail() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('messege').value;

    let bodymessage = `Full Name: ${name}<br> <br> Email: ${email} <br> Phone: ${phone} <br> Subject: ${subject} <br> Message: ${message}`;
    console.log('Sending email:', bodymessage); 
    Email.send({
      SecureToken :"238f4840-15be-4db1-8ce5-1a9379331cc0",
        To: 'zakemohammad222@gmail.com',
        From: "zakemohammad222@gmail.com",
        Subject: subject,
        Body: bodymessage
    }).then(
        message => {
          if(message=="OK"){
            Swal.fire({
              title: "Success!",
              text: `Thank you ${name} for sending this message!
              Developer: Zaki Mohammad.`,
              icon: "success"
            });
          }
        }
    );
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
   
    sendEmail();
});



