import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function FAQs() {
  return (
    <div className="text-white lg:mb-20">
      <h1 className="lg:my-20 text-2xl lg:text-4xl text-white text-center">
        Frequently Asked Questions (FAQs)
      </h1>
      <Accordion type="single" collapsible className="w-full lg:px-90 text-2xl">
        <AccordionItem value="q1">
          <AccordionTrigger>What is Taskify?</AccordionTrigger>
          <AccordionContent className="text-lg">
            Taskify is a task and project management tool designed to help teams
            collaborate, track progress, and stay organized.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q2">
          <AccordionTrigger>Can I assign tasks to team members?</AccordionTrigger>
          <AccordionContent className="text-lg">
            Yes! You can assign tasks, set deadlines, and track responsibility
            across your team in real time.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q3">
          <AccordionTrigger>Does Taskify support deadlines and reminders?</AccordionTrigger>
          <AccordionContent className="text-lg">
            Absolutely. You can set task deadlines, due dates, and enable smart
            reminders to stay on schedule.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q4">
          <AccordionTrigger>Can I integrate Taskify with my calendar?</AccordionTrigger>
          <AccordionContent className="text-lg">
            Yes. Taskify supports calendar integration so you can view all your
            tasks, meetings, and milestones in one place.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q5">
          <AccordionTrigger>Is Taskify free to use?</AccordionTrigger>
          <AccordionContent className="text-lg">
            Taskify offers a free plan with core features and paid plans for
            advanced features like analytics, team management, and integrations.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
