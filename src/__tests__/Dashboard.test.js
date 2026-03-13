import renderer from "react-test-renderer";
import Dashboard from "../components/Dashboard";

test("Dashboard snapshot", () => {

  const tree = renderer
    .create(<Dashboard loading={false} />)
    .toJSON();

  expect(tree).toMatchSnapshot();

});