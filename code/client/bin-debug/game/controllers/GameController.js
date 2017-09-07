var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameController = (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        return _super.call(this, ModuleEnum.GAME) || this;
    }
    GameController.prototype.getLoadGroup = function (data) {
        var mapIDArr = [101, 102, 103];
        var keyArr = [];
        for (var i = 0, iLen = mapIDArr.length; i < iLen; i++) {
            var imgKey = "";
            var bgImgKey1 = "";
            var bgImgKey2 = "";
            if (keyArr.indexOf(imgKey) === -1) {
                keyArr.push(imgKey);
            }
            if (keyArr.indexOf(bgImgKey1) === -1) {
                keyArr.push(bgImgKey1);
            }
            if (keyArr.indexOf(bgImgKey2) === -1) {
                keyArr.push(bgImgKey2);
            }
        }
        if (keyArr.length > 0) {
            RES.createGroup('map', keyArr);
        }
        return ['map', 'soundMap'];
    };
    GameController.prototype.preShow = function (data) {
    };
    GameController.prototype.show = function (data) {
    };
    GameController.prototype.hide = function () {
    };
    return GameController;
}(core.Control));
__reflect(GameController.prototype, "GameController");
//# sourceMappingURL=GameController.js.map