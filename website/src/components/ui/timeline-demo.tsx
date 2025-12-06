import { Timeline } from "./timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-gray-300 dark:text-gray-300 text-xs md:text-sm font-normal mb-8">
            Built and launched xibe-pr1 AI-powered PR review bot with comprehensive code analysis
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=500&fit=crop&crop=center"
              alt="AI Technology"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=500&h=500&fit=crop&crop=center"
              alt="Code Development"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=500&fit=crop&crop=center"
              alt="Data Analysis"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=500&fit=crop&crop=center"
              alt="Team Collaboration"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Late 2023",
      content: (
        <div>
          <p className="text-gray-300 dark:text-gray-300 text-xs md:text-sm font-normal mb-8">
            Developed core AI integration and GitHub webhook processing system.
          </p>
          <p className="text-gray-300 dark:text-gray-300 text-xs md:text-sm font-normal mb-8">
            Integrated advanced GPT models for intelligent code analysis and security vulnerability detection.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=500&fit=crop&crop=center"
              alt="AI Integration"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=500&h=500&fit=crop&crop=center"
              alt="GitHub Integration"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1563206765-325b768e2515?w=500&h=500&fit=crop&crop=center"
              alt="Security Analysis"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=500&fit=crop&crop=center"
              alt="Code Quality"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-gray-300 dark:text-gray-300 text-xs md:text-sm font-normal mb-4">
            Initial concept development and architecture planning
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-gray-400 dark:text-gray-400 text-xs md:text-sm">
              ✅ AI model research and selection
            </div>
            <div className="flex gap-2 items-center text-gray-400 dark:text-gray-400 text-xs md:text-sm">
              ✅ GitHub API integration planning
            </div>
            <div className="flex gap-2 items-center text-gray-400 dark:text-gray-400 text-xs md:text-sm">
              ✅ Security vulnerability framework
            </div>
            <div className="flex gap-2 items-center text-gray-400 dark:text-gray-400 text-xs md:text-sm">
              ✅ Performance optimization strategy
            </div>
            <div className="flex gap-2 items-center text-gray-400 dark:text-gray-400 text-xs md:text-sm">
              ✅ User experience design
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=center"
              alt="Planning"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=500&fit=crop&crop=center"
              alt="Architecture"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=500&fit=crop&crop=center"
              alt="Development"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=500&h=500&fit=crop&crop=center"
              alt="Innovation"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="min-h-screen w-full">
      <div className="absolute top-0 left-0 w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
}
