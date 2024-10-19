console.log("working")

const menuButton = document.getElementById('anchor')

menuButton.addEventListener('click', () =>{
    console.log("click")
})

document.getElementById('colorButton').addEventListener('click', function() {
    document.getElementById('colorText').style.color = 'red'
    document.getElementById('colorText').style.fontSize = '64px'
});
