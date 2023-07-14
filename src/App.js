import Avatar from "./components/Avatar";

function MyButton({ title }) {
  return <button>{title}</button>;
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton title="Add To Cart" />
      <MyButton title="Find Out More" />
      <Avatar />
    </div>
  );
}
//properties are used to pass data. They connect parent and child components. State manages dynamic component data. State can be modified inside the component.

//3rd question
//Both buttons have the same state and they update simultaneously and the count will go up for both.
//Hooks enable functional components ability to handle states. Hooks provide more flexible state management and side effect management. Developers can resuse logic that states rely on and eliminate the need for class components.
// Hooks allow reusability and organization making code easier to read for other viewers.
//Hooks cannot be used in class components. componentDidMount and componentDidUpdate are used to manage state and side effects which hooks are unable to do.
//useContext is used to access react content value and useReducer is used to manage complex state updates.
