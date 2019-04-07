import { Vector3 } from '../Vector3';

test('Vector3 init', () => {
  const aVec = new Vector3(1, -1, 0);
  const aVec2 = new Vector3(100, -10.53, 0.12);

  assertVectorValuesEqual(aVec, new Vector3(1, -1, 0));
  assertVectorValuesEqual(aVec2, new Vector3(100, -10.53, 0.12));
});

test('Vector3 add', () => {
  const aVec = new Vector3(0, 0, 0);
  const aVec2 = new Vector3(1, 1, 1);
  const aVec3 = new Vector3(10, -45, -15);
  const aVec4 = new Vector3(-1.45, 25.6, 0);

  assertVectorValuesEqual(aVec.add(aVec2), new Vector3(1, 1, 1));
  assertVectorValuesEqual(aVec.add(aVec4), new Vector3(-1.45, 25.6, 0));
  assertVectorValuesEqual(aVec2.add(aVec3), new Vector3(11, -44, -14));
  assertVectorValuesEqual(aVec2.add(aVec4), new Vector3(-0.45, 26.6, 1));

  assertVectorValuesEqual(aVec.add(aVec2), aVec2.add(aVec));
  assertVectorValuesEqual(aVec3.add(aVec2), aVec2.add(aVec3));
  assertVectorValuesEqual(aVec4.add(aVec2), aVec2.add(aVec4));
  assertVectorValuesEqual(aVec3.add(aVec4), aVec4.add(aVec3));
});

test('Vector3 sub', () => {
  const aVec = Vector3.one();
  const aVec2 = Vector3.zero();
  const aVec3 = new Vector3(10, -45, -15);
  const aVec4 = new Vector3(-1, -12, 15);
  const aVec5 = new Vector3(1.1, -2.4, 100.5);

  assertVectorValuesEqual(aVec.sub(aVec2), aVec);
  assertVectorValuesEqual(aVec3.sub(aVec4), new Vector3(11, -33, -30));
  assertVectorValuesEqual(aVec4.sub(aVec5), new Vector3(-2.1, -9.6, -85.5));
});

test('Vector3 dot', () => {
  const aVec = new Vector3(1, 2, 3);
  const aVec2 = new Vector3(4, -5, 6);
  const aVec3 = new Vector3(6, -1, 3);
  const aVec4 = new Vector3(4, 18, -2);
  const aVec5 = new Vector3(0, 3, -7);
  const aVec6 = new Vector3(2, 3, 1);

  expect(aVec.dot(aVec2)).toBe(12);
  expect(aVec3.dot(aVec4)).toBe(0);
  expect(aVec5.dot(aVec6)).toBe(2);
});

test('Vector3 scale', () => {
  const aVec = Vector3.one();
  const aVec2 = Vector3.zero();
  const aVec3 = new Vector3(3, 2.5, 9);

  assertVectorValuesEqual(aVec.scale(5), new Vector3(5, 5, 5));
  assertVectorValuesEqual(aVec.scale(-9.2), new Vector3(-9.2, -9.2, -9.2));
  assertVectorValuesEqual(aVec2.scale(88), new Vector3(0, 0, 0));
  assertVectorValuesEqual(aVec3.scale(4), new Vector3(12, 10, 36));
});

test('Vector3 cross', () => {
  const aVec = new Vector3(3, -3, 1);
  const aVec2 = new Vector3(4, 9, 2);
  const aVec3 = new Vector3(-12, 12, -4);
  const aVec4 = new Vector3(2, 3, 4);
  const aVec5 = new Vector3(5, 6, 7);

  assertVectorValuesEqual(aVec.cross(aVec2), new Vector3(-15, -2, 39));
  assertVectorValuesEqual(aVec.cross(aVec3), Vector3.zero());
  assertVectorValuesEqual(aVec4.cross(aVec5), new Vector3(-3, 6, -3));
});

test('Vector3 orthogonalTo', () => {
  const aVec = Vector3.up();
  const aVec2 = Vector3.right();
  const aVec3 = new Vector3(-2, 1, 1);

  expect(aVec.orthogonalTo(aVec2)).toBeTruthy();
  expect(aVec2.orthogonalTo(aVec)).toBeTruthy();
  expect(aVec.orthogonalTo(aVec)).toBeFalsy();
  expect(aVec.orthogonalTo(aVec3)).toBeFalsy();
});

test('Vector3 parallelTo', () => {
  const aVec = Vector3.up();
  const aVec2 = new Vector3(0, 2, 0);
  const aVec3 = new Vector3(0, -2, 0);
  const aVec4 = new Vector3(-2, 0, 1);
  const aVec5 = new Vector3(-4, 0, 2);
  const aVec6 = Vector3.right();

  expect(aVec.parallelTo(aVec2)).toBeTruthy();
  expect(aVec.parallelTo(aVec3)).toBeTruthy();
  expect(aVec4.parallelTo(aVec5)).toBeTruthy();
  expect(aVec.parallelTo(aVec6)).toBeFalsy();
  expect(aVec.parallelTo(aVec5)).toBeFalsy();
});

