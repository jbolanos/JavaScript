/**
 * Operators in JavaScript are used to assign values, compare values, perform arithmetic operations,
 */

// Assignment operators
// Assignment operators are used to assign values to JavaScript variables.
// Operator	Example	Same As
// =	x = y	x = y
// +=	x += y	x = x + y
// -=	x -= y	x = x - y
// *=	x *= y	x = x * y
// /=	x /= y	x = x / y
// %=	x %= y	x = x % y
// **=	x **= y	x = x ** y

// Comparison operators
// Comparison operators are used in logical statements to determine equality or difference between variables or values.
// Operator	Name	Example
// ==	equal to	x == 8	false
// ==	equal to	x == 5	true
// ==	equal to	x == "5"	true
// ===	equal value and equal type	x === 5	true
// ===	equal value and equal type	x === "5"	false
// !=	not equal	x != 8	true
// !=	not equal	x != 5	false
// !==	not equal value or not equal type	x !== 5	false
// !==	not equal value or not equal type	x !== "5"	true
// >	greater than	x > 8	false
// <	less than	x < 8	true
// >=	greater than or equal to	x >= 8	false
// <=	less than or equal to	x <= 8	true

// Arithmetic operators
// Arithmetic operators are used to perform arithmetic between variables and/or values.
// Operator	Name	Example	Result in x	Result in y	Result in z
// +	Addition	x = 5; y = 2; z = x + y;	z = 7
// -	Subtraction	x = 5; y = 2; z = x - y;	z = 3
// *	Multiplication	x = 5; y = 2; z = x * y;	z = 10
// /	Division	x = 5; y = 2; z = x / y;	z = 2.5
// %	Modulus (division remainder)	x = 5; y = 2; z = x % y;	z = 1
// ++	Increment	x = 5; x++;	x = 6
// --	Decrement	x = 5; x--;	x = 4

// Logical operators
// Logical operators are used to determine the logic between variables or values.
// Operator	Name	Description
// &&	and	Returns true if both statements are true
// ||	or	Returns true if one of the statements is true
// !	not	Reverse the result, returns false if the result is true

// Type operators
// Type operators are used to determine the type of a JavaScript variable.
// Operator	Name	Description
// typeof	Returns the type of a variable
// instanceof	Returns true if an object is an instance of an object type

// Bitwise operators
// Bitwise operators are used to perform bitwise operations on operands.
// Operator	Name	Description
// &	AND	Sets each bit to 1 if both bits are 1
// |	OR	Sets each bit to 1 if one of two bits is 1
// ^	XOR	Sets each bit to 1 if only one of two bits is 1
// ~	NOT	Inverts all the bits
// <<	Zero fill left shift	Shift left by pushing zeros in from the right and let the leftmost bits fall off
// >>	Signed right shift	Shift right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
// >>>	Zero fill right shift	Shift right by pushing zeros in from the left, and let the rightmost bits fall off

// String operators
// Operator	Description
// +	Concatenation
// +=	Concatenation assignment

// Conditional (ternary) operator
// Operator	Description
// ?	condition ? exprIfTrue : exprIfFalse
