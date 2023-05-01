var intervalID = setInterval(timePrinter, 1000);

function timePrinter() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
