function setup() {
    canvas = createCanvas(300, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
  }
  
  function draw() {
    image(video,0,150,300,250)
  }