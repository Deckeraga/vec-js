import { Vector2 } from '../Vector2';

test('Vector2 Init', () => {
  const aVec = new Vector2(1, -1);
  const aVec2 = new Vector2(0, 0);
  const aVec3 = new Vector2(-23.56, 72.81);

  assertVectorValuesEqual(aVec, new Vector2(1, -1));
  assertVectorValuesEqual(aVec2, new Vector2(0, 0));
  assertVectorValuesEqual(aVec3, new Vector2(-23.56, 72.81));
});

test('Vector2 sub', () => {
  const aVec = Vector2.one();
  const aVec2 = Vector2.zero();
  const aVec3 = new Vector2(10, -45);
  const aVec4 = new Vector2(-1, -12);
  const aVec5 = new Vector2(1.1, -2.4);

  assertVectorValuesEqual(aVec.sub(aVec2), aVec);
  assertVectorValuesEqual(aVec3.sub(aVec4), new Vector2(11, -33));
  assertVectorValuesEqual(aVec4.sub(aVec5), new Vector2(-2.1, -9.6));
});

test('Vector2 add', () => {
  const aVec = new Vector2(0, 0);
  const aVec2 = new Vector2(1, 1);
  const aVec3 = new Vector2(10, -45);
  const aVec4 = new Vector2(-1.45, 25.6);

  assertVectorValuesEqual(aVec.add(aVec2), new Vector2(1, 1));
  assertVectorValuesEqual(aVec.add(aVec4), new Vector2(-1.45, 25.6));
  assertVectorValuesEqual(aVec2.add(aVec3), new Vector2(11, -44));
  assertVectorValuesEqual(aVec2.add(aVec4), new Vector2(-0.45, 26.6));

  assertVectorValuesEqual(aVec.add(aVec2), aVec2.add(aVec));
  assertVectorValuesEqual(aVec3.add(aVec2), aVec2.add(aVec3));
  assertVectorValuesEqual(aVec4.add(aVec2), aVec2.add(aVec4));
  assertVectorValuesEqual(aVec3.add(aVec4), aVec4.add(aVec3));
});

test('Vector2 dot', () => {
  const aVec = new Vector2(1, 2);
  const aVec2 = new Vector2(4, -5);
  const aVec3 = new Vector2(6, -1);
  const aVec4 = new Vector2(4, 18);
  const aVec5 = new Vector2(0, 3);
  const aVec6 = new Vector2(2, 3);
  const aVec7 = Vector2.up();
  const aVec8 = Vector2.right();
  const aVec9 = new Vector2(-1, 1);
  const aVec10 = Vector2.one();

  expect(aVec.dot(aVec2)).toBe(-6);
  expect(aVec3.dot(aVec4)).toBe(6);
  expect(aVec5.dot(aVec6)).toBe(9);
  expect(aVec7.dot(aVec8)).toBe(0);
  expect(aVec9.dot(aVec10)).toBe(0);
});

test('Vector2 scale', () => {
  const aVec3 = new Vector2(3, 2.5);

  assertVectorValuesEqual(Vector2.one().scale(5), new Vector2(5, 5));
  assertVectorValuesEqual(Vector2.one().scale(-9.2), new Vector2(-9.2, -9.2));
  assertVectorValuesEqual(Vector2.zero().scale(88), new Vector2(0, 0));
  assertVectorValuesEqual(aVec3.scale(4), new Vector2(12, 10));
});

test('Vector2 orthogonalTo', () => {
  const aVec = new Vector2(-1, 1);

  expect(Vector2.left().orthogonalTo(Vector2.up())).toBeTruthy();
  expect(Vector2.left().orthogonalTo(Vector2.right())).toBeFalsy();
  expect(Vector2.down().orthogonalTo(Vector2.right())).toBeTruthy();
  expect(Vector2.down().orthogonalTo(Vector2.up())).toBeFalsy();
  expect(Vector2.one().orthogonalTo(aVec)).toBeTruthy();
});

test('Vector2 parallelTo', () => {
  expect(Vector2.up().parallelTo(Vector2.down())).toBeTruthy();
  expect(Vector2.left().parallelTo(Vector2.right())).toBeTruthy();
  expect(Vector2.left().parallelTo(Vector2.up())).toBeFalsy();
  expect(Vector2.one().parallelTo(Vector2.up())).toBeFalsy();
  expect(new Vector2(12, 3).parallelTo(new Vector2(4, 1))).toBeTruthy();
});

test('Vector2 normalize', () => {
  const aVec = new Vector2(12, 0);
  const aVec2 = new Vector2(0, -0.3);
  const aVec3 = new Vector2(0.7, 12.2);

  assertVectorValuesEqual(aVec.normalize(), Vector2.right());
  assertVectorValuesEqual(Vector2.one().normalize(), new Vector2(0.7071, 0.7071));
  assertVectorValuesEqual(aVec2.normalize(), Vector2.down());
  assertVectorValuesEqual(aVec3.normalize(), new Vector2(0.05728, 0.99836));

  expect(aVec.normalize().norm()).toBeCloseTo(1);
  expect(aVec2.normalize().norm()).toBeCloseTo(1);
  expect(aVec3.normalize().norm()).toBeCloseTo(1);
});

