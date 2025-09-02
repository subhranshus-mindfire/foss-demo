import { Navbar } from "./ui"
import { Button } from "./ui"
const MyNavbar = () => {
  return (
    <Navbar variant="default" size="md" className="bg-gray-900 lg:px-3 px-1">
      <div className="flex gap-4 justify-between w-full lg:px-5 mt-3">
        {/* <div className="text-blue-600 my-auto text-2xl">Taskify</div> */}
        <img src="https://assets.cdn.filesafe.space/rqe66k7aufk5ftcjWflk/media/659d8a7c69802982001531b2.png" className="lg:w-[150px] w-30"/>
        <div className="lg:flex gap-3 hidden ">
          <Button className="border border-blue-600 text-blue-400" size={"lg"}>Login</Button>
          <Button className="bg-blue-600 text-white" size={"lg"}>Get Started</Button>
        </div>
      </div>
    </Navbar>
  )
}

export default MyNavbar