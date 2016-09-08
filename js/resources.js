// Singular plural and 0.



var resources = {
    dirt: {
        value: 0,
        elm: document.createElement('tr'),
        elmName: document.createElement('td'),
        elmVal: document.createElement('td'),
        init: function () {
            this.elmName.innerHTML = "Dirt";
        },
        add: function (val) {
            if (!this.visible) {
                resources.elm.appendChild(this.elm)
                this.visible = true;
            }

            this.value += val;
            this.elmVal.innerHTML = this.value;

            this.elm.dispatchEvent(new CustomEvent('add', { detail: { total: this.value, value: val } }));
        },
        visible: false
    },
    stonepile: {
        value: 0,
        elm: document.createElement('tr'),
        elmName: document.createElement('td'),
        elmVal: document.createElement('td'),
        init: function () {
            this.elmName.innerHTML = "Pile of stone";
        },
        add: function (val) {
            if (!this.visible) {
                resources.elm.appendChild(this.elm)
                this.visible = true;
            }

            this.value += val;
            this.elmVal.innerHTML = this.value;

            this.elm.dispatchEvent(new CustomEvent('add', { detail: { total: this.value, value: val } }));
        },
        visible: false
    },
    bones: {
        value: 0,
        elm: document.createElement('tr'),
        elmName: document.createElement('td'),
        elmVal: document.createElement('td'),
        init: function () {
            this.elmName.innerHTML = "Bone"; // Bones?
        },
        add: function (val) {
            if (!this.visible) {
                resources.elm.appendChild(this.elm)
                this.visible = true;
            }

            this.value += val;
            this.elmVal.innerHTML = this.value;

            this.elm.dispatchEvent(new CustomEvent('add', { detail: { total: this.value, value: val } }));
        },
        visible: false
    },

    coins: {
        value: 0,
        elm: document.createElement('tr'),
        elmName: document.createElement('td'),
        elmVal: document.createElement('td'),
        init: function () {
            this.elmName.innerHTML = "Coin";
        },
        add: function (val) {
            if (!this.visible) {
                resources.elm.appendChild(this.elm)
                this.visible = true;
            }

            this.value += val;
            this.elmVal.innerHTML = this.value;

            this.elm.dispatchEvent(new CustomEvent('add', { detail: { total: this.value, value: val } }));
        },
        visible: false
    },

    gravel: {
        value: 0,
        elm: document.createElement('tr'),
        elmName: document.createElement('td'),
        elmVal: document.createElement('td'),
        init: function () {
            this.elmName.innerHTML = "Gravel";
        },
        add: function (val) {
            if (!this.visible) resources.elm.appendChild(this.elm);

            this.value += val;
            this.elmVal.innerHTML = this.value;

            this.elm.dispatchEvent(new CustomEvent('add', { detail: { total: this.value, value: val } }));
        },
        visible: false
    },

    stone: {
        value: 0,
        elm: document.createElement('tr'),
        elmName: document.createElement('td'),
        elmVal: document.createElement('td'),
        init: function () {
            this.elmName.innerHTML = "Stone";
        },
        add: function (val) {
            if (!this.visible) resources.elm.appendChild(this.elm);

            this.value += val;
            this.elmVal.innerHTML = this.value;

            this.elm.dispatchEvent(new CustomEvent('add', { detail: { total: this.value, value: val } }));
        },
        visible: false
    },

    elm: document.getElementById('resources').getElementsByTagName('table')[0]
}
