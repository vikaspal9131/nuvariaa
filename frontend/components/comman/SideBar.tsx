export default function Sidebar() {
  return (
    <div className="w-58 bg-green-400  ">
      <div className="flex flex-col justify-between h-screen py-3 border-r">
        <div className="flex flex-col  ">
          <div className="flex items-cente justify-start gap-2  border-b px-3 py-2">
            <img className="w-7" src="/images/fevicon.svg" alt="" />
            <h1 className="font-instrument  text-2xl text-start   font-medium">
              Nuvaria
            </h1>
          </div>
          <div>
            <div className="flex  font-inter  py-12 px-2">
              <ul className="flex flex-col gap-y-3 cursor-pointer">
                <li>New Chat </li>
                <li>Save data </li>
                <li>History </li>
                <li>Downloads </li>
                <li>Images </li>
                <li>Video </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="font-inter ">
          <ul>
            <li>Dark mode</li>
            <li>Help</li>
          </ul>
          <div>
            <img src="" alt="" />
            <div>
              <p>Vikas pal </p>
              <p>vikaspal12@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
