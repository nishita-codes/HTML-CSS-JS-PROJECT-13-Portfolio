// console.log("hello");
// document.querySelector('.cross').style.display = 'none';
// document.querySelector('.hamburger').addEventListener("click", ()=>{
//     document.querySelector('.sidebar').classList.toggle('sidebargo');
//       if(document.querySelector('.sidebar').classList.toggle('sidebargo')){
//         document.querySelector('.ham').style.display ='inline';
//         document.querySelector('.cross').style.display ='none';
//       }
//       else{
//         document.querySelector('.cross').style.display ='inline';
//         document.querySelector('.ham').style.display ='none';
//       }
// })


document.addEventListener("DOMContentLoaded", () => {
    console.log("hello");
    document.querySelector('.cross').style.display = 'none';

    document.querySelector('.hamburger').addEventListener("click", () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('sidebargo');

        if (sidebar.classList.contains('sidebargo')) {
            document.querySelector('.ham').style.display = 'inline';
            document.querySelector('.cross').style.display = 'none';
        } else {
            setTimeout(() => {
                document.querySelector('.cross').style.display = 'inline';
            }, 380);
            document.querySelector('.ham').style.display = 'none';
        }
    });



    document.getElementById("downloadResumeBtn").addEventListener("click",function() {

        const resumePath = "./assets/My Resume (1).pdf";


        const link = document.createElement("a");
        link.href = resumePath;

        link.download = "Nishita_Patidar_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    
  
    document.getElementById("contactForm").addEventListener("submit", function (event) {
      event.preventDefault(); 

      const name = document.getElementById("clientEmail1").value;
      const email = document.getElementById("clientEmail2").value;
      const Phone = document.getElementById("clientphone").value;

      
      if (!name || !email|| !Phone) {
        alert("Please fill out all fields.");
        return;
      }


      const formData = {
        name: name,
        email : email,
        Phone: Phone,
      };
      console.log(formData);

      // Submit data to server via fetch
      fetch("https://your-server-endpoint.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.ok) {
            alert("Your message has been sent successfully!");
            document.getElementById("contactForm").reset(); 
          } else {
            alert("There was an issue sending your message. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("An error occurred. Please try again later.");
        });
    });
  

});
