import {
    Card,
    CardContent,
    //   CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Github, Link, TvMinimalPlay } from "lucide-react"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"



function ProfileCard() {
    // content for the profile card
    const myName = "Sanchit Pandey";
    const aboutMe = "नमस्ते, मैं संचित, एक developer, illustrator और student हूं।";
    const kaomoji = "(~￣▽￣)~";
    return (
        <Card className='h-fit gap-5 py-4 lg:sticky top-24 z-30'>
            <CardHeader className="gap-0">
                <CardTitle className="text-center sm:text-left capitalize">{myName}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-center sm:text-left text-muted-foreground tracking-tight text-md normal-case">{aboutMe}<br /><span className="whitespace-nowrap">{kaomoji}</span></p>
            </CardContent>
            <CardFooter className='flex-col flex-wrap sm:flex-row lg:flex-col items-center justify-around space-y-2 sm:space-y-1 sm:space-x-2 lg:space-y-2 lg:space-x-0'>
                <ProfileCardButton link="https://github.com/Sanchit-panday" iconName={Github} content="Github" />
                <Dialog>
                    <DialogTrigger className="w-full">
                        <>
                            <ProfileCardButton iconName={Link} content="Links" />
                        </>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md text-center">
                        <DialogTitle className="text-red-500 text-2xl font-bold">oops! 404</DialogTitle>
                        <h1 className="font-semibold text-xl">Still under work</h1>
                    </DialogContent>
                </Dialog>
                <ProfileCardButton link="https://www.youtube.com/@hydhexane" iconName={TvMinimalPlay} content="Youtube" />
            </CardFooter>
        </Card>
    )
}
// custom type for icon
type ProfileCardButtonProps = {
    link?: string;
    iconName: React.ComponentType<{ className?: string }>;
    content: string;
};
function ProfileCardButton({ link, iconName: Icon, content }: ProfileCardButtonProps) {
    // return a openable button if link was provided else return a normal button
    return link ? (
        <Button asChild className="w-full sm:flex-1 lg:flex-1 rounded-full">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <Icon />
                <p className="sm:hidden md:block capitalize">{content}</p>
            </a>
        </Button>
    ) : (
        // do not change this span, this is to fix the hydration error
        <Button className="w-full sm:flex-1 lg:flex-1 rounded-full" asChild>
            <span className="w-full sm:flex-1 lg:flex-1 rounded-full">
                <Icon />
                <p className="sm:hidden md:block capitalize">{content}</p>
            </span>
        </Button>
    )
}

export default ProfileCard