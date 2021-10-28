import simplifySvgPath from '@luncheon/simplify-svg-path';

function plot(pointList) {
    var path = simplifySvgPath(pointList);
    var pathData = "";

    // for (var i = 0; i < pointList.length - 1; i += 1) {
    //     var point = pointList[i];
    //     if (i < pointList.length - 1) {
    //         if (!smooth) {
    //             pathData += (i == 0 ? "M" : "L") + point.x + " " + point.y + " ";
    //         } else {
    //             pathData += (i == 0 ? ("M" + point.x + " " + point.y + " ") : ("Q" + point.x + " " + point.y + ", " + pointList[i + 1].x + " " + pointList[i + 1].y + " "));
    //             // pathData += (i == 0 ? ("M" + Number.parseInt(point.x) + " " + Number.parseInt(point.y) + " ") : ("T" + Number.parseInt(point.x) + " " + Number.parseInt(point.y) + " "));
    //         }
    //     }
    // }
    return path;
}


export { Point, Line, plot };