[<Measure>]
type cm

[<Measure>]
type sec

[<Measure>]
type speed = cm / sec

[<Measure>]
type acceleration = speed / sec


let x1 = 1.0<cm>
let x2 = 3.2<sec>

let y = x1 / x2

let s1 = 2.1<speed>
let s2 = s1 + y
