// create element

/*

createElement

*/

{
  const parent = document.getElementById("parent")

  const div = document.createElement("div")

  // add content

  div.innerText = "Hello World"

  console.log(div);

  // insert element

  // Append Child

  parent.appendChild(div)

  // Append

  // let str = "Python"

  // div.append(str)
  // div.prepend(str)

  // Prepend

  // parent.prepend(div)

  // after / before

  // div.before(str)
  // div.after(str)
}

{
  // Remove Element

  const element = document.getElementById("box")
  const parent = document.getElementById("list")
  const input = document.getElementById("username")
  const btn = document.getElementById("btn")

  // element.remove()

  // const child = parent.children[0]

  // parent.removeChild(child)

  // console.log(child);

  // Traversing DOM

  console.log(element.parentElement);

  console.log(parent.children);

  console.log(parent.firstElementChild);

  console.log(parent.lastElementChild);

  console.log(element.nextElementSibling);

  console.log(element.previousElementSibling);
  
  
  
  
  
  


  


}

