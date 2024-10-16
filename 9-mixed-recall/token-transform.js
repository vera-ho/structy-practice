// Write a function, tokenTransform, that takes in an object of tokens and a string. In the object, the replacement values for a token may reference other tokens. The function should return a new string where tokens are replaced with their fully evaluated string values.
// Tokens are enclosed in a pair of '$'. You can assume that the input string is properly formatted and '$' is not used in the string except to enclose a token.
// You may assume that there are no circular token dependencies.

// Approach
// Use two pointers to find a token noted by a start and end '$'
// Add characters to an output array until a token is found
// Increment the end pointer until the next '$'
// Take the token's value and recursively call the function using the value as the string input
// Take the recursive call's result and add to the array; save to memo
// Update pointers and continue

// n - string or value length; m = number of tokens
// Time complexity: O(n^m) exponential
// Space complexity:  O(n^m) exponential
const tokenTransform = (s, tokens) => {
  if (s in tokens) return tokens[s];
  
  const string = [];
  let start = 0;
  let end = 1;

  while (start < s.length) {
    const char = s[start];
    if (char !== '$') {
      string.push(char);
      start++;
      end++;
    } else {
      if (s[end] !== '$') {
        end++;
      } else {
        const token = s.slice(start, end + 1);
        const value = tokenTransform(tokens[token], tokens);

        tokens[token] = value;
        string.push(value);
        
        start = end + 1;
        end = start + 1;
      }
    }
  }

  return string.join('');
};

/******************************************************************************/

// const tokens = {
//   $LOCATION$: "$ANIMAL$ park",
//   $ANIMAL$: "dog",
// };
// tokenTransform("Walk the $ANIMAL$ in the $LOCATION$!", tokens);
// // -> 'Walk the dog in the dog park!'

/******************************************************************************/

// const tokens = {
//   $ADJECTIVE_1$: "quick",
//   $ADJECTIVE_2$: "eager",
//   $ADVERBS$: "$ADJECTIVE_1$ly and $ADJECTIVE_2$ly",
//   $VERB$: "hopped $DIRECTION$",
//   $DIRECTION$: "North",
// };
// tokenTransform("the $ADJECTIVE_1$ fox $ADVERBS$ $VERB$ward", tokens);
// // -> 'the quick fox quickly and eagerly hopped Northward'

/******************************************************************************/

// const tokens = {
//   $B$: "epicly $C$",
//   $A$: "pretty $B$ problem $D$",
//   $D$: "we have",
//   $C$: "clever",
// };
// tokenTransform("What a $A$ here!", tokens);
// // -> 'What a pretty epicly clever problem we have here!'

/******************************************************************************/

// const tokens = {
//   $1$: "a$2$",
//   $2$: "b$3$",
//   $3$: "c$4$",
//   $4$: "d$5$",
//   $5$: "e$6$",
//   $6$: "f!",
// };
// tokenTransform("$1$ $1$ $1$ $1$ $1$ $1$ $4$ $4$", tokens);
// // -> 'abcdef! abcdef! abcdef! abcdef! abcdef! abcdef! def! def!'

/******************************************************************************/

// const tokens = {
//   $0$: "$1$$1$$1$$1$$1$$1$$1$$1$$1$$1$$1$$1$",
//   $1$: "$2$$2$$2$$2$$2$$2$$2$$2$$2$",
//   $2$: "$3$$3$$3$$3$$3$$3$$3$",
//   $3$: "$4$$4$$4$$4$$4$$4$",
//   $4$: "$5$$5$$5$$5$$5$",
//   $5$: "$6$$6$$6$$6$",
//   $6$: "$7$$7$$7$",
//   $7$: "$8$$8$",
//   $8$: "",
// };
// tokenTransform("z$0$z$0$z$0$z$0$z$0$z$0$z", tokens);
// // -> 'zzzzzzz'
