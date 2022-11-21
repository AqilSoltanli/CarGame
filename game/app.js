
var circle = document.getElementsByClassName('circle')
var car = document.querySelector('.car')
var positionX = 0;
var positionY = 0;
var point = 0;
document.body.onkeydown = (e) => {
    if (e.keyCode===37) {
        positionX +=2;
        car.style.right = `${positionX}%`
    }
    if (e.keyCode===38) {
        positionY -=2;
        car.style.top = `${positionY}%`
    }
    if (e.keyCode===40) {
        positionY +=2;
        car.style.top = `${positionY}%`
    }
    if (e.keyCode === 39) {
        positionX -=2;
        car.style.right = `${positionX}%`


    }

    if (car.style.top==='50%') {
        if (car.style.right === '50%') {
            circle.document.style.backgroundColoe = 'yellow'
            car.style.top = '2%'
            car.style.right = '2%'
            positionY=2
            positionX=2
            point+=1
            document.getElementById('demo').innerHTML = point;
        }
    
        
    }

}



