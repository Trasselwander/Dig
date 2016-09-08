
var upgrades = [{
    item: "shovel",
    name: "build",

    elm: document.createElement('a'), // action

    bought: false,
    visible: false,
    timeout: null,

    init: function () {
        this.elm.innerHTML = "[<span>" + this.name + "</span>]";
        this.elm.href = "#";

        this.elm.addEventListener('click', this.buy.bind(this));
        resources.stone.elm.addEventListener('add', this.show.bind(this)); // Should show only be used like this, so that we can depend on the event? Or should it be used manually too?
    },

    show: function () {
        if (this.canBuy()) {

            items.shovel.forceshow = true;
            items.shovel.elm.insertBefore(this.elm, items.shovel.elm.firstChild);
            items.shovel.show();
        }
    },


    showPrice: function () {
        if (timeout) {
            clearTimeout(this.timeout);
        } else { // first time, show price

        }

        this.timeout = setTimeout(function () {

            this.timeout = null;
        }, 750);

        // set a timeout to hide price. When called again reset the timeout (just like WDT). if timeout remove item
    },

    canBuy: function () {
        if (resources.stone.value >= 1 && !this.bought)
            return true;
        else
            return false;
    },

    buy: function () {
        console.log("BUY");
        if (this.canBuy()) {
            this.bought = true;
            items.shovel.elm.removeChild(this.elm);
            items.shovel.owned = true;
            actions.dig.stoneChance += 50;
            actions.dig.coinChance += .75;
            resources.stone.add(-1);
            logger.say("faaaster! a... shovel... good", 1);
        }
    }
},
]