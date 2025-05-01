document.getElementById('userForm').addEventListener('submit',async function(e) {
   e.preventDefault();  


const name = document.getElementById('name').value;
const email = document.getElementById('email').value;

const response = await fetch('/submit',{
    method:'POST',
    headers:{
        'Content-type':'application/json'
    },
    body:JSON.stringify({name,email})
})

})