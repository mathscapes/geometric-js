import "utils";

/**
 * PolarRose a rose or rhodonea curve is a sinusoid specified by either the cosine or sine functions with no phase angle that is plotted in polar coordinates. 
 */
class PolarRose {
    constructor(amplitude, petalFactor, spatialFactor, gamma, offset, curveResolution) {
        this.amplitude = amplitude;
        this.petalFactor = petalFactor;
        this.spatialFactor = spatialFactor;
        this.gamma = Angle(gamma, "deg");
        this.offset = offset;
        this.curveResolution = curveResolution;
    }
    drawSVG(){
        var data = "";
        var k = this.petalFactor / this.spatialFactor;
        for (let i = 0; i < this.curveResolution * (2 * Math.PI); i += 0.005) {
            let r = this.amplitude * Math.cos(k * i + this.gamma.getRadians()) + this.offset;
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
}