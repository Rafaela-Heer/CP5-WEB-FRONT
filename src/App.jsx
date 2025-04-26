import { Icon } from "@iconify/react";
import FakeUser from "./FakeUser";

function App() {

  return (
    <>
      <div className="">
        <span className="p-1 mt-1 flex initial bg-gray-300 border rounded-md font-medium text-3x1">CP5</span>
      </div>
      <div className="border rounded-lg bg-white p-1 m-1">
        <div className="p-1 font-bold">
          Fake users list
        </div>
        <hr className="" />
        {
          [...Array(5).keys()].map((e, idx) => <FakeUser key={idx} />)
        }
      </div>
    </>
  )
}

export default App