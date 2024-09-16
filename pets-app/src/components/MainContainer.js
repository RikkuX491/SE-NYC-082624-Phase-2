function MainContainer(){

    const idValue = "main-container"
    const text1 = "Hello World"
    const text2 = "Goodbye World"
    const num1 = 3
    const num2 = 7

    return (
      <div id={idValue}>
        <h1>{text1 + " and welcome to class!"}</h1>
        <h1>{`${text2}! Have a good night!`}</h1>
        <h1>The sum of {num1} and {num2} is {num1 + num2}</h1>
      </div>
    )
  }

const exampleItems = ["Shoes", "Broccoli", "Soccer ball"]

const person = {
    name: "Alice",
    age: 23
}

export default MainContainer;
export {exampleItems, person};