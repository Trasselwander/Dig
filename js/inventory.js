

var inventory = {
    elm: document.getElementById('inventory'),
    toggled: false,

    init: function () {
        for (var it in items) {
            var item = items[it];
            if (typeof item === "undefined") continue;
            item.init();
        }

        this.hide();
    },

    show: function () {
        this.elm.classList.remove('hidden');
        logger.elm.classList.add('hidden');
        this.toggled = true;
    },
    hide: function () {
        this.elm.classList.add('hidden');
        logger.elm.classList.remove('hidden');
        this.toggled = false;
    },
};