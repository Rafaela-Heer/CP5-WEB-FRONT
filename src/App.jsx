import { Icon } from "@iconify/react";
import FakeUser from "./FakeUser";

function App() {
  return (
    <>
      <div className="p-4">
        <div className="w-full max-w-md">
          <div className="">
            <span className="p-1 mt-1 flex initial bg-red-800 border rounded-md font-medium text-gray-100 text-3xl">CP5</span>
          </div>

          <div className="border rounded-lg bg-white p-4 m-2 shadow-md">
            <div className="p-1 font-bold text-2xl text-rose-700">
              Fake users list
            </div>
            <hr className="my-2" />
            {
              [...Array(5).keys()].map((_, idx) => <FakeUser key={idx} />)
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App;