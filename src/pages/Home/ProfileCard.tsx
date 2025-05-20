import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { CalendarClock, FileUser, Github, Linkedin } from "lucide-react"


function ProfileCard() {
    return (
        <Card className='h-fit gap-5 py-4 lg:sticky top-24 z-30'>
            <CardHeader className="gap-0">
                <CardTitle className="text-center sm:text-left">Sanchit Pandey</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-center sm:text-left text-muted-foreground tracking-tight text-sm">👋 Hi, I'm Sanchit, My strong programming, algorithm, and software skills in Python, Java, C++ fuel my passion for tackling tough problems and building cool solutions. Project-tested in coding and teamwork – ready to dive into dynamic tech and grow!</p>
            </CardContent>
            <CardFooter className='flex-col sm:flex-row lg:flex-col items-center justify-around space-y-2 sm:space-y-0 sm:space-x-2 lg:space-y-2 lg:space-x-0'>
                {/* <div className='p-4'> */}
                <Button className='w-full sm:flex-1 lg:flex-1 rounded-full' asChild>
                    <a href="https://github.com/Sanchit-panday" target="_blank">
                        <Github />
                        <p className="sm:hidden md:block">
                            Github
                        </p>
                    </a>
                </Button>
                <Button className='w-full sm:flex-1 lg:flex-1 rounded-full' asChild>
                    <a href="https://www.linkedin.com/in/sanchitp/" target="_blank">
                        <Linkedin />
                        <p className="sm:hidden md:block">
                            LinkedIn
                        </p>
                    </a>
                </Button>
                <Button className='w-full sm:flex-1 lg:flex-1 rounded-full' asChild>
                    <a href="https://drive.google.com/file/d/1ss6I1NWKJBFEio800WOwfj/view" target="_blank">
                        <FileUser />
                        <p className="sm:hidden md:block">
                            Resume
                        </p>
                    </a>
                </Button>
                <Button className='w-full sm:flex-1 lg:flex-1 rounded-full' asChild>
                    <a href="https://calendly.com/hydhexane-calendly/15min" target="_blank">
                        <CalendarClock />
                        <p className="sm:hidden md:block">
                            Meeting
                        </p>
                    </a>
                </Button>
            </CardFooter>
        </Card>
    )
}

export default ProfileCard