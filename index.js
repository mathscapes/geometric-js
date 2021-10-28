
function radian(deg) {
    return deg * Math.PI / 180;
}

function PolarRose(a, n, d, gamma, c) {
    //convert degrees to radians
    gamma = radian(gamma);

    var data = "";

    var k = n / d;

    for (let i = 0; i < d * (2 * Math.PI); i += 0.005) {
        let r = a * Math.cos(k * i + gamma) + c;
        let x = r * Math.cos(i);
        let y = r * Math.sin(i);
        let buf = x + " " + y;
        if (data == "") {
            data += "M " + buf + " ";
        } else {
            data += "L " + buf + " ";
        }
    }
    data += "Z";
    return data;
}

function ArchSpiral(a, b, t) {
    var data = "";

    for (let i = 0; i <= t * 2 * Math.PI; i += 0.01) {
        let r = a + b * i;
        let x = r * Math.cos(i);
        let y = r * Math.sin(i);
        let buf = x + " " + y;
        if (data == "") {
            data += "M " + buf + " ";
        } else {
            data += "L " + buf + " ";
        }
    }
    data += "Z";
    return data;
}

function LogSpiral(a, k, t) {
    var data = "";

    for (let i = 0; i <= t * 2 * Math.PI; i += 0.01) {
        let r = a * Math.exp(k * i);
        let x = r * Math.cos(i);
        let y = r * Math.sin(i);

        let buf = x + " " + y;
        if (data == "") {
            data += "M " + buf + " ";
        } else {
            data += "L " + buf + " ";
        }
    }
    data += "Z";
    return vector;
}

function TrigFunc(wave, a, f, phi, cycles) {
    let vector = figma.createVector();

    var data = "";
    let x = 0;
    let xoff = (1 / f);

    phi = radian(phi);

    for (let t = 0; t < (cycles / f) * 2 * Math.PI; t += 0.01) {

        let y = 0;

        switch (wave) {
            case 'sin':
                y = a * Math.sin(f * t + phi);
                break;
            case 'cos':
                y = a * Math.cos(f * t + phi);
                break;
        }

        let buf = x + " " + y;

        if (data == "") {
            data += "M " + buf + " ";
        } else {
            data += "L " + buf + " ";
        }

        x += xoff;
    }

    data += "Z";

    return data;
}

function Superellipse(n, a, b) {
    var data = "";

    for (let i = 0; i <= 2 * Math.PI; i += 0.01) {
        let x = Math.sign(Math.cos(i)) * a * Math.pow(Math.abs(Math.cos(i)), 2 / n);
        let y = Math.sign(Math.sin(i)) * b * Math.pow(Math.abs(Math.sin(i)), 2 / n);

        let buf = x + " " + y;
        if (data == "") {
            data += "M " + buf + " ";
        } else {
            data += "L " + buf + " ";
        }
    }

    data += "Z";
    return data;
}

function Polygon(n, m) {
    var data = "";

    for (let i = 0; i <= 2 * Math.PI; i += 2 * Math.PI / n) {
        let x = m * Math.cos(i);
        let y = m * Math.sin(i);
        let buf = x + " " + y;
        if (data == "") {
            data += "M " + buf + " ";
        } else {
            data += "L " + buf + " ";
        }
    }
    data += "Z";
    return data;
}

function Astroid(a) {
    var data = "";

    for (let i = 0; i <= 2 * Math.PI; i += 0.01) {

        let x = a * Math.pow(Math.cos(i), 3);
        let y = a * Math.pow(Math.sin(i), 3);
        let buf = x + " " + y;
        if (data == "") {
            data += "M " + buf + " ";
        } else {
            data += "L " + buf + " ";
        }
    }

    data += "Z";
    return data;
}

export {radian, PolarRose, ArchSpiral, LogSpiral, TrigFunc, Superellipse, Polygon, Astroid};