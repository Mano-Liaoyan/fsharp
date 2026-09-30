# From your first F# script to a business application

You are starting with zero F# experience. The [mission](MISSION.md) remains to
build a real business application. First we need to make the language readable.

Start with [Lesson 01](lessons/0001-your-first-script.html). It is the only lesson
currently available. Everything below is a route we will take gradually.

## First, learn enough F# to read the examples

Each row can take one or more short lessons. New symbols will be explained before
they appear in an exercise.

| Step | What we will do | You are ready when you can… |
| --- | --- | --- |
| 1 — available now | Run a `.fsx` file, name text with `let`, print it | Change the displayed name and explain both lines. |
| 2 | Work with numbers and calculations | Calculate an order quantity and explain text versus numbers. |
| 3 | Write and call a function | Give a function an input and predict its output. |
| 4 | Make decisions with `if` | Write a simple rule with two possible results. |
| 5 | Create new values from existing ones | Explain how a calculation produces a result without changing its inputs. |
| 6 | Work with several items | Process a small list using a function you understand. |
| 7 | Group facts together using a record | Represent a customer's name and contact details together. |
| 8 | Represent alternatives using a union | Define a choice and construct each of its alternatives. |
| 9 | Handle alternatives using `match` | Explain which branch runs and where its data comes from. |
| 10 | Represent missing information and failure | Distinguish a missing value from an error, with `option` and `Result`. |

We will introduce file organization and further language features when the
examples need them. Your questions and attempts determine the pace.

## Then, work through the book

This mapping follows the [publisher's contents](https://pragprog.com/titles/swdddf/domain-modeling-made-functional/).
The tasks are exercises for this repository. Read the relevant book section when
we reach it; each chapter can need several lessons.

| Chapters | Question we will answer | Something you will produce |
| --- | --- | --- |
| 1–2 | What does the business do, and which words and rules matter? | A glossary and an order-taking story based on a short interview. |
| 3 | Which part of the application owns each job? | A diagram of responsibilities and communication. |
| 4–5 | How can types express the information and choices in that story? | An F# model, with an explanation of identity and which facts belong together. |
| 6 | How can we keep invalid data out? | Checked creation of values and examples of rejected input. |
| 7 | What stages does an order go through? | Types for each stage and descriptions of the allowed transitions. |
| 8–9 | How do small functions implement the whole process? | A working order flow with replaceable external dependencies. |
| 10 | How do we handle rejection, errors, and waiting for external work? | Success and failure examples that demonstrate the flow's behavior. |
| 11 | How do we send domain data outside our application? | Conversion to and from a transport format, with input checks. |
| 12 | How do we save data and retrieve it safely? | Persistence with a clearly explained transaction boundary. |
| 13 | How do we add new business rules? | Changes for shipping, customer benefits, promotions, and business hours. |

We will revisit language ideas in these examples. More advanced topics from the
book, such as function composition, `map` and `bind`, computation expressions,
asynchronous work, and units of measure, will get their own explanations when
the problem gives them a purpose.

## How a session works

1. Read one small example, with each new piece explained.
2. Predict its output.
3. Run it and compare the actual output.
4. Make one small change yourself.
5. Explain the result, or bring the confusing line back to our chat.

On the next study day, try the previous exercise from memory. Later, apply it to
a different example. These are study suggestions, not scheduled reminders.

At the end, implement a small workflow in a second business domain. Explain the
rules, represent them in code, and show how the code handles a change. That will
help establish that you can use the ideas beyond a familiar exercise.

No F# skill has been marked mastered yet. Ask `/teach review my exercise` when
you have tried the first lesson, or ask about any line that does not make sense.
