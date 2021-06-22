import react from 'react';
import { Jumbotron, Row } from 'reactstrap';
import cimg from '../images/c.png'; 
import RichText from 'prismic-reactjs';
const C_Lang =()=>{
    return(
         <div>
           
        <Jumbotron>
        <img src={cimg} style={{height:"200px"}}/><br/><br/>
            <h2>C language</h2>
            <p>C is a programming language developed at AT & T's Bell Laboratories of USA in 1972 which was designed and written by Dennis Ritchie. Due to its simplicity, reliability and easy to use, C was preferred to older languages like FORTRAN or PL/I or newer one like Pascal and APL.
                It is the basic language & also known as middle level language as it gives good programming efficiency & also machine efficiency. It is known as basic language because it provides base to learn advanced programming like C++, Java, web Technologies, etc.
            </p>
        </Jumbotron> 
        
        
        <Jumbotron>
            <h6>
            +91-9970-195959

C language
C is a programming language developed at AT & T's Bell Laboratories of USA in 1972 which was designed and written by Dennis Ritchie. Due to its simplicity, reliability and easy to use, C was preferred to older languages like FORTRAN or PL/I or newer one like Pascal and APL.

It is the basic language & also known as middle level language as it gives good programming efficiency & also machine efficiency. It is known as basic language because it provides base to learn advanced programming like C++, Java, web Technologies, etc.

Syllabus
 
1. Introduction
​
-History

-Tools required for C language

-Getting started with C(Constant, Variables, Keywords)

 
2. Basic of C
​
-C Instructions

-Control Instructions

-First Program

​
3. Control        Structures
 
-if-else Decisions

-Logical operators

-Hierarchy

-Loops

-Case switch

-goto statement

 
4. Functions & Pointers
 

-Scope rules

-Advanced features of functions

-Calling conventions

-Pointers

-Back to function calls

 
5. Storage classes
 

6. Arrays

 

-Declaration & Initialization

-Bounds checking

-2D & 3D Arrays

-Array of pointers

 
7. Structures
 

-Declaration & accessing structure elements

-Array of structures

-Additional features of structures

-Uses of structures

 
8. File Input/Output
 

-File opening modes

-File operations
            </h6>
        </Jumbotron>
        </div>
    )
}
export default C_Lang;
