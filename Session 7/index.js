function conThoAnCo(callback007) {
    setTimeout(function () {
        console.log('con tho choi do');
        callback007();
    }, 2000);
}

function hotel() {
    console.log('Di nha nghi de');
}

var callback = function () {
    hotel();
}
conThoAnCo(callback);