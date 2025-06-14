# Drone Delivery Simulator

## Overview

This project simulates a drone delivery system designed to transport essential medicines from city hubs to remote villages in Zimbabwe. It operates on a simplified 2D coordinate grid where drones pick up medicine packages at hubs and deliver them to designated villages.

## Features

* **Hub and Village Objects:**
  Each hub has a name, coordinates, and a list of villages it serves. Villages are defined by their names, coordinates, and required medicines (e.g., tetanus, malaria, flu meds).

* **Drone Class:**
  Models drones with properties like name, speed, battery life (lasting up to 48 hours), and current position. Drones can move, deliver packages, and return to hubs for recharging.

* **Route and Delivery Simulation:**
  The drone calculates the route starting from the hub, delivers medicines to each village, and returns back to the starting hub.

* **Battery Management:**
  Battery consumption is tracked according to travel distance and speed. The drone automatically returns to recharge when battery levels are low.

## Purpose

This project demonstrates core programming concepts such as object-oriented design, coordinate-based navigation, and state management in JavaScript. It provides a foundation for building real-world logistics simulations and can be extended with visualization tools or more complex routing algorithms.