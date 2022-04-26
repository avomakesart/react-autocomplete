# React questions / answers

1. What is the difference between Component and PureComponent? give an
example where it might break my app
    Answer: A PureComponent it is kind of the same as a React.Component, the only difference is that the React.PureComponent will do a Shallow comparison on every state change, but... if you want to use this React.PureComponent, first thing first, you need to make sure that all of its childs are React.PureComponent as well.
    It Gives more performance but, imagine that you are refactoring of its childs, that as I mentioned before it's a PureComponent, you will lose performance, and well... since we are strictly check, you can have some issues in there, and also the mantainability will be not the best.

2. Context + ShouldComponentUpdate might be dangerous. Can think of why is
that?
Answer: Context is my favorite React Pattern/API from React, since we can create custom components and share data between childs, and I think that's the main reason why it could be problematic.
Since shouldComponentUpdate short circuits the re-rendering of a part of the component tree.
Example: if the props or state of a component are not modified in a meaningful way. As far as the component can tell. But this might accidentally block context propagation... and that's not something that we want on our components.

3. Describe 3 ways to pass information from a component to its PARENT.

There are different ways to approach this, but sometimes could be tricky, here are the ways to pass props:

- Using callbacks: we need to create a callback in the parent to taka the necessary data as a parameter, then we pass that as a prop in the child, and then the child share the data.
- Using Redux: another way to share data/information, it is using redux to share data across all the components.
- Using Context API: This is one of my favorite, since we can approach something like redux but we can share data between components using the React API not any external.

4. Give 2 ways to prevent components from re-rendering.

- Well with the previous mentioned functionality called ShouldComponentUpdate we can avoid re-rendering a component, even if state or prop values may have changed, but we need to have an static or pure component.
- Another way to prevent that terrible issue it's using React.memo since memoization is an optimization technique, or using the React.useMemo hooks :D.

5. What is a fragment and why do we need it? Give an example where it might
break my app.
Answer: A fragment it is basically a technique useful when you have multiple elements and you want to wrap them, but you don't want to print anything extra on the DOM. Fragments can break our styles in your apps, since is not a live DOM element.

6. Give 3 examples of the HOC pattern.
Answer:

- My favority HOC pattern it is when I want to use Apollo for Graphql, but I don't want to throw a provider in my app or it is a server side app, or i am using Next or Remix, so I create a HOC called withApollo({ ssr: false })(App) and share the component logic with the components that I want.
- Using react-redux for example, they have a pretty well done solution called connect from where we can create custom HOC to share logic across the app.
- Another cool one is the withRouter coming from react-router-dom, where we  can get access to the history object’s properties.

7. what's the difference in handling exceptions in promises, callbacks and
async...await.

- On promises we can use method catch if we got something on the Reject, then it catch will get it.
- On Async Await my favorite way, in order to not have the callback hell from Promises, we can use a try catch to handle any exception.
- On callbacks, I would use the Error First to catch any exception on Node or a onError for the browser that fires whenever an uncaught JavaScript error has been thrown.

8. How many arguments does setState take and why is it async.
Answer: setState method takes up to 2 arguments. We usually just pass one of them, but... The first argument can be an object or a callback that’s used to update the state, then the second argument is a function that’s always run after setState is run.

9. List the steps needed to migrate a Class to Function Component.

- First we need to understand the Class component and see how it should work on an stateless way, example: class ComponentName extends Component to ---> function ComponentName(props).
- If we have a constructor we need to remove it, or if whe have just the state = {} we remove that guy.
- Then we remove the render() method, we keep everything on the return.
- We need to use const on every method, example: handleChange(e) {} to const handleChange = (e) => {}
- We are going to remove the this word from all the this.state or this.props.
- We are going to use the state using useState() :D.
- Then the effects, we are not going to use componentDidMount anymore, we are going to use useEffect.
- Finally if you are using componentDidUpdate you can use the clean up function from useEffect, like:
useEffect(() => {// stuff here}, [])

10. List a few ways styles can be used with components.
Answer: We have different ways, we have the CSS in JS so we may want to use style-components or emotion library, we can use regular css using stylesheets and postcss, another cool one is using css modules (my favorite), which you may need to import the stylesheet like `import styles from 'your-stylesheet-root'` and you can access to your classNames as object destructure, last but not least we can use styles preprocessors like .less or .scss.

11. How to render an HTML string coming from the server.
Answer: The first thing on my mind it is using the `dangerouslySetInnerHTML` method, but sometimes it is kind of dangerous, so I will use a third party library to parse that html string.
