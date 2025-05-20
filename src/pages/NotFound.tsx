import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import jerryGif from '@/assets/images/jerry.gif';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link, Code } from 'lucide-react';
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

import { Button } from "@/components/ui/button"

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  type TargetSite = 'LinkedIn' | 'Github';
  const [targetSite, setTargetSite] = useState<TargetSite | ''>('');
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (site: TargetSite) => {
    setTargetSite(site);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTargetSite('');
  };

  const handleContinue = () => {
    console.log(`Redirecting to ${targetSite}`);
    // -- redirection logic here --
    if (targetSite === 'LinkedIn') {
      window.open('https://www.linkedin.com/in/sanchitp/', '_self');
    } else if (targetSite === 'Github') {
      window.open('https://github.com/Sanchit-panday', '_self');
    }
    handleClose();
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <Card className="w-85 bg-[#1f2125] pt-10 pb-8">
        <CardHeader className="flex flex-col items-center">
          <CardTitle className="text-3xl font-bold text-gray-200">Page Not Found</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <div className="flex items-center pt-5 pb-5">
            <span className="mr-10 w-30 h-auto"> <img src={jerryGif} alt="Jerry GIF" className="rounded-full" /></span>
            <Button variant={'outline'}><a href="/">Return</a></Button>
          </div>
          <p className="text-center text-gray-300">or visit</p>
          <div className="flex justify-around w-full">
            <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
              <AlertDialogTrigger asChild onClick={() => handleOpen('LinkedIn')}>
                <Button variant={"outline"}><Link />LinkedIn</Button>
              </AlertDialogTrigger>
              <AlertDialogTrigger asChild onClick={() => handleOpen('Github')}>
                <Button variant={"outline"}><Code />Github</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    {targetSite && `You will be redirected to ${targetSite}.`}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel onClick={handleClose}>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleContinue}>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;