/**
 * Class representing a 3 dimensional vector
 */
export class Vector3 {
	/**
	 * Generate a Vector3 from an array
	 * @param theArray The length 3 array to generate the vector from.
	 * @returns A vector containing the values from the array.
	 */
	public static fromArray(theArray: number[]): Vector3 {
		return new Vector3(theArray[0], theArray[1], theArray[2]);
	}

	/**
	 * @returns A normalized vector with 1 in the X,Y,Z directions.
	 */
	public static one(): Vector3 {
		return new Vector3(1, 1, 1);
	}

	/**
	 * @returns A 3D zero vector.
	 */
	public static zero(): Vector3 {
		return new Vector3(0, 0, 0);
	}

	/**
	 * @returns A normalized vector in the Y direction
	 */
	public static up(): Vector3 {
		return new Vector3(0, 1, 0);
	}

	/**
	 * @returns A normalized vector in the -Y direction
	 */
	public static down(): Vector3 {
		return new Vector3(0, -1, 0);
	}

	/**
	 * @returns A normalized vector in the -X direction
	 */
	public static left(): Vector3 {
		return new Vector3(-1, 0, 0);
	}

	/**
	 * @returns A normalized vector in the X direction
	 */
	public static right(): Vector3 {
		return new Vector3(1, 0, 0);
	}

	/**
	 * @returns A normalized vector in the Z direction
	 */
	public static forward(): Vector3 {
		return new Vector3(0, 0, 1);
	}

	/**
	 * @returns A normalized vector in the -Z direction
	 */
	public static back(): Vector3 {
		return new Vector3(0, 0, -1);
	}

	private myX: number;
	private myY: number;
	private myZ: number;

	/**
	 * Initialize a new Vector3 from 3 numbers
	 * @param theX The X value.
	 * @param theY The Y value.
	 * @param theZ The Z value.
	 * @constructor
	 */
	constructor(public theX: number, public theY: number, public theZ: number) {
		this.myX = theX;
		this.myY = theY;
		this.myZ = theZ;
	}

	/**
	 * Subtract a vector from this vector.
	 * @param theVector The vector to subtract from this vector.
	 * @returns A new vector containing the subtraction result.
	 */
	public sub(theVector: Vector3): Vector3 {
		return new Vector3(this.x - theVector.x, this.y - theVector.y, this.z - theVector.z);
	}

	/**
	 * Add a vector to this vector.
	 * @param theVector The vector to add.
	 * @returns A new vector containing the addition result.
	 */
	public add(theVector: Vector3): Vector3 {
		return new Vector3(this.x + theVector.x, this.y + theVector.y, this.z + theVector.z);
	}

	/**
	 * Calculate the dot product of this and another vector.
	 * @param theVector The vector to dot with this vector.
	 * @returns The dot product of this and provided vector.
	 */
	public dot(theVector: Vector3): number {
		return this.x * theVector.x + this.y * theVector.y + this.z * theVector.z;
	}

	/**
	 * Scale this vector.
	 * @param theScalar The scalar factor.
	 * @returns A new, scaled vector.
	 */
	public scale(theScalar: number): Vector3 {
		return new Vector3(this.x * theScalar, this.y * theScalar, this.z * theScalar);
	}

	/**
	 * Calculate the cross product between this and another vector.
	 * @param theVector The other vector.
	 * @returns A new vector containing the cross product.
	 */
	public cross(theVector: Vector3): Vector3 {
		return new Vector3(
			this.y * theVector.z - this.z * theVector.y,
			this.z * theVector.x - this.x * theVector.z,
			this.x * theVector.y - this.y * theVector.x,
		);
	}

	/**
	 * Determine if this and another vector are perpendicular.
	 * @param theVector The other vector.
	 * @returns True if the two vectors are perpendicular.
	 */
	public orthogonalTo(theVector: Vector3): boolean {
		return this.dot(theVector) === 0;
	}

	/**
	 * Determine if this and another vector are parallel.
	 * @param theVector the other vector.
	 * @returns True if the two vectors are parallel.
	 */
	public parallelTo(theVector: Vector3): boolean {
		return this.norm() === 0 || theVector.norm() === 0 || new Vector3(0, 0, 0).equals(this.cross(theVector));
	}

	/**
	 * Normalize this vector.
	 * @returns the normalized vector.
	 */
	public normalize(): Vector3 {
		const aNorm: number = this.norm();
		return new Vector3(this.x / aNorm, this.y / aNorm, this.z / aNorm);
	}

	/**
	 * Calculate the norm (length) of the vector.
	 * @returns The norm of the vector.
	 */
	public norm(): number {
		if (this.equals(Vector3.zero())) {
			return 0;
		}
		const aRadicand: number = this.x * this.x + this.y * this.y + this.z * this.z;
		return Math.sqrt(aRadicand);
	}

	/**
	 * Calculate the distance between two vectors.
	 * @param theVector The other vector.
	 * @returns The distance between the two vectors.
	 */
	public distance(theVector: Vector3): number {
		return Math.sqrt(
			Math.pow(this.x - theVector.x, 2) + Math.pow(this.y - theVector.y, 2) + Math.pow(this.z - theVector.z, 2),
		);
	}

	/**
	 * Determine equality between this and another vector.
	 * @param theVector The other Vector.
	 * @param theEpsilon Optional: a tolerance value for comparing non-integer values.
	 * @returns True if the vectors are equal.
	 */
	public equals(theVector: Vector3, theEpsilon?: number): boolean {
		if (typeof theEpsilon === 'number') {
			theEpsilon = Math.abs(theEpsilon);
			const anX: boolean = theVector.x > this.x - theEpsilon && theVector.x < this.x + theEpsilon;
			const anY: boolean = theVector.y > this.y - theEpsilon && theVector.y < this.y + theEpsilon;
			const anZ: boolean = theVector.z > this.z - theEpsilon && theVector.z < this.z + theEpsilon;
			return anX && anY && anZ;
		}
		return this.x === theVector.x && this.y === theVector.y && this.z === theVector.z;
	}

	/**
	 * Get vector as string.
	 */
	public toString(): string {
		return '[' + this.myX + ',' + this.myY + ',' + this.myZ + ']';
	}

	/**
	 * Get vector as array.
	 */
	public toArray(): number[] {
		return [this.myX, this.myY, this.myZ];
	}

	/////////////////////////
	// Getters and Setters //
	/////////////////////////

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

	get z(): number {
		return this.myZ;
	}

	set z(theZ: number) {
		this.myZ = theZ;
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

	get k(): number {
		return this.myZ;
	}

	set k(theK: number) {
		this.myZ = theK;
	}
}
