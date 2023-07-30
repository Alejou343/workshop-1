**DOM**

Is a representation of HTML, their shape is like a tree of nodes and can be modified

DOM + Javascript = Web API
How to use [www.developer.mozilla.org]
Can I use [www.caniuse.com]

Read nodes
    By ID: document.getElementById          --> Element with an id
    By TAG: parent.getElementByTagName      --> Elements with tags
    By CLASS: parent.getElementByClassName  --> Elements with class

    parentElement.querySelector             --> Elements with ids (#) tags () or class (.)
    parentElement.querySelectorAll          --> All elements with ids (#), clases (.) o tags ()

***NodeList no tiene los métodos de arrays***   --> Recomendado transformar [...NodeList] 

Create nodes: 
    Element: document.createElement         --> "h1"
    Text: document.createTextNode           --> "Text"

Add nodes: 
    parentElement.appendChild
    parentElement.append
    parentElement.insertBefore
    parentElement.insertAdjacentElement

Another ways: 
    node.outerHTML (Read)
    node.innerHTML (Write)

Differences between attributes and properties in a Input
    <input class="" type="text" id="33213"> --> Attributes
    $0.value = "Value" --> Properties [Visual in DOM]

Delete Nodes: 
    parentElement.removeChild
    document.remove
    document.replaceChild