test('Vector2 norm', () => {
  const aVec3 = new Vector2(-1, 15);
  const aVec4 = new Vector2(-1.876, 0);

  expect(Vector2.up().norm()).toBe(1);
  expect(Vector2.zero().norm()).toBe(0);
  expect(aVec3.norm()).toBeCloseTo(15.033);
  expect(aVec4.norm()).toBeCloseTo(1.876);
});

test('Vector2 distance', () => {
  const aVec = new Vector2(3, 4);
  const aVec2 = new Vector2(6, 8);
  const aVec3 = new Vector2(-24.67, 44.89);

  expect(aVec.distance(aVec2)).toBe(5);
  expect(Vector2.zero().distance(aVec2)).toBe(10);
  expect(Vector2.one().distance(Vector2.one())).toBe(0);
  expect(aVec3.distance(aVec3)).toBeCloseTo(0);
  expect(aVec3.distance(aVec2)).toBeCloseTo(47.97417);
});

test('Vector2 equals', () => {
  const aVec = Vector2.zero();
  const aVec2 = Vector2.one();
  const aVec3 = new Vector2(-2, 3);
  const aVec4 = new Vector2(-2.1, 2.9);
  const aVec5 = Vector2.one();

  expect(aVec.equals(aVec)).toBeTruthy();
  expect(aVec.equals(aVec2)).toBeFalsy();
  expect(aVec2.equals(aVec5)).toBeTruthy();
  expect(aVec3.equals(aVec4)).toBeFalsy();
  expect(aVec.equals(aVec, 0.1)).toBeTruthy();
  expect(aVec3.equals(aVec4, 0.1)).toBeFalsy();
  expect(aVec3.equals(aVec4, -0.11)).toBeTruthy();
  expect(aVec3.equals(aVec4, 0.11)).toBeTruthy();
});

test('Vector2 toString', () => {
  const aVec3 = new Vector2(-1, 15);
  const aVec4 = new Vector2(-1.876, -4);

  expect(Vector2.up().toString()).toBe('[0,1]');
  expect(Vector2.zero().toString()).toBe('[0,0]');
  expect(aVec3.toString()).toBe('[-1,15]');
  expect(aVec4.toString()).toBe('[-1.876,-4]');
});

test('Vector2 toArray', () => {
  const aVec3 = new Vector2(-1, 15);
  const aVec4 = new Vector2(-1.876, -4);

  expect(Vector2.down().toArray()).toEqual([0, -1]);
  expect(Vector2.zero().toArray()).toEqual([0, 0]);
  expect(aVec3.toArray()).toEqual([-1, 15]);
  expect(aVec4.toArray()).toEqual([-1.876, -4]);
});

test('Vector2 one', () => {
  assertVectorValuesEqual(Vector2.one(), new Vector2(1, 1));
});

test('Vector2 zero', () => {
  assertVectorValuesEqual(Vector2.zero(), new Vector2(0, 0));
});

test('Vector2 up', () => {
  assertVectorValuesEqual(Vector2.up(), new Vector2(0, 1));
});

test('Vector2 down', () => {
  assertVectorValuesEqual(Vector2.down(), new Vector2(0, -1));
});

test('Vector2 left', () => {
  assertVectorValuesEqual(Vector2.left(), new Vector2(-1, 0));
});

test('Vector2 right', () => {
  assertVectorValuesEqual(Vector2.right(), new Vector2(1, 0));
});

test('Vector2 fromArray', () => {
  assertVectorValuesEqual(Vector2.fromArray([1, 0, -1.2]), new Vector2(1, 0));
});

test('Vector2 get/set', () => {
  const aVec = Vector2.zero();
  const aVec2 = Vector2.one();
  const aVec3 = new Vector2(-1, -1);
  const aVec4 = new Vector2(33.241, -66.9);

  expect(aVec.x).toEqual(aVec.i);
  expect(aVec.y).toEqual(aVec.j);

  expect(aVec2.x).toEqual(aVec2.i);
  expect(aVec2.y).toEqual(aVec2.j);

  expect(aVec3.x).toEqual(aVec3.i);
  expect(aVec3.y).toEqual(aVec3.j);

  expect(aVec4.x).toEqual(aVec4.i);
  expect(aVec4.y).toEqual(aVec4.j);
});

function assertVectorValuesEqual(theV: Vector2, theV2: Vector2) {
  expect(theV.x).toBeCloseTo(theV2.x);
  expect(theV.y).toBeCloseTo(theV2.y);
}
