import simplifySvgPath from '@luncheon/simplify-svg-path';

function plot(pointList) {
    return simplifySvgPath(pointList);
}


export { Point, Line, plot };