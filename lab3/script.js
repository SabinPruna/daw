window.onload = function () {
    function randomChar(charSet) {
        var rand = charSet[Math.floor(Math.random() * charSet.length)];
        return rand;
    }
    function randomRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function newMatrixLine(speed, charSet, charLength, charHeight) {
        var elemLine = document.createElement('div');
        elemLine.style.top = '-' + (charLength * charHeight) + 'px';
        elemLine.style.left = randomRange(0, window.innerWidth) + 'px';
        elemLine.style.position = 'fixed';
        document.body.append(elemLine);

        for (let i = 0; i < charLength; i++) {
            var elemLetter = document.createElement('div');
            elemLetter.innerHTML = randomChar(charSet);
            elemLetter.style.color = linesColor;
            elemLine.appendChild(elemLetter);
        }
        var interval = setInterval(function () {
            var elemLineTop = parseInt(elemLine.style.top);
            if (elemLineTop < (window.innerHeight)) {
                elemLine.style.top = elemLineTop + moveByNumPixels + 'px';

            } else {
                elemLine.remove();
                clearInterval(interval);
            }
        }, speed);
    }
    var moveByNumPixels = 8.6;
    var linesGroupCreationInterval = 1;
    var maxLinesPerGroup = 1;
    var charSet = ['a', 'b', 'c'];
    var charHeight = 18.6;
    var bodyColor = '#000';
    var linesColor = 'lime';
    var minLineSpeedInterval = 16;
    var maxLineSpeedInterval = 28;
    var minCharLength = 4;
    var maxCharLength = 150;
    var maxLines = 40;
    var interval1 = setInterval(function () {
        if (document.body.children.length < maxLines) {
            for (let i = 0; i < randomRange(1, maxLinesPerGroup); i++) {
                newMatrixLine(randomRange(minLineSpeedInterval, maxLineSpeedInterval), charSet, randomRange(minCharLength, maxCharLength), charHeight);
            }
        }
    }, linesGroupCreationInterval);
    document.body.style.background = bodyColor;
}