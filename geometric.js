/**
 * @file geometric.js
 * @description Geometric library
 */

import simplifySvgPath from '@luncheon/simplify-svg-path';

const { Config } = require('./shapes.Config.json');
const CURVE_RESOLUTION = 2 * Math.PI / 36;

function plot_with_simplify(pointList) {
    return simplifySvgPath(pointList);
}

/**
 * Converts degrees to radians
 * @param {*} deg 
 * @returns 
 */
function radian(deg) {
    return deg * Math.PI / 180;
}

/**
 * Creates SVG Path data from a list of points
 * @param {*} pointList 
 * @param {*} closed 
 * @returns 
 */
function plot(pointList, closed = true) {
    var pathData = "";

    for (var i = 0; i < pointList.length; i++) {
        var point = pointList[i];
        pathData += (i == 0 ? "M" : "L") + point[0] + " " + point[1] + " ";
    }

    // Close the path if required
    pathData += closed ? "Z" : "";

    return pathData;
}

function draw(group, shape, args) {
    var pathData;
    switch (Number(group)) {
        case 0:
            pathData = PolarRose(...args);
            break;
        case 1:
            switch (Number(shape)) {
                case 0:
                    pathData = TrigFunc('sin', ...args);
                    break;
                case 1:
                    pathData = TrigFunc('cos', ...args);
                    break;
                case 2:
                    pathData = TrigFunc('tan', ...args);
                    break;
                default:
                    pathData = TrigFunc('sin', ...args);
                    break;
            }
            break;
        case 2:
            pathData = Polygon(...args);
            break;
        case 3:
            switch (Number(shape)) {
                case 0:
                    pathData = ArchSpiral(...args);
                    break;
                case 1:
                    pathData = LogSpiral(...args);
                    break;
                case 2:
                    pathData = FermatSpiral(...args);
                    break;
            }
            break;
        case 4:
            pathData = Superellipse(...args);
            break;
        case 5:
            pathData = Astroid(...args);
            break;
    }

    return pathData;
}

/**
 * Generates a polar rose
 * @param {*} amplitude 
 * @param {*} cycles 
 * @param {*} timePeriod 
 * @param {*} resolution 
 * @param {*} offset 
 * @returns 
 */
function PolarRose(amplitude, cycles, timePeriod, offset, resolution) {
    var pointList = [];

    var k = cycles / timePeriod;

    for (let i = 0; i <= timePeriod * (2 * Math.PI); i += 2 * Math.PI / resolution) {
        let r = amplitude * Math.cos(k * i) + offset;
        let x = r * Math.cos(i);
        let y = r * Math.sin(i);
        pointList.push([x, y]);
    }
    return plot(pointList);
}

function ArchSpiral(a, b, t) {
    var pointList = [];

    for (let i = 0; i <= t * 2 * Math.PI; i += CURVE_RESOLUTION) {
        let r = a + b * i;
        let x = r * Math.cos(i);
        let y = r * Math.sin(i);
        pointList.push([x, y]);
    }
    return plot(pointList);
}

function LogSpiral(a, k, t) {
    var pointList = [];

    for (let i = 0; i <= t * 2 * Math.PI; i += CURVE_RESOLUTION) {
        let r = a * Math.exp(k * i);
        let x = r * Math.cos(i);
        let y = r * Math.sin(i);

        pointList.push([x, y]);
    }

    return pointList;
}

/**
 * Generates a trigonometric function
 * @param {*} pointList 
 * @param {*} closed 
 * @returns 
 */
function TrigFunc(wave, amplitude, timePeriod, cycles, resolution) {
    var pointList = [];

    let x = 0;
    let xoff = 1;
    let f = 100 / timePeriod;

    for (let t = 0; t < (cycles / f) * 2 * Math.PI; t += 2 * Math.PI / resolution) {

        let y = 0;

        switch (wave) {
            case 'sin':
                y = amplitude * Math.sin(f * t);
                break;
            case 'cos':
                console.log("hello cos");
                y = amplitude * Math.cos(f * t);
                break;
            case 'tan':
                y = Math.min(amplitude * Math.tan(f * t), amplitude * 3);
                break;
        }

        pointList.push([x, y]);

        x += xoff;
    }

    return plot(pointList, false);
}

function Superellipse(n, a, b) {
    var pointList = [];

    for (let i = 0; i <= 2 * Math.PI; i += CURVE_RESOLUTION) {
        let x = Math.sign(Math.cos(i)) * a * Math.pow(Math.abs(Math.cos(i)), 2 / n);
        let y = Math.sign(Math.sin(i)) * b * Math.pow(Math.abs(Math.sin(i)), 2 / n);

        pointList.push([x, y]);
    }

    return plot(pointList);
}

function Polygon(n, m) {
    var pointList = [];

    for (let i = 0; i <= 2 * Math.PI; i += 2 * Math.PI / n) {
        let x = m * Math.cos(i);
        let y = m * Math.sin(i);
        pointList.push([x, y]);
    }

    return plot(pointList);
}

function Astroid(a) {
    var pointList = [];

    for (let i = 0; i <= 2 * Math.PI; i += CURVE_RESOLUTION) {

        let x = a * Math.pow(Math.cos(i), 3);
        let y = a * Math.pow(Math.sin(i), 3);
        pointList.push([x, y]);
    }

    return plot(pointList);
}

export { Config, draw, radian, PolarRose, ArchSpiral, LogSpiral, TrigFunc, Superellipse, Polygon, Astroid };
export { plot };