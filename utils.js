
/**
 * map a value from one range to another
 * @param {float} x 
 * @param {float} in_min Minimum value of input range
 * @param {float} in_max Maximum value of input range
 * @param {float} out_min Minimum value of output range
 * @param {float} out_max Maximum value of output range
 * @return {float} x mapped to the new range
 */
function map(x, in_min, in_max, out_min, out_max) {
	return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

/**
 * Angle between two points
 */
class Angle {

    /**
     * Angle() creates a new angle
     * @param {float} angle angle in degrees/radians
     * @param {string} unit unit of angle, either 'deg' or 'rad'
     * @return {Angle} new angle
     */
    constructor(angle, unit) {
        if (unit === "deg") {
            this.angle = angle;
        } else if (unit === "rad") {
            this.angle = angle * 180 / Math.PI;
        } else {
            throw new Error("Angle: invalid unit");
        }
    }

    /**
     * setAngle() updates the angle
     * @param {float} angle angle in degrees
     * @return null
     */
    setDegrees(angle) {
        this.angle = angle;
    }

    /**
     * setRadian() updates the angle
     * @param {float} angle angle in radian
     * @return null
     */
    setRadians(angle) {
        this.angle = angle * 180 / Math.PI;
    }

    /**
     * getDegrees() returns the angle in degrees
     * @return {float} angle in degrees
     */
    getDegrees() {
        return this.angle;
    }

    /**
     * getRadians() returns the angle in radians
     * @return {float} angle in radians
     */
    getRadians() {
        return this.angle * Math.PI / 180;
    }
}

/**
 * Vec2 represents a 2D vector
 */
class Vec2 {

    /**
     * Vec2() creates a new vector
     * @param {float} x x-coordinate
     * @param {float} y y-coordinate
     * @return {Vec2} new vector
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

/**
 * Vec3 represents a 3D vector
 */
class Vec3 {

    /**
     * Vec3() creates a new vector
     * @param {float} x x-coordinate
     * @param {float} y y-coordinate
     * @param {float} z z-coordinate
     * @return {Vec3} new vector
     */
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

export { map, Angle, Vec2, Vec3 };