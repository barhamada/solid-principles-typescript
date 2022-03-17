## SOLID Principles with Typescript

  

* [Introduction](#introduction)

* [The Single Responsibility Principle](#the-single-responsibility-principle)

* [The Open-Closed Principle](#the-open-closed-principle)

* [The Liskov Substitution Principle](#the-liskov-substitution-principle)

* [The Interface Segregation Principle](#the-interface-segregation-principle)

* [The Dependency Inversion Principle](#the-dependency-inversion-principle)
  

## Introduction

**Dependencies**:
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
- [typescript](https://www.npmjs.com/package/typescript)

**Notice**:

All these scripts was executed with:

- windows 10 Pro
- Node.js v14.17.3
- Npm 6.14.13

----------------------

The SOLID Principles are five principles of Object-Oriented class design. They are a set of rules and best practices to follow while designing a class structure.
These five principles help us understand the need for certain design patterns and software architecture in general.

The SOLID principles were first introduced by the famous Computer Scientist Robert C. Martin (a.k.a Uncle Bob) in 2000. But the SOLID acronym was introduced later by Michael Feathers.
Uncle Bob is also the author of bestselling books  _[Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)_  and  _[Clean Architecture](https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164)_

They all serve the same purpose:

> "To create understandable, readable, and testable code that many developers can collaboratively work on."

Following the SOLID acronym, they are:

-   The  **S**ingle Responsibility Principle
-   The  **O**pen-Closed Principle
-   The  **L**iskov Substitution Principle
-   The  **I**nterface Segregation Principle
-   The  **D**ependency Inversion Principle

## The Single Responsibility Principle
As Robert Martin aka Uncle Bob explains it:

> Single responsibility principle states that a class should only have one reason to change, in other words like it should do only one thing.

**Implementation**
This is a simple book class with some fields. Nothing fancy. 
I am not making fields private so that we don't need to deal with getters and setters and can focus on the logic instead.
The invoice class will contain the logic for creating the invoice and calculating the total price. 
For now, assume that our bookstore only sells books and nothing else.

**Mistake**
Ok so what's going on here? Our class violates the Single Responsibility Principle in multiple ways.
The first violation is the printInvoice method, which contains our printing logic. The SRP states that our class should only have a single reason to change, and that reason should be a change in the invoice calculation for our class. But in this architecture, if we wanted to change the printing format, we would need to change the class. This is why we should not have printing logic mixed with business logic in the same class.

There is another method that violates the SRP in our class: the saveToFile method. It is also an extremely common mistake to mix persistence logic with business logic. Don't just think in terms of writing to a file – it could be saving to a database, making an API call, or other stuff related to persistence.

**Correction**

We can create new classes for our printing and persistence logic so we will no longer need to modify the invoice class for those purposes.
We create 2 classes, InvoicePrinter and InvoicePersistence, and move the methods.

Command:

    npm run srp

## The Open-Closed Principle

> Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification..

So what this principle wants to say is: We should be able to add new functionality without touching the existing code for the class. This is because whenever we modify the existing code, we are taking the risk of creating potential bugs. So we should avoid touching the tested and reliable (mostly) production code if possible.

**Implementation**
We have a Rectangle class and now our customer wants us to build an application that can calculate the total area of a collection of rectangles.
We present our solution, the AreaCalculator class to our customer and he signs us his praise.
But later, he also wonders if we couldn’t extend it so that it could calculate the area of not only rectangles but of circles as well.

**Mistake**
Unfortunately we, as the lazy developer, did not design the classes to be easily extendable in the future.
So in order to add this feature, we add a Circle class and have modified the AreaCalculator class. We violate the OCP: we modified our AreaCalculator class to add new functionality. If our class design obeyed the Open-Closed principle we would not need to change it.

**Correction**
We create a Shape interface and the Rectangle and Circle classes will inherit this interface. This interface will have the method that calculates the area.
Now whenever we have a new shape to add, we won't change the AreaCalculator class

Command:

    npm run ocp

## The Liskov Substitution Principle
>LSP is a principle in object-oriented programming stating that, in a computer program, if S is a subtype of T, then objects of type T may be replaced with objects of type S (i.e., an object of type T may be substituted with any object of a subtype S) without altering any of the desirable properties of the program (correctness, a task performed, etc.).

This is the expected behavior, because when we use inheritance we assume that the child class inherits everything that the superclass has. The child class extends the behavior but never narrows it down.
Therefore, when a class does not obey this principle, it leads to some nasty bugs that are hard to detect.
Liskov's principle is easy to understand but hard to detect in code

**Implementation**
We have a Bird class that contain a "fly" method.
Next, we create a Duck and Ostrich classes that extend Bird.

**Mistake**
Our Ostrich class violates the Liskov Substitution Principle because
it implements a "fly" method but actually an Ostrich can't fly.

**Correction**
We romeve the "fly" method from Bird class and move it to a FlyingBird class.
Now Duck class extends FlyingBird as a duck can fly and Ostrich extends Bird class because it can't fly

Command:

    npm run lsp


## The Interface Segregation Principle

>Clients should not be forced to depend upon interfaces that they do not use

Segregation means keeping things separated, and the Interface Segregation Principle is about separating the interfaces.

The principle states that many specific interfaces are better than one general-purpose interface. A class should not be forced to implement a function it does no need.

**Implementation**
Consider the requirements of an application that builds different types of transportation vehicles. Each vehicle will have a price and color.
Vehicles such as car can start and stop moving while some vehicles such as airplanes can both move and fly.

**Mistake**
As you can see in the code, Car needs to provide an implementation fly() method, even though it does not require them. This is a violation of the Interface Segregation Principle. These might affect code readability

**Correction**
The solution is segregate the Vehicle interface into multiple role interfaces each for specific behavior. Now Vehicle interface with the setPrice() and setColor() methods as all vehicles will have a price and color, all Vehicle implementation classes can implement this interface. 
Then, Movable and Flyable interfaces to represent moving and flying behaviors in vehicles.

Command:

    npm run isp

## The Dependency Inversion Principle

> 1. High-level modules should not depend on low-level modules. Both should depend on abstractions.
> 2.  Abstractions should not depend on details. Details should depend on abstractions.
> 
This way, instead of high-level modules depending on low-level modules, both will depend on abstractions. Every dependency in the design should target an interface or an abstract class. No dependency should target a concrete class.

**Implementation**
A budget reporting system that reads from a database

**Mistake**
Everything works fine, but this code violates the dependency inversion principle because our high-level module  BudgetReport  concretely depends on the low-level module  MySQLDatabase.
This also violates the open-closed principle because what if we wanted a different kind of database such as MongoDB?
We will have to change the  BudgetReport  class to have if-else statements for it not to break.

**Correction**
To fix this is pretty simple, instead of concretely relying on the database class, we should use an abstraction. We will create a DatabaseInterface which will implement any kind of database we need and finally we can inject our database through the constructor.
Now our BudgetReport does not depend concretely on the database class but on its abstraction DatabaseInterface. This approach also follows the open-closed principle because to add any new database we don't have to change the BudgetReport class. We just need to add a new database class that implements the DatabaseInterface.

Command:

    npm run dip

----

  

**Feel free to contact me**:

amadoubeye1988@gmail.com