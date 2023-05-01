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
12d. alert( studentstudent.name );
12e. alert( student.name );
12f.



13. v

14. v

15. 
