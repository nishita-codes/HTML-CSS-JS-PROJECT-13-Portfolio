console.log("hello");
document.querySelector('.cross').style.display = 'none';
document.querySelectorAll('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('siderbargo');

})