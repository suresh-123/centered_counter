import { expect, test } from 'vitest';
import { factory } from './factory';

test('creates a count function', function () {
  const count = factory(1, 1);
  expect(count()).toBe(2);
  expect(count()).toBe(3);
});

test('creates a count starting from 10 with a step of 5', function () {
  const count = factory(10, 5);
  expect(count()).toBe(15);
  expect(count()).toBe(20);
});

test('defaults to start 0, step 1 when no arguments passed', function () {
  const count = factory();
  expect(count()).toBe(1);
  expect(count()).toBe(2);
});

test('handles negative start value and negative step', function () {
  const count = factory(-10, -3);
  expect(count()).toBe(-13);
  expect(count()).toBe(-16);
});

test('handles non-integer start and step', function () {
  const count = factory(1.5, 2.5);
  expect(count()).toBe(4);
  expect(count()).toBe(6.5);
});

test('handles large values', function () {
  const count = factory(1000000, 1000000);
  expect(count()).toBe(2000000);
  expect(count()).toBe(3000000);
});

test('handles step of zero', function () {
  const count = factory(5, 0);
  expect(count()).toBe(5);
  expect(count()).toBe(5);
});
