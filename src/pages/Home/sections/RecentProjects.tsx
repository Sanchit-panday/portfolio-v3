import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Github, SquareArrowOutUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button'


function RecentProjects() {
    return (
        <>
            <h2 className="text-2xl font-semibold tracking-tight">Latest Projects</h2>
            <div className="space-y-4 sm:space-y-6 mt-5">
                {/* --- 1 of 3 Project --- */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex gap-x-1 items-center">IFFCO_SCM_2024</CardTitle>
                        <CardDescription>Developed a web application with Django, Bootstrap, and REST APIs to optimize IFFCO's supply chain. Features included real-time inventory tracking, demand forecasting, order processing, and logistics management, enhancing operational efficiency and data visibility.</CardDescription>
                    </CardHeader>
                    <CardFooter className="space-y-2 space-x-0 sm:space-y-0 sm:space-x-2 flex-col sm:flex-row">
                        <Button className="w-full sm:flex-2" asChild>
                            <a href="https://iffcoscm.netlify.app/" target="_blank"><SquareArrowOutUpRight size={14} /> Go to Project</a>
                        </Button>
                        <Button className="w-full sm:flex-1" asChild>
                            <a href="https://github.com/Sanchit-panday/IFFCO_SCM_2024" target="_blank"><Github size={14} />View on Github</a>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}

export default RecentProjects