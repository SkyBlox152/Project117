let canvas;
let video;
let faceDetector;

function setup() {
  canvas = createCanvas(300, 400);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  faceDetector = ml5.faceApi(video, modelLoaded);
}

function draw() {
  image(video, 0, 0, 300, 250);
  faceDetector.detect(gotResult);
}

function modelLoaded() {
  console.log('Face detection model loaded!');
}

function gotResult(error, result) {
  if (error) {
    console.error(error);
    return;
  }
  console.log(result);
  clear();
  if (result) {
    for (let i = 0; i < result.length; i++) {
      let pos = result[i].alignedRect;
      stroke(0, 255, 0);
      strokeWeight(2);
      noFill();
      rect(pos._x, pos._y, pos._width, pos._height);
    }
  }
}
