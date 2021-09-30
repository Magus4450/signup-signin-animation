const box1 = document.getElementsByClassName('box1')[0]
const box2 = document.getElementsByClassName('box2')[0]
const box3 = document.getElementsByClassName('box3')[0]
const box4 = document.getElementsByClassName('box4')[0]
const signin = document.getElementById('signin')
const signup = document.getElementById('signup')

signin.addEventListener('click', ()=>{

    box2.classList.add('left1')
    box4.classList.add('left1')
    box1.classList.add('right1')
    box3.classList.add('right1')
    box2.classList.remove('left2')
    box4.classList.remove('left2')
    box1.classList.remove('right2')
    box3.classList.remove('right2')

    setTimeout(()=>{
        console.log('2')
    },1000)
    box1.classList.add('hidden')
    box2.classList.add('hidden')
    box3.classList.remove('hidden')
    box4.classList.remove('hidden')  


})
signup.addEventListener('click', ()=>{
    box2.classList.add('left2')
    box4.classList.add('left2')
    box1.classList.add('right2')
    box3.classList.add('right2')
    box2.classList.remove('left1')
    box4.classList.remove('left1')
    box1.classList.remove('right1')
    box3.classList.remove('right1')

    setTimeout(()=>{
        console.log('1')
    },1000)
    box1.classList.remove('hidden')
    box2.classList.remove('hidden')
    box3.classList.add('hidden')
    box4.classList.add('hidden')
    
})