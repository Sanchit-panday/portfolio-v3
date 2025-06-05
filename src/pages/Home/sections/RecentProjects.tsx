import {
    Card,
    // CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Github, SquareArrowOutUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button'

import projectData from '../data/projectData.json'


function RecentProjects() {
    return (
        <>
            <h2 className="text-2xl font-semibold tracking-tight">Latest Projects</h2>
            <div className="space-y-4 sm:space-y-6 mt-5">
                <Projects count={3} />
            </div>

        </>
    )
}

export default RecentProjects

type ProjectProps = {
    title: string;
    logoAddress?: string;
    description?: string;
    linkToProject?: string;
    linkToCode?: string;
};

function RecentProjectCard({ title, description, logoAddress, linkToProject, linkToCode }: ProjectProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex gap-x-1 items-center">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            {/* <CardContent> 
                        <p>Card Content</p>
                    </CardContent> */}
            <CardFooter className="space-y-2 space-x-0 sm:space-y-0 sm:space-x-2 flex-col sm:flex-row">
                <Button className="w-full sm:flex-2" asChild>
                    <a href={linkToProject} target="_blank"><SquareArrowOutUpRight size={14} /> Go to Project</a>
                </Button>
                <Button className="w-full sm:flex-1" asChild>
                    <a href={linkToCode} target="_blank"><Github size={14} />View on Github</a>
                </Button>
            </CardFooter>
        </Card>
    )
}

function Projects({ count }: { count: number }) {
    if (typeof count !== "number") {
        throw new Error("The 'count' prop is required for <Projects /> and must be a number.");
    }
    return (
        <>
            {projectData.slice(0, count).map((project, idx) => (
                <RecentProjectCard key={idx} {...project} />
            ))}
        </>
    );
}