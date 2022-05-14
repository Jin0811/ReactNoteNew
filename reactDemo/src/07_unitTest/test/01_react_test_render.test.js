import ShallowRender from "react-test-renderer/shallow";
import ReactTestUtil from "react-dom/test-utils";
import App from "../App";

describe("react-test-render", () => {
  // 测试点一：TODO-标题
  it("TODO-标题", () => {
    const render = new ShallowRender(); // 渲染为虚拟DOM
    render.render(<App></App>);
    const renderOutput = render.getRenderOutput();

    // DOM类型
    let domType = renderOutput.props.children[0].type;
    expect(domType).toBe("h1");

    // 标题文字
    let title = renderOutput.props.children[0].props.children;
    expect(title).toBe("Todo");
  });

  // 测试点二：TODO-删除功能
  it("TODO-删除功能", () => {
    const app = ReactTestUtil.renderIntoDocument(<App></App>); // 渲染为真实DOM
    let todoItems = ReactTestUtil.scryRenderedDOMComponentsWithTag(app, "li");

    let deleteButton = todoItems[0].querySelector("button");
    ReactTestUtil.Simulate.click(deleteButton);

    let todoItemsAfterClick = ReactTestUtil.scryRenderedDOMComponentsWithTag(app, "li");
    expect(todoItemsAfterClick.length).toBe(todoItems.length - 1);
  });

  // 测试点三：TODO-添加功能
  it("TODO-添加功能", () => {
    const app = ReactTestUtil.renderIntoDocument(<App></App>);
    let todoItems = ReactTestUtil.scryRenderedDOMComponentsWithTag(app, "li");

    let inputDom = ReactTestUtil.scryRenderedDOMComponentsWithTag(app, "input");
    inputDom.value = "测试TODO";

    let addButton = ReactTestUtil.findRenderedDOMComponentWithClass(app, "add");
    ReactTestUtil.Simulate.click(addButton);

    let todoItemsAfterClick = ReactTestUtil.scryRenderedDOMComponentsWithTag(app, "li");
    expect(todoItemsAfterClick.length).toBe(todoItems.length + 1);
  });
});