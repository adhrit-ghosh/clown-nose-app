nosex = 0;
nosey = 0;

function preload() {
    clown_nose = loadImage("https://i.postimg.cc/RV03JHxq/download-removebg-preview-1.png");

}

function setup() {
    canvas = createCanvas(350, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);

}

function draw() {

    image(video, 0, 0, 350, 300);
    // fill("Red");
    //circle(nosex, nosey, 20);
    image(clown_nose, nosex, nosey, 30, 30);

}

function take_ss() {
    save('Filter Image');
    //save function  takes the snapshot and saves the  image in the user's device
}

function modelLoaded() {
    console.log('poseNet model is loaded');
}

function gotPoses(results) {
    if (results.length > 0) {
        //console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log('x cordinate of nose : ' + results[0].pose.nose.x);
        console.log('y cordinate of nose : ' + results[0].pose.nose.y);
    }

}