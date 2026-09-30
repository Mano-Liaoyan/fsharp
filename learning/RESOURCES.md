# F# and Functional Domain Modeling Resources

Checked on 2026-09-30. These are the starting sources; add sources for each
later lesson when that lesson is prepared.

## Knowledge

### For the first lesson

- [Microsoft: Naming values with `let`](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/let-bindings)
  Primary reading for lesson 0001. Read the opening explanation and the simple
  `let i = 1` example; later sections assume concepts we have not introduced.
- [Microsoft: Printing text](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/plaintext-formatting)
  Use for `printfn` and the `%s` text placeholder. Other formatting options are
  reference material for later lessons.
- [Microsoft: F# Interactive](https://learn.microsoft.com/en-us/dotnet/fsharp/tools/fsharp-interactive/)
  Use to check how `dotnet fsi` runs a saved `.fsx` script.

### For later lessons

- [Book: *Domain Modeling Made Functional*, Scott Wlaschin](https://pragprog.com/titles/swdddf/domain-modeling-made-functional/)
  Primary reading and verified chapter outline. Use for the full progression from
  domain discovery to implementation. The publisher also links extracts and code.
- [Author's description of the book](https://fsharpforfunandprofit.com/books/)
  Explains the relationship between the book and the author's free articles.
  Use the articles as supplements to the structured reading.
- [Author's extended code examples](https://github.com/swlaschin/DomainModelingMadeFunctional)
  Compare your implementation with the original and evolved order-taking contexts
  after doing your own exercise. The author marks this repository as not actively
  maintained; check compatibility before using its dependencies.
- [Microsoft: Tour of F#](https://learn.microsoft.com/en-us/dotnet/fsharp/tour)
  Language orientation. Use for values, functions, indentation, tuples, lists,
  and modules as those features become necessary.
- [Microsoft: Records](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/records)
  Named fields and immutable record updates. Use when several facts belong together.
- [Microsoft: Discriminated unions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/discriminated-unions)
  Alternative cases with their own data. Use for business choices and domain states.
- [Microsoft: Pattern matching](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/pattern-matching)
  Handling union cases explicitly. Use when interpreting a business choice.
- [Microsoft: Results](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/results)
  Explicit success and error values. Use for validation and fallible pipelines.
- [Scott Wlaschin: Designing with types, introduction](https://fsharpforfunandprofit.com/posts/designing-with-types-intro/)
  Grouping related information into meaningful types. Use as a bridge from raw
  fields to a domain model.
- [Scott Wlaschin: Making illegal states unrepresentable](https://fsharpforfunandprofit.com/posts/designing-with-types-making-illegal-states-unrepresentable/)
  Use after records, unions, and matching have been introduced. It explains
  which combinations a model permits and how explicit choices can improve it.

## Wisdom (Communities)

- [F# Software Foundation](https://fsharp.org/)
  Links to the F# community and ways to get involved. When you have a small model
  and a concrete tradeoff, seek feedback from practitioners. Participation is optional.

## Gaps

- Available study time, book access, and the learner's eventual business domain
  are not established yet. The goal is to build a real business application in
  F#; the learner is an experienced programmer who is new to F#.
- This workspace currently contains a course map and one lesson for zero F# experience.
  Later lessons will be authored in response to demonstrated progress.
- A chapter map is a coverage target, not a claim of having studied the entire text.
  Consult the relevant book chapter when preparing each later lesson.
