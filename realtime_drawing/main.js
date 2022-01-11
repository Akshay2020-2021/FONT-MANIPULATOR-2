function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(VIDEO);
    canvas.position(560,150);

    poseNet = ml5.posenet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function draw() {
    background('#969A97');
}

function gotPoses(results)
{
    if(results.lenth > 0)
    {
        console.log(results);
    }
}