test('Vector3 normalize', () => {
  const aVec = Vector3.up();
  const aVec2 = new Vector3(0, 2, 0);
  const aVec3 = new Vector3(0, -2, 0);
  const aVec4 = new Vector3(1, 0, -1);
  const aVec5 = new Vector3(-30, 15, 0);

  assertVectorValuesEqual(aVec.normalize(), aVec);
  assertVectorValuesEqual(aVec2.normalize(), aVec);
  assertVectorValuesEqual(aVec3.normalize(), Vector3.down());
  assertVectorValuesEqual(aVec4.normalize(), new Vector3(0.7071, 0, -0.7071));
  assertVectorValuesEqual(aVec5.normalize(), new Vector3(-0.8944, 0.4472, 0));

  expect(aVec.normalize().norm()).toBeCloseTo(1);
  expect(aVec2.normalize().norm()).toBeCloseTo(1);
  expect(aVec3.normalize().norm()).toBeCloseTo(1);
  expect(aVec4.normalize().norm()).toBeCloseTo(1);
  expect(aVec5.normalize().norm()).toBeCloseTo(1);
});

test('Vector3 norm', () => {
  const aVec = Vector3.zero();
  const aVec2 = Vector3.one();
  const aVec3 = Vector3.up();
  const aVec4 = new Vector3(-12, 12, -4);

  expect(aVec.norm()).toBe(0);
  expect(aVec2.norm()).toBeCloseTo(1.732);
  expect(aVec3.norm()).toBe(1);
  expect(aVec4.norm()).toBeCloseTo(17.435);
});

test('Vector2 distance', () => {
  const aVec = new Vector3(3, 4, 12);
  const aVec2 = new Vector3(6, 8, -7);
  const aVec3 = new Vector3(-24.67, 44.89, -110.2);

  expect(aVec.distance(aVec2)).toBeCloseTo(19.646883);
  expect(Vector3.zero().distance(aVec2)).toBeCloseTo(12.206556);
  expect(Vector3.one().distance(Vector3.one())).toBe(0);
  expect(aVec3.distance(aVec3)).toBeCloseTo(0);
  expect(aVec3.distance(aVec2)).toBeCloseTo(113.805804);
});

test('Vector3 equals', () => {
  const aVec = Vector3.zero();
  const aVec2 = Vector3.one();
  const aVec3 = new Vector3(2, 3, 4);
  const aVec4 = new Vector3(2.1, 2.9, 4.1);
  const aVec5 = Vector3.one();

  expect(aVec.equals(aVec)).toBeTruthy();
  expect(aVec.equals(aVec2)).toBeFalsy();
  expect(aVec2.equals(aVec5)).toBeTruthy();
  expect(aVec3.equals(aVec4)).toBeFalsy();
  expect(aVec3.equals(aVec4, 0.1)).toBeFalsy();
  expect(aVec3.equals(aVec4, -0.11)).toBeTruthy();
  expect(aVec3.equals(aVec4, 0.11)).toBeTruthy();
});

test('Vector3 toString', () => {
  const aVec = new Vector3(3, -3, 1);
  const aVec2 = Vector3.zero();

  expect(aVec.toString()).toBe('[3,-3,1]');
  expect(aVec2.toString()).toBe('[0,0,0]');
});

test('Vector3 toArray', () => {
  const aVec = new Vector3(2, 3, 0);
  const aVec2 = new Vector3(5, -6, 7);

  expect(aVec.toArray()).toEqual([2, 3, 0]);
  expect(aVec2.toArray()).toEqual([5, -6, 7]);
});

test('Vector3 one', () => {
  assertVectorValuesEqual(Vector3.one(), new Vector3(1, 1, 1));
});

test('Vector3 zero', () => {
  assertVectorValuesEqual(Vector3.zero(), new Vector3(0, 0, 0));
});

test('Vector3 up', () => {
  assertVectorValuesEqual(Vector3.up(), new Vector3(0, 1, 0));
});

test('Vector3 down', () => {
  assertVectorValuesEqual(Vector3.down(), new Vector3(0, -1, 0));
});

test('Vector3 left', () => {
  assertVectorValuesEqual(Vector3.left(), new Vector3(-1, 0, 0));
});

test('Vector3 right', () => {
  assertVectorValuesEqual(Vector3.right(), new Vector3(1, 0, 0));
});

test('Vector3 forward', () => {
  assertVectorValuesEqual(Vector3.forward(), new Vector3(0, 0, 1));
});

test('Vector3 back', () => {
  assertVectorValuesEqual(Vector3.back(), new Vector3(0, 0, -1));
});

test('Vector3 fromArray', () => {
  assertVectorValuesEqual(Vector3.fromArray([1, 0, -1.2]), new Vector3(1, 0, -1.2));
});

test('Vector3 get/set', () => {
  const aVec = Vector3.zero();
  const aVec2 = Vector3.one();
  const aVec3 = new Vector3(-1, -1, -1);
  const aVec4 = new Vector3(33.241, -66.9, 0.123456);

  expect(aVec.x).toEqual(aVec.i);
  expect(aVec.y).toEqual(aVec.j);
  expect(aVec.z).toEqual(aVec.k);

  expect(aVec2.x).toEqual(aVec2.i);
  expect(aVec2.y).toEqual(aVec2.j);
  expect(aVec2.z).toEqual(aVec2.k);

  expect(aVec3.x).toEqual(aVec3.i);
  expect(aVec3.y).toEqual(aVec3.j);
  expect(aVec3.z).toEqual(aVec3.k);

  expect(aVec4.x).toEqual(aVec4.i);
  expect(aVec4.y).toEqual(aVec4.j);
  expect(aVec4.z).toEqual(aVec4.k);
});

function assertVectorValuesEqual(theV: Vector3, theV2: Vector3) {
  expect(theV.x).toBeCloseTo(theV2.x);
  expect(theV.y).toBeCloseTo(theV2.y);
  expect(theV.z).toBeCloseTo(theV2.z);
}
