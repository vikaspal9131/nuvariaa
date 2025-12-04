import InputSection from "./InputSection";

export default function ChatWindow() {
  return (
    <div className="h-screen w-full bg-red-500 flex">

      {/* FIXED SIDEBAR */}
      <div className="w-60 bg-green-400 fixed left-0 top-0 h-screen">
        <div className="flex flex-col justify-between h-full py-3 border-r">
          
          <div className="flex flex-col">
            <div className="flex items-center gap-2 border-b px-3 py-2">
              <img className="w-7" src="/images/fevicon.svg" alt="" />
              <h1 className="font-instrument text-2xl font-medium">Nuvaria</h1>
            </div>

            <div className="py-12 px-2 font-inter">
              <ul className="flex flex-col gap-y-3 cursor-pointer">
                <li>New Chat</li>
                <li>Save data</li>
                <li>History</li>
                <li>Downloads</li>
                <li>Images</li>
                <li>Video</li>
              </ul>
            </div>
          </div>

          <div className="font-inter px-2 pb-4">
            <ul className="mb-3">
              <li>Dark mode</li>
              <li>Help</li>
            </ul>

            <div>
              <p>Vikas pal</p>
              <p className="text-sm">vikaspal12@gmail.com</p>
            </div>
          </div>

        </div>
      </div>

      {/* MAIN CONTENT (SHIFTED RIGHT) */}
      <div className="flex-1 ml-60 overflow-y-auto">

        <div className="h-screen flex flex-col items-center justify-center relative">
          <div className="w-1/2 text-center">
            <h1 className="font-instrument text-5xl">
              Nuvaria AI-powered visuals
            </h1>

            <p className="font-inter mt-3 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Similique nemo unde eos molestiae.
            </p>
          </div>

          <InputSection />
        </div>

        <div className="h-screen bg-amber-400"></div>

      </div>

    </div>
  );
}
