
var items = {
    shovel: {

        name: "shovel",
        owned: false,
        forceshow: false,
        elm: document.createElement('span'),
        prefix: document.createElement('span'),
        suffix: document.createElement('span'),

        init: function () {
            // What to put here?
            this.elm.appendChild(this.suffix);
            this.elm.innerHTML += this.name;
            this.elm.appendChild(this.prefix);
            this.elm.href = "#";
        },

        show: function () {
            if (this.owned || this.forceshow)
                inventory.elm.appendChild(this.elm);
            else
                inventory.elm.removeChild(this.elm);
        },
    }

};