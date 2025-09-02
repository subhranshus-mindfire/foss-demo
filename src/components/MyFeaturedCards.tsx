import { BellRing, CircleCheck, Users } from "lucide-react"
import { CardDescription, CardTitle, FeatureCard } from "./ui/card"

const MyFeaturedCards = () => {
  return (
    <div className="pt-30">
      <div className="text-4xl text-white text-center">
        Why choose <span className="text-blue-600">
          Taskify?
        </span>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1  lg:px-90 lg:py-20 gap-5">
        <FeatureCard icon={<CircleCheck className="h-12 w-12 text-blue-600" />} variant="elevated">
          <CardTitle className="text-white">Stay Organized</CardTitle>
          <CardDescription className="text-white text-md">Easily create projects, assign tasks, and monitor progress from a single dashboard.</CardDescription>
        </FeatureCard>
        <FeatureCard icon={<Users className="h-12 w-12 text-primary text-blue-600" />} variant="elevated">
          <CardTitle className="text-white">Collaborate</CardTitle>
          <CardDescription className="text-white text-md">Work seamlessly with your team, assign members, and communicate effectively.</CardDescription>
        </FeatureCard>
        <FeatureCard icon={<BellRing className="h-12 w-12 text-primary text-blue-600" />} variant="elevated">
          <CardTitle className="text-white">Get Notified</CardTitle>
          <CardDescription className="text-white text-md">Receive timely reminders so you never miss a deadline or important update.</CardDescription>
        </FeatureCard>
      </div>
    </div>

  )
}

export default MyFeaturedCards

