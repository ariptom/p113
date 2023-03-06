function preload () {}
function setup () {
    canvas=createCanvas(400,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelReady);
    posenet.on("pose",gotResults);
}
function modelReady(){
    console.log("INITIALIZED!!");
}
function gotResults(results){
    if (results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
    }
}
function draw(){
    image(video,0,0,400,300);
}
function take_snapshot (){
    save('myimage.png');
}