import {
    Card,
    CardContent,
    // CardDescription,
    // CardFooter,
    // CardHeader,
    // CardTitle,
} from "@/components/ui/card"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from '@/components/ui/button'
import { Send } from 'lucide-react';


function Contact() {
    const handleContinue = () => {
        console.log(`Redirecting to telegram`);
        window.open('https://www.t.me/Sanchit1104', '_blank');
    };
    return (
        <>
            <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
            <div className="space-y-4 sm:space-y-6 mt-5">
                <Card>
                    {/* <CardHeader> */}
                    {/* <CardTitle>Card Title</CardTitle> */}
                    {/* <CardDescription>Card Description</CardDescription> */}
                    {/* </CardHeader> */}
                    <CardContent className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-1.5 md:items-center  justify-between">
                        <p className="text-sm text-center sm:text-left text-muted-foreground">
                            {`Best way to reach me is through: `}
                            <a href="mailto:hydhexane@gmail.com" className="underline">hydhexane@gmail.com</a>
                        </p>
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="ghost"><Send />Telegram</Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                    <AlertDialogDescription>You will be redirected to Telegram
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={handleContinue}>Continue</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </CardContent>
                    {/* <CardFooter>
            <p>Card Footer</p>
          </CardFooter> */}
                </Card>
            </div>
        </>
    )
}

export default Contact