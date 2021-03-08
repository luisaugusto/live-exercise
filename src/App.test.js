import { shallow } from 'enzyme';
import AppClassComponent from "./AppClassComponent";

test('renders learn react link', () => {
  const component = shallow(<AppClassComponent />);
  expect(component).toHaveLength(1)
});
