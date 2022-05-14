import App from "../App";
import Enzyme, { shallow, mount } from "enzyme"; // 需要适配器
import Adpater from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adpater() });

describe("react-test-render", () => {
  // 测试点一：TODO-标题
  it("TODO-标题", () => {
    let app = shallow(<App></App>);
    expect(app.find("h1").text()).toEqual("Todo");
  });

  // 测试点二：TODO-删除功能
  it("TODO-删除功能", () => {
    let app = mount(<App></App>);
    let todoItemsLength = app.find("li").length;

    app.find("button.del").at(0).simulate("click");
    expect(app.find("li").length).toEqual(todoItemsLength - 1);
  });

  // 测试点三：TODO-添加功能
  it("TODO-添加功能", () => {
    let app = mount(<App></App>);
    let todoItemsLength = app.find("li").length;

    let inputDom = app.find("input");
    inputDom.value = "测试TODO";

    app.find(".add").simulate("click");
    expect(app.find("li").length).toEqual(todoItemsLength + 1);
  });
});