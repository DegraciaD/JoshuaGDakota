game.track = me.Entity.extend({
    init: function (x, y, settings) {
        this._super(me.Entity, 'init', [x, y, {
                image: "track",
                width: 853,
                height: 480,
                spritewidth: "853",
                spritehieght: "480",
                getShape: function () {
                    return (new me.Rect(0, 0, 853, 480)).toPolygon();
                }
            }]);
        
        }
});
