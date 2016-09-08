// I wonder if the smartest way to do this is just to write a *somthing* tree and then try to dynamicly generate the javascript... 
// Cause the method used now adds A LOT of extra code..


// TODO soon:
// On hover display (red) -n after resources 
//    This is hard... 
// Process multiple/buy multiple --> binary row, on hover display number
// Scrolla istället för att clicka när man kommit långt?

// Desktop only


// Resources:
// 'elm' htmlelement, the table row for the element *deprecated*
// 'elmValue' htmlelement, the element which displays the value of the resource to the user.
// 'elmName' htmlelement, the element which displats the name of the resource to the user.
// 'add' function, this function adds n resources
// 'add' event, this event is triggered every time a resource is added and detail should be a object {value: x, total: x + total}
// 'value' property, contains the value of the resource.
// 'init' function, called once when the page has loaded.
// 'visible' boolean, set to true once the user is able to see the resource.


// Craftables:
// 'craft' function, validates that the user is allowed to create an object and crafts it (also "pays the price").
// 'init' function, called once when the page has loaded.
// ['show'] function, some kind of function which makes the craftable resource visible to the user (hook it up the the events).


// Upgrades:
// 'elmName' htmlelement, the element which displats the name of the resource to the user.
// 'init' function, called once when the page has loaded.
// 'visible' boolean, set to true once the user is able to see the resource. 
// 'bought' boolean, set to true once the player has acquired the item.
// 'buy' function, validates that the user is allowed to create an object and buys it (also "pays the price").


// Settings:
// Hide resources that are too expensive
// Ligh/dark mode

function init() {
    for (var res in resources) {
        var r = resources[res];
        if (typeof r === "undefined") continue;

        if (!isElement(r)) {
            r.elm.appendChild(r.elmName);
            r.elm.appendChild(r.elmVal);

            if (isFunction(r.init))
                r.init();
        }
    }

    for (var crafts in craftables) {
        var r = craftables[crafts];
        if (typeof r === "undefined") continue;

        if (isFunction(r.show))
            r.show = r.show.bind(r);

        if (isFunction(r.init))
            r.init();

        if (isFunction(r._init))
            r._init();

        if (isFunction(r.craft) && isElement(r.elm))
            r.elm.addEventListener("click", r.craft.bind(r))
    }

    for (var upg in upgrades) {
        var r = upgrades[upg];
        if (typeof r === "undefined") continue;

        if (isFunction(r.show))
            r.show = r.show.bind(r);

        if (isFunction(r.init))
            r.init();

        if (isFunction(r.buy) && isElement(r.elm))
            r.elm.addEventListener("click", r.buy.bind(r))
    }

    for (var act in actions) {
        var a = actions[act];
        a.elm.addEventListener("click", a.action.bind(a)); // We do not intend to remove any listeners, but if that would be the case we'll just recycle the whole element!
    }

    inventory.init();

    resources.stone.elm.addEventListener('add', function () { // It would be a good idéea to remove all event handlers sometime in the future.
        if (document.getElementById('toggle_inventory').classList.contains('hidden')) {
            document.getElementById('toggle_inventory').classList.remove('hidden');
            logger.say("It is time to check your inventory.");
        }
    });
/*

    setTimeout(function () {
        for (var i = 0; i < 1000; i++) {
            actions.dig.action();
        }
    }, 0);
*/

    logger.say("just find it!", 2);
}



function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

function isElement(o) {
    return (
      typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
      o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
    );
}


window.onload = init;