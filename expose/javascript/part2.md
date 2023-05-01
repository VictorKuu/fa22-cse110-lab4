1. What will happen at line 12 and why? If the code causes an error, explain why.
The terminal will print 3. This is because there are three items listed under the list of prices, which the for loop will iterate over before terminating. It is also using var declaration meaning that regardless of the block it is defined in, it can be accessed anywhere inside the function it is defined in.

2. What will happen at line 13 and why? If the code causes an error, explain why.
150 will be printed. This is because for each price listed, the original price will be multiplied by a fraction, which represents the discount. Only the third price will show because that is the last item in the list. It is also using var declaration meaning that regardless of the block it is defined in, it can be accessed anywhere inside the function it is defined in.

3. What will happen at line 14 and why? If the code causes an error, explain why.
150 will be printed. Similar to #2, it will go through a series of calculations and only the third price will show because that is the last item in the list. It is also using var declaration meaning that regardless of the block it is defined in, it can be accessed anywhere inside the function it is defined in.

4. What will this function return? Give a brief explanation why. If the code causes an error, explain why.
[50, 100, 150]. the function will return the discounted price, menioned in the for loop, of all 3 items.

5. What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).
There will be an error. This is because we define i using let, which means that it can only be accessed within the block it is defined in. Because we want to print i outside of the block it was defined in, we get an error.

6. What will happen at line 13 and why? If the code causes an error, explain why.
There will be an error. This is because we defined discountedPrice using let, which means that it can only be accessed within the block it is defined in. Because we want to print discountedPrice outside of the block it was defined in, we get an error.

7. What will happen at line 14 and why? If the code causes an error, explain why
150 will be pinted. This is because we defined finalPrice at the very beginning of the function block. That means, blocks that refer to this variable will be remembered and accounted for and will successfully be printed at the end of the function.

8. What will this function return? Give a brief explanation. If the code causes an error, explain why.
[50, 100, 150] will be pinted. This is because we defined discounted at the very beginning of the function block. That means, blocks that refer to this variable will be remembered and accounted for and will successfully be printed at the end of the function.

9. What will happen at line 11 and why? If the code causes an error, explain why. 
There will be an error. This is because we define i using let, which means that it can only be accessed within the block it is defined in. Because we want to print i outside of the block it was defined in, we get an error.

10. What will happen at line 12 and why? If the code causes an error, explain why.
3. This is because there are three items listed under the list of prices. Length is also defined at the beginning of the function, meaning that the value will be remembered if asked to print at the end of the function. However, it is defined using const, meaning that additional changes later in the code will not be reflected. 

11. What will this function return? Give a brief explanation. If the code causes an error, explain why.
[50, 100, 150] will be pinted. This is because there are three prices, which will be discounted and added to the discounted list. The variable is  defined at the beginning of the function, meaning that the value will be remembered if asked to print at the end of the function. However, it is defined using const, meaning that additional changes to each value in the list later in the code will not be reflected.

12a. alert( student.name );
12b. alert( student["Grad Year"] );
12c. alert( student.greeting() );
12d. alert( student["Favorite Teacher"].name );
12e. alert( student.courseload[0] );

13a. "32"           Concatenation is happening 
13b. 1              Subtracting numbers (regardless of what type)
13c. 3              Adding 3 to 0 is 3.
13d. "3null"        Concatenating the strings 3 and null
13e. 4              true = 1, added to 3 produces 4
13f. 0              false = 0, added with nothing is 0.
13g. "3undefined"   Concatenating the strings 3 and undefined
13h. NaN            Subtracting 3 from an undefined value is not possible.

14a. true           Numerically, 3 is greater than 2
14b. false          The comparison of two different strings gives false.
14c. true           Comparing the string/int version of a number will be true
14d. false          Comparing the exact type and value of a string/int version of a number will be false. This is not the same object in memeory
14e. false          true is converted to 1, but that doesn't equal to 2.
14f. true           the boolean of any number is true which is === to true (because exact same value)

15. In javascript when comparing two items, == compares the value of the items, while === compares the memory address of each object. If the object is the same, then the result of === will be true. 
