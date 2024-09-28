import "./App.css";
import ContentRoutes from "./components/common/ContentRoutes";
import NavbarComponent from "./components/common/NavbarComponent";

function App() {
  return (
    <div className="flex flex-col w-screen h-screen font-sans">
      <NavbarComponent />
      <div className="mt-14">
        <ContentRoutes />
      </div>
    </div>
  );
}

export default App;
