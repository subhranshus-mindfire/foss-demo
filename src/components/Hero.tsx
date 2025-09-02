import { Button } from "./ui"

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:mt-20">
      <div className="lg:px-40 px-2 lg:py-20 order-2">
        <h1 className="text-white text-3xl md:text-6xl ">
          Manage your tasks like a pro with <br /><span className="text-blue-600">Taskify</span>
        </h1>
        <h3 className="text-gray-200 text-xl md:text-3xl my-9">
          Organize your projects, track deadlines, collaborate with your team, and never miss a task again.
        </h3>
        <div className="flex gap-3">
          <Button className="border border-blue-600 text-blue-400" size={"xl"}>Login</Button>
          <Button className="bg-blue-600 text-white" size={"xl"}>Get Started</Button>
        </div>
      </div>
      <div className="pe-40 py-20 order-1 lg:order-2">
        <img src={"https://projectsly.com/images/task-management-system-screenshot-1.png?v=1691124479409199525"} alt="" className="w-64" />
      </div>
    </div>
  )
}

export default Hero