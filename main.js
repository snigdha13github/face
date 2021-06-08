function setup()
{
    c1=createCanvas(600,500);
    c1.center();
    v1=createCapture(VIDEO);
    v1.hide();
}
function draw()
{
    image(v1,0,0,600,500);
}