# Teaching notes

- User preference: keep all materials for this course inside `learning/`.
  Treat this folder as the teaching workspace for future lessons and records.

- Learner requested the `teach` skill and wants to learn F# in this repo through
  the subject matter of Scott Wlaschin's *Domain Modeling Made Functional*.
- Learner confirmed the goal: model and implement a real business application
  in F#. Background: experienced programmer, new to F#. Their other languages,
  book ownership, eventual business domain, and available study time are unknown.
- The order-taking practice project follows the book's domain. Use it to build
  the skills in MISSION.md, then check transfer to a different business domain.
- The learner explicitly has ZERO F# experience and could not follow the original
  union/match lesson. That lesson has been replaced with running a script, naming
  a string using `let`, and printing it. Introduce each symbol before using it.
- Assume general programming experience, but no familiarity with F# calling
  syntax, type notation, operators, file conventions, or terminology. Use short
  examples, explain each line, distinguish terminal commands from F# code, and
  always show expected output. Let the learner's attempt determine the next step.
- Current lesson: `lessons/0001-your-first-script.html`. Its practice file has
  exactly two lines. Keep exercises free of unrelated checker implementations.
  Preserve the learner's TODO when verifying a completed example in a temporary file.
- No F# understanding has been assessed. Learning record 0002 captures the
  corrected starting level; it does not claim mastery.
- Environment checked: .NET SDK 10.0.400; F# Interactive 10.0. No packages needed
  for the first exercise.
