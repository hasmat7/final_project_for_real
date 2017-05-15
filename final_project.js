  var namespace = "http://www.w3.org/2000/svg"

// ships
var s1 = makeImage("http://4.bp.blogspot.com/-etyNTo8hpIE/Uf8BfJYeymI/AAAAAAAAA5Q/9emQpKVj1fo/s1600/fighter-01.png", 110, 55, 70, 70)
var s2 = makeImage("http://2.bp.blogspot.com/-IEXbXMeAtRA/Ufq7EpeJTKI/AAAAAAAAAzs/2wFik31rMOE/s320/alienspaceship.png", 10, 55, 70, 70)
var s3 = makeImage("https://opengameart.org/sites/default/files/spaceship.pod_.1.blue__0.png", 210, 55, 70, 70)
//projectiles
var p1 = makeImage("http://www.clker.com/cliparts/e/O/X/L/f/J/red-line.svg", 0, 0, 7, 6)
var p2 = makeImage("http://www.clker.com/cliparts/e/O/X/L/f/J/red-line.svg", 0, 0, 7, 6)
var p3 = makeImage("http://www.clker.com/cliparts/e/O/X/L/f/J/red-line.svg", 0, 0, 7, 6)
var e1 =makeImage("http://www.unixstickers.com/image/cache/data/stickers/spaceinvaders/Space-medium-invader.sh-180x180.png", 1, 1, 20, 20)
//var e2 = makeImage("https://s3-us-west-2.amazonaws.com/s.cdpn.io/695916/asteroid2.png", 30, 20, 20, 20)
//var boss = makeImage("http://4.bp.blogspot.com/-KCGIBZSuhRw/UvRejPXTknI/AAAAAAAABYM/QBo4CPLEX5M/s1600/st6.png" , 5, 5, 60, 60)
var ch = 0
var ch1 = 0
var ch2 = 0
var ch3 = 0
var aemv = 1

s1.addEventListener("click", s1o)
s2.addEventListener("click", s2o);
s3.addEventListener("click", s3o);
document.addEventListener('keydown', s1c)
document.addEventListener('keydown', s2c)
document.addEventListener('keydown', s3c)
document.addEventListener('keydown', s1p)
document.addEventListener('keydown', s2p)
document.addEventListener('keydown', s3p)
document.addEventListener('keydown', gamestart )

function gamestart(event) {
if (event.key == "s") {
var rse = Math.random()
if (rse < .5) {
  alert("`1`")
}if (rse > .5) {
  alert("2")
}
}
}
function e1m (){
move(e1,1,1)
requestAnimationFrame(e1m)
}



















































function s1o() {
  if(ch == 0){
    ch = 1
alert("s1")
s2.setAttribute("opacity", 0)
s3.setAttribute("opacity", 0)
s1.setAttribute("height", 40)
s1.setAttribute("width", 40)
s1.setAttribute("x", 135)
s1.setAttribute("y", 165)
}
}
function s1c(event){
if(ch == 1) {
var sx1a =  getX(s1)
if (event.key == "ArrowRight" && sx1a < 260) {
  move(s1,5,0)
} else if (event.key == "ArrowLeft" && sx1a > 0) {
  move(s1,-5,0)
}

}
}
function s1p(event){
  if(ch == 1){
var sx1b = getX(s1)
var sy1a = getY(s1)
if (event.key == " ") {
  if(ch1 == 0){
s1pm()
ch1 = 1
}
p1.setAttribute("x", sx1b + 16.5)
p1.setAttribute("y", sy1a)
}
}
}
function s1pm(){
move(p1,0,-3)
requestAnimationFrame(s1pm)

}
function s2o() {
  if(ch == 0){
  ch = 2
alert("s2")
s1.setAttribute("opacity", 0)
s3.setAttribute("opacity", 0)
s2.setAttribute("height", 40)
s2.setAttribute("width", 40)
s2.setAttribute("x", 135)
s2.setAttribute("y", 165)
}
}
function s2c(event){
if(ch == 2) {
var sx2a =  getX(s2)
if (event.key == "ArrowRight" && sx2a < 260) {
  move(s2,5,0)
} else if (event.key == "ArrowLeft" && sx2a > 0) {
  move(s2,-5,0)
}

}
}
function s2p(event){
  if(ch == 2){
var sx2b = getX(s2)
var sy2a = getY(s2)
if (event.key == " ") {
  if(ch2 == 0){
s2pm()
ch2 = 1
}
p2.setAttribute("x", sx2b + 16.5)
p2.setAttribute("y", sy2a)
}
}
}
function s2pm(){
move(p2,0,-3)
requestAnimationFrame(s2pm)

}
function s3o() {
  if(ch == 0){
ch = 3
alert("s3")
s2.setAttribute("opacity", 0)
s1.setAttribute("opacity", 0)
s3.setAttribute("height", 40)
s3.setAttribute("width", 40)
s3.setAttribute("x", 135)
s3.setAttribute("y", 165)
}
}
function s3c(event){
if(ch == 3) {
var sx3a =  getX(s3)
if (event.key == "ArrowRight" && sx3a < 260) {
  move(s3,5,0)
} else if (event.key == "ArrowLeft" && sx3a > 0) {
  move(s3,-5,0)
}

}
}
function s3p(event){
  if(ch == 3){
var sx3b = getX(s3)
var sy3a = getY(s3)
if (event.key == " ") {
  if(ch3 == 0){
s3pm()
ch3 = 1
}
p3.setAttribute("x", sx3b + 16.5)
p3.setAttribute("y", sy3a)
}
}
}
function s3pm(){
move(p3,0,-3)
requestAnimationFrame(s3pm)

}


















































