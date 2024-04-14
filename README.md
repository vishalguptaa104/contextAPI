# contextAPI

Lets say we have a card component, and we have our intial App component.
If we want to pass some data to card from App -> it will access the value through Props.

but but if we have multiple nested components and the most inner child needs the value that is currently present at the top level, then we have to pass the value through each component. 
Middle components will take unnecessarily the props and value.
This is umoptimized approach and was first only way to pass the prop. -> known as prop drilling

Now, ContextAPI -> It is for state mangement -> 

1) create a context
2) make a provider (consider it as a wrapper) -> fir uss provider ke andr ke sab components vo global context access kr skte hai.
3) fir main/app file me declare krdete hai mtlb wrap krdete hai compoentnt ko provider ke sath


