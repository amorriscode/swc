//// [ExportFunctionWithInaccessibleTypesInReturnTypeAnnotation.ts]
var A;
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
!function(A) {
    var fromOrigin = function(p) {
        return new Line({
            x: 0,
            y: 0
        }, p);
    }, Point = function Point() {
        "use strict";
        _class_call_check(this, Point);
    };
    A.Point = Point;
    var Line = function Line(start, end) {
        "use strict";
        _class_call_check(this, Line), this.start = start, this.end = end;
    };
    A.fromOrigin = fromOrigin;
}(A || (A = {}));
