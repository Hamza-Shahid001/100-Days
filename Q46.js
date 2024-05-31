"use strict";
/*Q46

Enhanced laptop Object: Construct an object */
Object.defineProperty(exports, "__esModule", { value: true });
var obj = {
    laptopName: "Lenovo ThinkPad",
    Specs: {
        Core: "i7",
        screen_size: "14 inch",
        ram: "8GB",
        SSD: "256GB",
        Graphic_Card: "NVIDIA 3600GT",
        operatingSystem: "64-bit Windows OS",
        describe: function () {
            console.log("This is very good laptop with ".concat(this.Core, " having ").concat(this.SSD, " which makes it suitable for large data storage."));
        }
    }
};
obj.Specs.describe();
// console.log(obj)
// console.log(obj.Specs.Graphic_Card +", " +obj.Specs.operatingSystem)
