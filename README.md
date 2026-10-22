# BIC21203 Lab 4a - Client-Side Scripting (JavaScript)

**Name:** Muhammad Akmal Asri bin Kamal
**Student ID:** CI250026
**Course:** BIC21203 Web Development, FCSIT, UTHM

## Structure
```
index.html      (links to all questions)
style.css       (shared styling)
q1/  index.html, script.js
q2/  index.html, script.js
q3/  index.html, script.js
```

## Explanation
- **Q1 - Text Changer:** `getElementById()` selects the paragraph and button. `changeMessage()` sets the paragraph's `textContent` to "Hello there!" and is attached with `addEventListener("click", ...)`.
- **Q2 - Number Validator:** `checkInput()` trims the input, treats empty/whitespace as invalid, converts with `Number()`, checks `isNaN()`, then uses `if...else if...else` to show lower / higher / equal to 10. Output goes to `#result` via `textContent`. Decimals such as 10.5 are valid.
- **Q3 - Number Generator:** `generateNumbers()` clears the list, then a `for` loop (1 to 5) creates each `<li>` with `document.createElement()`, sets `textContent`, and appends it to `#numberList`. Repeated clicks do not duplicate items.

## How to run
Open `index.html` (or `q1/index.html`, `q2/index.html`, `q3/index.html`) in any modern desktop browser. No libraries or server needed.

## Test cases
| Q | Input / Action | Expected output |
|---|---|---|
| 1 | Page load | Welcome to my website! |
| 1 | Click Change Message | Hello there! |
| 2 | 5 | The number is lower than 10 |
| 2 | 10 | The number is equal to 10 |
| 2 | 15 | The number is higher than 10 |
| 2 | 10.5 | The number is higher than 10 |
| 2 | abc | Please enter a valid number! |
| 2 | (empty / spaces) | Please enter a valid number! |
| 3 | Click Generate (once or many times) | 5 items, "The number is 1" to "The number is 5" |

## Screenshots
Add your browser screenshots here (e.g. `![Q1](screenshots/q1.png)`).
