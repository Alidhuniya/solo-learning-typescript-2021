/*
It can be tempting to think that the types Number, String, Boolean, Symbol, or Object are the same as the lowercase versions
 recommended above. These types do not refer to the language primitives however, and almost never should be used as a type.
*/

function reverse(s: String): String {
    return s.split("").reverse().join("");
  }
  
  reverse("hello world");

//   Instead, use the types number, string, boolean, object and symbol.

function reverse1(s: string): string {
    return s.split("").reverse().join("");
  }
  
  console.log(reverse1("hello world"));