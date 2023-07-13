import Link from "../Link/Link";
import List from "../List/List";
import Text from "../Text/Text";
import Title from "../Title/Title";

function Loanding({ show }: { show: boolean }) {
  if (show) {
    return (
      <>
        <Title />
        <Text />
        <List />
        <Link />
      </>
    );
  } else {
    return <p>Loanding ...</p>;
  }
}

export default Loanding;
