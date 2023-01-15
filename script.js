let canvas = document.querySelector('#testCanvas')
let ctx = canvas.getContext('2d')

// ctx.fillStyle = '#999'
// ctx.fillRect(0,0,55,50)


// ctx.fillStyle = "rgba(0, 0, 200, 1)";
// ctx.strokeRect (0, 30, 300, 50);

// ctx.fillStyle='red'
// ctx.clearRect(0,0,100,10)

// ctx.beginPath()
// ctx.moveTo(0,0)
// ctx.lineTo(0,150)
// ctx.lineTo(600,150)
// ctx.lineTo(0,0)
// ctx.stroke()

// ctx.beginPath()
// ctx.arc(250,250,75,0,2*Math.PI)
// ctx.fill()
function randomColor(number){
    return Math.floor(Math.random() * (number+1))
}

let color = randomColor()

for(let i=0; i<10;i++){
    ctx.fillStyle = 'rgba('+randomColor(255)+','+randomColor(255)+ ','+randomColor(255)+', 1)'
    let radius = randomColor(75)
    let x = randomColor(500)
    let y = randomColor(500)
    if(radius>x){
        x += radius - x
    }else if(radius>500-x){
        x -= (radius-x)>0 ? radius-x : (radius-x)*(-1)
    }
    if(radius>y){
        y += radius - y
    }else if(radius>500-y){
        y -= (radius-y)>0 ? radius-y : (radius-y)*(-1)
    }
    ctx.beginPath()
    ctx.arc(x,y,radius,0,2*Math.PI)
    ctx.fill()
}


