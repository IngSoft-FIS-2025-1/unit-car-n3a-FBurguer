import Car from "../src/car";
import { expect, test, describe, beforeEach } from "@jest/globals";

/* Jest Cheatsheet https://github.com/sapegin/jest-cheat-sheet */

let car;

describe("Car", () => {
  beforeEach(() => {
    car = new Car("Toyota", "Corolla", 2023, 180);
    car.speed = 50;
  });

  describe("accelerate", () => {
    test("should increase speed by the specified amount", () => {
      car.accelerate(20);
      expect(car.speed).toBe(70);
    });

    test("should not increase speed beyond the maximum speed limit", () => {
      car.speed = 90;
      expect(() => car.accelerate(100)).toThrowError(
        "Speed limit has been reached.",
      );
    });

    test("should not accept negative amount", () => {
      const negativeAmount = -20;
      expect(() => car.accelerate(negativeAmount)).toThrowError(
        "Amount should be a positive number.",
      );
    });
  });

  describe("decelerate", () => {
    test("should decrease speed by the specified amount", () => {
      const speedToDecrease = 25;
      car.decelerate(speedToDecrease);
      expect(car.speed).toBe(25);
    });

    test("should not decrease speed below zero", () => {
      const speedToDecrease = 100;
      car.decelerate(speedToDecrease);
      expect(car.speed).toBe(0);
    });

    test("should not accept a negative amount", () => {
      expect(() => car.decelerate(-1)).toThrowError(
        "Amount should be a positive number.",
      );
    });
  });

  describe("getSpeed", () => {
    test("should return the speed it was asigned", () => {
      expect(car.getSpeed()).toBe(50);
    });
  });

  describe("stop", () => {
    test("should change speed to 0", () => {
      car.stop();
      expect(car.getSpeed()).toBe(0);
    });
  });

  describe("calculateDistance", () => {
    test("should return distance based on speed of the car and parameter time", () => {
      const time = 100;
      expect(car.calculateDistance(time)).toBe(5000);
    });
  });

  describe("isMoving", () => {
    test("should return true", () => {
      expect(car.isMoving()).toBeTruthy();
    });
  });

  describe("getDescription", () => {
    test("should return a string composed by the year, make and model of the car", () => {
      expect(car.getDescription()).toBe("2023 Toyota Corolla");
    });
  });
});
