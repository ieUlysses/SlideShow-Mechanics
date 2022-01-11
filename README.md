# SlideShow-Mechanics
Created with CodeSandbox


Checkout the live version here: https://csb-t8ezo-8hrm62gcm-ieulysses.vercel.app/

This is yet another mini project, Essentially this is a glorified counter with some custom styling from mui. If you boot this up you'll see a basic counter that allows you to increase , decrease and reset the counter. The value of the counter corrosponds to a value in the array values=[1.2.3.4.5.6.7] tucked away in the context. So by default the starting value for the counter is  0 which returns the value of values[0] which is 1. 

For me it was important to have the oppertunity to prompt the user to restart the counter if the value was -1 or less ( meaning that there is no value at this position in the array) or if the value was more than the lengh of the array by the same token. This will proove useful in the following app as I will be able to either invite users to start the tutorial or return to the home page upon completeion

This functionality I will use in my next project to build out a tutorial app which will allow users to create tutorials in a powerpoint format. and also view the tutorial. 
