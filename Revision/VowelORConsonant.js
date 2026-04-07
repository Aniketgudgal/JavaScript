/*
Vowel or Consonant
Logic:
Check if character is a, e, i, o, u (case-insensitive).
Example:
Input: e
Output: Vowel
*/
let ch = 'U';
if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u')
{
	console.log("Vowel");
}
else if(ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U')
{
	console.log("Vowel");
}
else
{
	console.log("Consonant");
}