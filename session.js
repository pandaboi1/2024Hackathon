console.log("working session")

const menuButton = document.getElementById(' ')

menuButton.addEventListener('click', () =>{
    console.log("click")
})

document.getElementById(' ').addEventListener('click', function() {
    document.getElementById('colorText').style.color = 'red'
    document.getElementById('colorText').style.fontSize = '64px'
});
