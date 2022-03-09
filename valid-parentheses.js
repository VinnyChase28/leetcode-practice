function isValid(s) {
  // Using ArrayDeque is faster
  // than using Stack class
  let stack = [];

  // Traversing the Expression
  for (let i = 0; i < s.length; i++) {
    let x = s[i];
    if (x == "(" || x == "{" || x == "[") {
      stack.push(x);
      continue;
    }
    if (stack.length == 0) return false;
    let check;
    switch (x) {
      case "]":
        check = stack.pop();
        if (check == "{" || check == "(") return false;
        break;
      case "}":
        check = stack.pop();
        if (check == "(" || check == "[") return false;
        break;
      case ")":
        check = stack.pop();
        if (check == "{" || check == "[") return false;
        break;
    }
  }

  // Check Empty Stack
  if (stack.length == 0) {
    console.log("balanced");
    return true;
  }
}

// Function call
isValid("({}])");
