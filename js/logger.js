

// A log where you could apply useful filters. like ||, &&, ! ex. !(actions, resources, events) etc, so maybe send a caller object to logger.say.


var logger = {
    elm: document.getElementById('log'),
    say: function (text, weight, consolelog) {
        weight = weight || 0;
        text = text || "";
        if (text == "") return;
        if (this.lasttext == text) {
            this.matchcount++;

            this.elm.getElementsByClassName('count')[0].innerHTML = "x" + this.matchcount;
        } else {
            this.matchcount = 1;

            var span = document.createElement('span');
            span.innerHTML = text;

            var mcount = document.createElement('span');
            mcount.classList.add('count');

            this.elm.insertBefore(document.createElement('br'), this.elm.firstChild);
            this.elm.insertBefore(mcount, this.elm.firstChild);
            this.elm.insertBefore(span, this.elm.firstChild);
        }

        this.lasttext = text;
        if (!(consolelog === false)) console.log(text);
    },
    talk: function (messages, callback) { // string array + callback

    },
    lasttext: null,
    matchcount: null,
}


