/**
 * Class representing a 2 dimensional vector
 */
export class Vector2 {
	/**
	 * Generate a Vector2 from an array
	 * @param theArray The length 2 array to generate the vector from.
	 * @returns A vector containing the values from the array.
	 */
	public static fromArray(theArray: number[]): Vector2 {
		return new Vector2(theArray[0], theArray[1]);
	}

	/**
	 * @returns A normalized vector with 1 in the X,Y directions.
	 */
	public static one(): Vector2 {
		return new Vector2(1, 1);
	}

	/**
	 * @returns A 2D zero vector.
	 */
	public static zero(): Vector2 {
		return new Vector2(0, 0);
	}

	/**
	 * @returns A normalized vector in the Y direction
	 */
	public static up(): Vector2 {
		return new Vector2(0, 1);
	}

	/**
	 * @returns A normalized vector in the -Y direction
	 */
	public static down(): Vector2 {
		return new Vector2(0, -1);
	}

	/**
	 * @returns A normalized vector in the -X direction
	 */
	public static left(): Vector2 {
		return new Vector2(-1, 0);
	}

	/**
	 * @returns A normalized vector in the X direction
	 */
	public static right(): Vector2 {
		return new Vector2(1, 0);
	}

	private myX: number;
	private myY: number;

	/**
	 * Initialize a new Vector2 from 2 numbers
	 * @param theX The X value.
	 * @param theY The Y value.
	 * @constructor
	 */
	constructor(public theX: number, public theY: number) {
		this.myX = theX;
		this.myY = theY;
	}

	/**
	 * Subtract a vector from this vector.
	 * @param theVector The vector to subtract from this vector.
	 * @returns A new vector containing the subtraction result.
	 */
	public sub(theVector: Vector2): Vector2 {
		return new Vector2(this.x - theVector.x, this.y - theVector.y);
	}

	/**
	 * Add a vector to this vector.
	 * @param theVector The vector to add.
	 * @returns A new vector containing the addition result.
	 */
	public add(theVector: Vector2): Vector2 {
		return new Vector2(this.x + theVector.x, this.y + theVector.y);
	}

	/**
	 * Calculate the dot product of this and another vector.
	 * @param theVector The vector to dot with this vector.
	 * @returns The dot product of this and provided vector.
	 */
	public dot(theVector: Vector2): number {
		return this.x * theVector.x + this.y * theVector.y;
	}

	/**
	 * Scale this vector.
	 * @param theScalar The scalar factor.
	 * @returns A new, scaled vector.
	 */
	public scale(theScalar: number): Vector2 {
		return new Vector2(this.x * theScalar, this.y * theScalar);
	}

	/**
	 * Determine if this and another vector are perpendicular.
	 * @param theVector The other vector.
	 * @returns True if the two vectors are perpendicular.
	 */
	public orthogonalTo(theVector: Vector2): boolean {
		return this.dot(theVector) === 0;
	}

	/**
	 * Determine if this and another vector are parallel.
	 * @param theVector the other vector.
	 * @returns True if the two vectors are parallel.
	 */
	public parallelTo(theVector: Vector2): boolean {
		return (
			this.norm() === 0 ||
			theVector.norm() === 0 ||
			this.normalize().equals(theVector.normalize(), 0.00001) ||
			this.scale(-1)
				.normalize()
				.equals(theVector.normalize(), 0.00001)
		);
	}

	/**
	 * Normalize this vector.
	 * @returns the normalized vector.
	 */
	public normalize(): Vector2 {
		const aNorm: number = this.norm();
		return new Vector2(this.x / aNorm, this.y / aNorm);
	}

	/**
	 * Calculate the norm (length) of the vector.
	 * @returns The norm of the vector.
	 */
	public norm(): number {
		const aRadicand: number = this.x * this.x + this.y * this.y;
		return Math.sqrt(aRadicand);
	}

	/**
	 * Calculate the distance between two vectors.
	 * @param theVector The other vector.
	 * @returns The distance between the two vectors.
	 */
	public distance(theVector: Vector2): number {
		return Math.sqrt(Math.pow(this.x - theVector.x, 2) + Math.pow(this.y - theVector.y, 2));
	}

	/**
	 * Determine equality between this and another vector.
	 * @param theVector The other Vector.
	 * @param theEpsilon Optional: a tolerance value for comparing non-integer values.
	 * @returns True if the vectors are equal.
	 */
	public equals(theVector: Vector2, theEpsilon?: number): boolean {
		if (typeof theEpsilon === 'number') {
			theEpsilon = Math.abs(theEpsilon);
			const anX: boolean = theVector.x > this.x - theEpsilon && theVector.x < this.x + theEpsilon;
			const anY: boolean = theVector.y > this.y - theEpsilon && theVector.y < this.y + theEpsilon;
			return anX && anY;
		}
		return this.x === theVector.x && this.y === theVector.y;
	}

	/**
	 * Get vector as string.
	 */
	public toString(): string {
		return '[' + this.myX + ',' + this.myY + ']';
	}

	/**
	 * Get vector as array.
	 */
	public toArray(): number[] {
		return [this.myX, this.myY];
	}

	// Getters and Setters
	get x(): number {
		return this.myX;
	}

	set x(theX: number) {
		this.myX = theX;
	}

	get y(): number {
		return this.myY;
	}

	set y(theY: number) {
		this.myY = theY;
	}

	get i(): number {
		return this.myX;
	}

	set i(theI: number) {
		this.myX = theI;
	}

	get j(): number {
		return this.myY;
	}

	set j(theJ: number) {
		this.myY = theJ;
	}
}
