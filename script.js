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
            setTimeout(()=>{
            document.querySelector('.cross').style.display = 'inline';
        } , 380);
            document.querySelector('.ham').style.display = 'none';
        }
    });
});
