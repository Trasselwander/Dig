
var actions = {
    dig: {
        elm: document.getElementById('dig'),
        dirtChance: 100,
        boneChance: 1,
        coinChance: .25,
        stoneChance: 0,

        action: function () {
            if (resources.stone.value > 100) {
                logger.say("too much stone, what the hell are you doing?!", 1);
                return;
            }

            var rnd = Math.random() * 100;

            var found = false;

            if (this.boneChance > rnd) {
                resources.bones.add(1);
                logger.say("found another bone", 1);
                found = true;
            }

            if (this.stoneChance > rnd) {
                resources.stone.add(1);
                logger.say("found a stone", 1);
                found = true;
            }

            if (this.coinChance > rnd) {
                resources.coins.add(1);
                logger.say("found a coin", 1)
                found = true;
            }

            if (this.dirtChance > rnd)
                resources.dirt.add(1);

            if (!found)
                logger.say("digging", 1);
        }
    },
    toggleInventory: {
        elm: document.getElementById('toggle_inventory'),

        action: function () {
            if (inventory.toggled) {
                inventory.hide();
                this.elm.innerHTML = "View inventory";
            }
            else {
                inventory.show();
                this.elm.innerHTML = "View log";
            }
        }

    }
}
