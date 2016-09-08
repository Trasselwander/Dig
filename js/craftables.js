
var Craftable = function () {
    this.name;
    this.elm;
    this.text;

    this.visible = false;

    this.init = function () { };
    this._init = function () {
        if (!this.elm) return;

        this.elm.href = "#";
        this.elm.innerHTML = this.text;
    }

    this.canCraft = function () {

    }

    this.craft = function () {
        if (this.canCraft()) {

        }
    }

    this.show = function () {
        if (this.canCraft()) {
            this.visible = true;
            craft.elm.appendChild(this.elm);
        }
        else if (this.visible) {
            craft.elm.removeChild(this.elm);
            this.visible = false;
        }
    }
}

var Craftables = [
    function () {
        this.name = "SearchDirt";
        this.text = "Search through the dirt";
        this.elm = document.createElement('a');

        this.coinChance = 0.1;
        this.boneChance = 1.2;
        this.stoneChance = 12.3;

        this.init = function () {
            resources.dirt.elm.addEventListener('add', this.show.bind(this));
        }

        this.canCraft = function () {
            return resources.dirt.value >= 10;
        }
        this.craft = function () {
            if (this.canCraft()) {
                resources.dirt.add(-10 * 1);
                var rnd = Math.random() * 100;

                if (this.coinChance > rnd) {
                    resources.coins.add(1);
                    logger.say("found a coin", 1, true);
                }
                else if (this.boneChance > rnd) {
                    resources.bones.add(1);
                    logger.say("bones... bones!", 1, true);
                }
                else if (this.stoneChance > rnd) {
                    resources.stone.add(1);
                    logger.say("this dirt is heavy.. ohh wait", 1, true);
                } else {
                    logger.say("found nothing", 1, true);
                }
                this.show();
            }
        }
    },
    function () {
        this.name = "EmptyStones",
        this.elm = document.createElement('a'),
        this.coinChance = 1,
        this.text = "Lift up the stones";

        this.canCraft = function () {
            if (resources.stone.value >= 100)
                return true;
            else
                return false;
        }
        this.craft = function () {
            if (this.canCraft()) {
                resources.stone.add(-100);
                resources.stonepile.add(1);
                var rnd = Math.random() * 100;

                if (this.coinChance > rnd) {
                    resources.coins.add(1);
                    logger.say("money is not everything, get back down NOW!", 1, true);
                } else {
                    logger.say("CONTINUE!", 1, true);
                }
                this.show();
            }
        }
        this.init = function () {
            resources.stone.elm.addEventListener('add', this.show.bind(this)); // Should show only be used like this, so that we can depend on the event? Or should it be used manually too?
        }
    }
];



var craftables = [];

for (var Crafta in Craftables) {
    var c = Craftables[Crafta];
    if (typeof c === "undefined") continue;

    c.prototype = new Craftable();
    var cc = new c();
    craftables.push(cc);
}


//var craftables = [{
//    name: "SearchDirt",
//    elm: document.createElement('a'),
//    count: 0,
//    coinChance: 0.1,
//    boneChance: 1.2,
//    stoneChance: 12.3,
//    canCraft: function () {
//        if (resources.dirt.value >= 10)
//            return true;
//        else
//            return false;
//    },
//    craft: function () {
//        if (this.canCraft()) {
//            resources.dirt.add(-10 * 1);
//            var rnd = Math.random() * 100;

//            if (this.coinChance > rnd) {
//                resources.coins.add(1);
//                logger.say("found a coin", 1, true);
//            }
//            else if (this.boneChance > rnd) {
//                resources.bones.add(1);
//                logger.say("bones... bones!", 1, true);
//            }
//            else if (this.stoneChance > rnd) {
//                resources.stone.add(1);
//                logger.say("this dirt is heavy.. ohh wait", 1, true);
//            } else {
//                logger.say("found nothing", 1, true);
//            }
//            this.show();
//        }
//    },
//    init: function () {
//        this.elm.innerHTML = "Search through the dirt";
//        this.elm.href = "#";

//        resources.dirt.elm.addEventListener('add', this.show); // Should show only be used like this, so that we can depend on the event? Or should it be used manually too?
//    },
//    show: function () {
//        if (this.canCraft())
//            craft.elm.appendChild(this.elm);
//        else
//            craft.elm.removeChild(this.elm);
//    },
//},
//{
//    name: "EmptyStones",
//    elm: document.createElement('a'),
//    coinChance: 1,

//    canCraft: function () {
//        if (resources.stone.value >= 100)
//            return true;
//        else
//            return false;
//    },
//    craft: function () {
//        if (this.canCraft()) {
//            resources.stone.add(-100);
//            resources.stonepile.add(1);
//            var rnd = Math.random() * 100;

//            if (this.coinChance > rnd) {
//                resources.coins.add(1);
//                logger.say("money is not everything, get back down NOW!", 1, true);
//            } else {
//                logger.say("CONTINUE!", 1, true);
//            }
//            this.show();
//        }
//    },
//    init: function () {
//        this.elm.innerHTML = "Lift up the stones";
//        this.elm.href = "#";

//        resources.stone.elm.addEventListener('add', this.show); // Should show only be used like this, so that we can depend on the event? Or should it be used manually too?
//    },
//    show: function () {
//        if (this.canCraft())
//            craft.elm.appendChild(this.elm);
//        else
//            craft.elm.removeChild(this.elm);
//    },
//}
//]

