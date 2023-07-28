import React from "react";

interface WithPostProps {
  users: string[];
}

interface WithPostState {
  users: string[];
}

const WithPost = (Component: React.ComponentType<WithPostProps>) => {
  return class extends React.Component<{}, WithPostState> {
    state: WithPostState = {
      users: [],
    };

    component() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          const users = data.map((item: any) => item.name);
          this.setState({ users });
        });
    }

    render() {
      this.component();
      return <Component users={this.state.users} />;
    }
  };
};

const API: React.FC<WithPostProps> = (props) => (
  <ul>
    {props.users.map((user, key) => (
      <li key={key}>{user}</li>
    ))}
  </ul>
);

const ShowtaskWithPost = WithPost(API);

function Showtask() {
  return <ShowtaskWithPost />;
}
export default Showtask;
