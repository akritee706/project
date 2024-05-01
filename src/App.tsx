import { Routes, Route } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import ContactPage from "./pages/ContactPage";
import ChartAndMapsPage from "./pages/ChartsAndMapsPage";

import Sidebar from "./components/Sidebar";
import ContactForm from "./components/ContactForm";


function App() {
  return (
    <>
      <div className="flex bg-[#FCFFE0]">
        <div className="basis-[10%] h-[100vh]">
          <Sidebar />
        </div>
        <div className="basis-[90%]">
          <Routes>
            <Route path="/">
              <Route index={true} element={<ContactPage />} />{" "}
             
              <Route path="create-contact" element={<ContactForm />} />{" "}
             
              <Route path="edit-contact/:id" element={<ContactForm />} />
              <Route path="charts" element={<ChartAndMapsPage />} />{" "}
              
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
