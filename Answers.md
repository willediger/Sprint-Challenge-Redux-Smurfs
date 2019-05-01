 In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
 actions are objects produced by action creators. They have a type, and they are passed to reducers. Reducers receive actions, and run code depending on the action type, and as a result, return a new state based on the logic in the reducer and the data that may have been contained in the action. The reducers are creating new copy of the state in the store, which stores the state for the whole application. The store is known as a single source of truth because all of your application state lives there, and any component that needs to access it has read-only access. For anything to update state, it much dispatch an action to the reducer that would result in the store receiving a new state. Designing Redux in this way makes it possible/easy to do time-travel debugging since we're never directly modifying state, but inserting a copy of the previous state with certain changes.



 What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is the state that's housed at the top of your application. This is usually either in a normal React state object, or in a state container solution like Redux. It's used for state that is applicable to your overall application, or state that is going to be used in more than one component/route. This way, there's one version of truth.
Component state is used for things that are only applicable inside of a given component. It is useful for storing things temporarily, like form data before submit. Then once that data has been handled in some fashion, the result is that the data ends up in the application state.




 Describe redux-thunk, what does it allow us to do? How does it change our action-creators?
Redux thunk allows us to insert functionality in between dispatches of actions and run asynchronous code between dispatches. It changes our action creators to either return a function, or an action. If they return an action, thunk passes it on to the reducer. If it returns a function, thunk will invoke the function and pass the dispatch function as an argument to that function.