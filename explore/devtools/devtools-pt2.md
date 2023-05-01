DevTools - Debugging

Screenshot of breakpoints added:
![result-calculateSum](https://user-images.githubusercontent.com/96973587/235415045-a362a658-f144-4a6c-8028-ea8009bd638d.jpg)

Screenshot of watch expression list:
![result-dataType](https://user-images.githubusercontent.com/96973587/235415497-f2c71e53-2b55-4f96-ab88-37ea3119d804.jpg)

1. What was the bug?
It turns out the bug was due to the fact that the inputs were being read as sums. As such, when combining "int1" with "int2", we see the concatenation of the two (int1int2). Hence we see the output of 1 and 1 being 11. Similarly, 1 and 2 produces 12. To fix this, I simply type changed both the inputs into a Number. That way, javascript recognizes that we are adding numbers rather than concatenating strings.

2. Screenshot of fixed code:
![fix](https://user-images.githubusercontent.com/96973587/235415750-4c6e9fe9-8f64-4e32-b116-35796118ff06.jpg)

