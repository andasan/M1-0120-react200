import React from 'react';

function Sample() {

  function greeter(person: string) {
    return "Hello, " + person;
  }

  function Sum(x: number, y: number): number {
    return x + y;
  }

  function Greet(greeting: string, name?: string): string {
    return greeting + ' ' + name + '!'
  }

  function Greet2(greeting: string = "HELLO", name: string): string {
    return greeting + ' ' + name + '!'
  }

  // constructor(code: Number, name: string)

  // enum PrintMedia {
  //   Newspaper = 1,
  //   Newsletter,
  //   Magazine,
  //   Book
  // }

  let user = "Juan";
  // let number = 3;
  
  return (
    <div className="App">
      {greeter(user)}
      <br/>
      {Sum(2,3)}
      <br/>
      {Greet('Hello', 'Zack')}
      <br />
      {Greet('Hello')}
      {/* <br />
      {Greet('Hello', 'Zack', 'Juan')} */}
      <br />
      {Greet2('Hello', 'Zack')}
      <br />
      {Greet2(undefined, 'Zack')}
    
    </div>
  );
}

export default Sample;
