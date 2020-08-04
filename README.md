# bruteforce
 Bruteforce hashed passwords

 Create a bruteforce program in php to crack the passwords. Print out only first cracked password.

 Inputs:
	1. File password contains 100 password hashes
	2. File dictionary contains 46305 possible passwords
	3. password plaintext contains two letter long salt from set [a, b, c, d, e, f, g, h, i, j, k]
	4. password format plaintext is <2 letter salt>$<plaintext password>

 Outputs:
	1. Print out cracked password in format "<password plaintext> = <password hash>\n". 
	2. Print out the number of tries in format "count = <count>\n".
	3. Print out time in seconds to reach the result (2 decimal precision) in format "time = <time>\n".
	
	
# How to use whose code:
Create a project in Webstorm (or download to an existing one), download all the adjacent files (most of the modules with package.json will not be useful, but they are very useful in the future), install the module and that's all.1 more nuance when you open the bruteforce.js file, change the path when calling the function to (./passwords.txt or dictuonary.txt) or create a pass-hash folder and move the txt files there.

