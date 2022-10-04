import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-item header-left">
          <div className="dropdown">
            <div className="dropbtn">
              <div className="color-gray">All Pipelines</div>
              <div className="header-left-arrow"></div>
            </div>
            <div className="dropdown-content">
              <a href="https://docs.google.com/document/d/119z9FpiJEdT89E3fl2DynvgxrqBYgHWe88sXfzXGX3w/edit?usp=sharing Best">
                Sales
              </a>
              <a href="https://docs.google.com/document/d/119z9FpiJEdT89E3fl2DynvgxrqBYgHWe88sXfzXGX3w/edit?usp=sharing Best">
                Marketing
              </a>
              <a href="https://docs.google.com/document/d/119z9FpiJEdT89E3fl2DynvgxrqBYgHWe88sXfzXGX3w/edit?usp=sharing Best">
                Partners
              </a>
            </div>
          </div>
        </div>
        <div className="App-header-item header-right">
          <a
            className="header-right-item"
            href="https://docs.google.com/document/d/119z9FpiJEdT89E3fl2DynvgxrqBYgHWe88sXfzXGX3w/edit?usp=sharing Best"
          >
            Month
          </a>
          <a
            className="header-right-item"
            href="https://docs.google.com/document/d/119z9FpiJEdT89E3fl2DynvgxrqBYgHWe88sXfzXGX3w/edit?usp=sharing Best"
          >
            Week
          </a>
          <a
            className="header-right-item"
            href="https://docs.google.com/document/d/119z9FpiJEdT89E3fl2DynvgxrqBYgHWe88sXfzXGX3w/edit?usp=sharing Best"
          >
            Yesterday
          </a>
          <a
            className="header-right-item"
            href="https://docs.google.com/document/d/119z9FpiJEdT89E3fl2DynvgxrqBYgHWe88sXfzXGX3w/edit?usp=sharing Best"
          >
            Today
          </a>
        </div>
      </header>
      <div className="flex-container">
        <Card
          symbol="symbol-container-TLAD"
          title="Total Leads and Deals"
          detail="1600 | 132 000 999 €"
          color="color-pink"
        />
        <Card
          symbol="symbol-container-W"
          title="Won"
          detail="45 | 108 000 € "
          color="color-green"
        />
        <Card
          symbol="symbol-container-L"
          title="Lost"
          detail="15 | 24 000 € "
          color="color-red"
        />
        <Card
          symbol="symbol-container-NL"
          title="New leads"
          detail="115"
          color="color-blue"
        />
        <Card
          symbol="symbol-container-TT"
          title="Total tasks"
          detail="269"
          color="color-pink"
        />
        <Card
          symbol="symbol-container-CT"
          title="Completed tasks"
          detail="115"
          color="color-green"
        />
        <Card
          symbol="symbol-container-ET"
          title="Expired tasks"
          detail="25"
          color="color-red"
        />
        <Card
          symbol="symbol-container-NT"
          title="No tasks"
          detail="10"
          color="color-blue"
        />
      </div>
    </div>
  );
}

export default App;
