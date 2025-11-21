
# 📚 Library Management System (OOP Implementation)

A simple yet robust command-line interface (CLI) application for managing a library system. This project was built to demonstrate the practical application of Object-Oriented Programming (OOP) principles in Python.

## 🚀 Features

* **Add Items:** Register new Books and Magazines with specific attributes.
* **Search System:** Find items by Title or unique ID (case-insensitive).
* **View Collection:** Display a formatted list of all items in the library.
* **Data Validation:** Prevents adding items with duplicate IDs.
* **Interactive CLI:** User-friendly loop menu for continuous operation.

## 🧠 OOP Concepts Applied

This project strictly follows the 4 pillars of OOP:

1.  **Abstraction (`ABC`)**:
    * Used `LibraryItem` as an abstract base class.
    * Enforces a contract where all subclasses must implement `get_details()`.

2.  **Inheritance**:
    * `Book` and `Magazine` classes inherit common attributes (ID, Title) from `LibraryItem`, reducing code redundancy (DRY Principle).

3.  **Encapsulation**:
    * Protected attributes (`_item_id`, `_title`) are used to signal internal use.
    * Private attributes (`__collection`) in the `Library` class prevent direct external modification.
    * **Property Decorators** are used for safe attribute access (Getters).

4.  **Polymorphism**:
    * The `get_details()` method behaves differently depending on whether the object is a `Book` or a `Magazine`, allowing the main loop to treat all items uniformly.

## 🛠️ Technology Stack

* **Language:** Python 3.x
* **Paradigm:** Object-Oriented Programming

## 📂 Project Structure