//do not touch

function getX(shape) {
  if (!shape) {
    throw "Uh oh, you tried to get the x coordinate of a shape that doesn't exist!"
  }
  try {
    if (shape.hasAttribute("x")) {
      return parseFloat(shape.getAttribute("x"))
    } else if (shape.hasAttribute("cx")) {
      return parseFloat(shape.getAttribute("cx"))
    }  else if (shape.hasAttribute("x1")) {
      return parseFloat(shape.getAttribute("x1"))
    }
  } catch(err) {
    throw "You're trying to get the x coordinate of something that isn't a shape!"
  }
}

function getY(shape) {
  if (!shape) {
    throw "Uh oh, you tried to get the y coordinate of a shape that doesn't exist!"
  }
  try {
    if (shape.hasAttribute("y")) {
      return parseFloat(shape.getAttribute("y"))
    } else if (shape.hasAttribute("cy")) {
      return parseFloat(shape.getAttribute("cy"))
    } else if (shape.hasAttribute("y1")) {
      return parseFloat(shape.getAttribute("y1"))
    }
  } catch (err) {
    throw "You're trying to get the y coordinate of something that isn't a shape!"
  }
}

function setX(shape, x) {
  if (!shape) {
    throw "I can't set the x of a shape that doesn't exist!"
  }
  if (isNaN(x)) {
    throw "You need to tell me what to set the x coordinate to!"
  }
  if (shape.hasAttribute("x")) {
    shape.setAttribute("x", x)
  } else if (shape.hasAttribute("cx")) {
    shape.setAttribute("cx", x)
  } else if (shape.hasAttribute("x1")) {
    var xDiff = parseFloat(shape.getAttribute("x2")) - parseFloat(shape.getAttribute("x1"))
    shape.setAttribute("x1", x)
    shape.setAttribute("x2", x + xDiff)
  }
}

function setY(shape, y) {
  if (!shape) {
    throw "I can't set the y of a shape that doesn't exist!"
  }
  if (isNaN(y)) {
    throw "You need to tell me what to set the y coordinate to!"
  }
  if (shape.hasAttribute("y")) {
    shape.setAttribute("y", y)
  } else if (shape.hasAttribute("cy")) {
    shape.setAttribute("cy", y)
  } else if (shape.hasAttribute("y1")) {
    var yDiff = parseFloat(shape.getAttribute("y2")) - parseFloat(shape.getAttribute("y1"))
    shape.setAttribute("y1", y)
    shape.setAttribute("y2", y + yDiff)
  }
}

function move(shape, dx, dy) {
  if (!shape) {
    throw "I can't move a shape that doesn't exist!"
  }
  if (isNaN(dx)) {
    throw "You need to tell me how much to move the shape in the x direction!"
  }
  if (isNaN(dy)) {
    throw "You need to tell me how much to move the shape in the y direction!"
  }
  if (shape.hasAttribute("x") && shape.hasAttribute("y")) {
    var x = parseFloat(shape.getAttribute("x"))
    var y = parseFloat(shape.getAttribute("y"))
    shape.setAttribute("x", x + dx)
    shape.setAttribute("y", y + dy)
  } else if (shape.hasAttribute("cx")) {
    var cx = parseFloat(shape.getAttribute("cx"))
    var cy = parseFloat(shape.getAttribute("cy"))
    shape.setAttribute("cx", cx + dx)
    shape.setAttribute("cy", cy + dy)
  } else if (shape.hasAttribute("x1")) {
    var x1 = parseFloat(shape.getAttribute("x1"))
    var y1 = parseFloat(shape.getAttribute("x1"))
    setX(shape, x1 + dx)
    setY(shape, y1 + dy)
  }
}

function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")

  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}

function collides(shape1, shape2) {
  var centerX, centerY
  if (shape1.hasAttribute("x")) {
    centerX = getX(shape1) + parseFloat(shape1.getAttribute("width"))/2
    centerY = getY(shape1) + parseFloat(shape1.getAttribute("height"))/2
  } else if (shape1.hasAttribute("cx")) {
    centerX = getX(shape1)
    centerY = getY(shape1)
  } else {
    throw "Oops, that kind of shape isn't supported by the collide function!"
  }

  var xMin, xMax, yMin, yMax
  if (shape2.hasAttribute("x")) {
    xMin = getX(shape2)
    yMin = getY(shape2)
    xMax = getX(shape2) + parseFloat(shape2.getAttribute("width"))
    yMax = getY(shape2) + parseFloat(shape2.getAttribute("height"))
  } else if (shape2.hasAttribute("cx")) {
    if (shape2.hasAttribute("rx")) {
      var rx = parseFloat(shape2.getAttribute("rx"))
      var ry = parseFloat(shape2.getAttribute("ry"))
      xMin = getX(shape2) - rx
      yMin = getY(shape2) - ry
      xMax = getX(shape2) + rx
      yMax = getY(shape2) + ry
    } else {
      var r = parseFloat(shape2.getAttribute("r"))
      xMin = getX(shape2) - r
      yMin = getY(shape2) - r
      xMax = getX(shape2) + r
      yMax = getY(shape2) + r
    }
  } else {
    throw "Oops, that kind of shape isn't supported by the collide function!"
  }
  return (centerX > xMin &&
          centerX < xMax &&
         centerY > yMin &&
         centerY < yMax)
}
