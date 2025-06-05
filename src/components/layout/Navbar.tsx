import { useState } from "react";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  // DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  // DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown, Mail, Copy, House, Presentation, Briefcase, Twitter, Cat, Dog, PawPrint } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import CommandBox from "../features/CommandBox";

import morty from "@/assets/images/Morty.png";


function Navbar() {

  // email handler
  const [email] = useState("hydhexane@gmail.com");
  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      console.log("Copied to clipboard!");
      toast("Copied!");
    }).catch((err) => {
      console.error("Failed to copy: ", err);
      toast("Failed to copy!");
    });
  };

  //--- About Me ---

  const features = [
    "Watches Anime",
    "addicted to sleep",
    "Fav Game: Sekiro SDT",
    "used to live-code on yt",
    "85 WPM 💪"
  ];

  function MyListComponent({ items }: { items: string[] }) {
    return (
      <ul className="list-disc list-outside text-blue-500 pl-4"> {/* Tailwind classes for styling */}
        {items.map((item, index) => (
          <li key={index} className="text-gray-700">{item}</li>
        ))}
      </ul>
    );
  }

  // const [position, setPosition] = React.useState("bottom")
  return (
    <Badge variant="outline" className="flex flex-col space-y-1 sm:space-y-0 sm:flex-row w-full justify-between p-3 sticky top-0 z-50 bg-white shadow-xs h-fit">
      {/* --- Name Tag --- */}
      <Drawer>
        <DrawerTrigger className="text-sm" asChild>
          <Badge variant={"outline"} className="px-2 py-1">
            Sanchit.
          </Badge>
        </DrawerTrigger>

        {/* -- Drawer Content Starts Here -- */}
        <DrawerContent className="hidden">
          <DrawerHeader className="flex-row justify-center">
            {/* 
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription> */}
            {/* --- First Card --- */}
            <Card className="w-60 hidden md:block">
              <CardHeader>
                <CardTitle>About Me</CardTitle>
                <CardDescription>Know few things about me</CardDescription>
              </CardHeader>
              <CardContent>
                <MyListComponent items={features} />
              </CardContent>
              {/* <CardFooter>
                <p>Card Footer</p>
              </CardFooter> */}
            </Card>

            {/* --- Middle Card --- */}
            <Card className="min-w-60 ">
              <CardHeader>
                <Avatar className="absolute top-[-70px] left-1/2 transform translate-x-[-60px] w-30 h-auto md:top-[-100px] md:left-1/2 md:translate-x-[-83px] md:w-40 md:h-auto rounded-md overflow-visible">
                  <AvatarImage src={morty} />
                  <AvatarFallback>Profile photo</AvatarFallback>
                </Avatar>
                <CardTitle>
                  <p className="hidden md:block">Sanchit</p>
                  <p className="block md:hidden lg:hidden xl:hidden 2xl:hidden">You found a special Area! 🥳🎉</p>
                </CardTitle>
                <CardDescription>
                  <p className="hidden md:block">You found a special Area! 🥳🎉</p>
                  <span className="block md:hidden lg:hidden xl:hidden 2xl:hidden">
                    <MyListComponent items={features} />
                  </span>
                </CardDescription>
              </CardHeader>

              <CardContent>

              </CardContent>
            </Card>

            {/* ---third card --- */}
            <Card className="w-60 hidden md:block">
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-x-2">
                {/* --- Email Button --- */}
                <Dialog >
                  <DialogTrigger asChild><Button variant="outline" size="icon"><Mail /> </Button></DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Reach Me</DialogTitle>
                      <DialogDescription>
                        Email for Queries
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex items-center space-x-2">
                      <div className="grid flex-1 gap-2">
                        <Label htmlFor="link" className="sr-only">
                          Link
                        </Label>
                        <Input
                          id="link"
                          value={email}
                          readOnly
                        />
                      </div>
                      <Button type="submit" size="sm" className="px-3" onClick={handleCopy}>
                        <span className="sr-only">Copy</span>
                        <Copy />
                      </Button>
                    </div>
                    <DialogFooter className="sm:justify-start">
                      <DialogClose asChild>
                        <Button type="button" variant="secondary">
                          Close
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                {/* --- Twitter Button --- */}
                <Button variant="outline" size="icon">
                  <a href="https://x.com/PandeySanc44571" target="_blank">
                    <Twitter />
                  </a>
                </Button>
                {/* <Dialog >
                  <DialogTrigger asChild></DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Book an Appointment</DialogTitle>
                      <DialogDescription>
                        Book an appointment between us
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex items-center space-x-2">
                      <div className="grid flex-1 gap-2">
                        <Label htmlFor="link" className="sr-only">
                          Link
                        </Label>
                        <Input
                          id="link"
                          value={email}
                          readOnly
                        />
                      </div>
                      <Button type="submit" size="sm" className="px-3" onClick={handleCopy}>
                        <span className="sr-only">Copy</span>
                        <Copy />
                      </Button>
                    </div>
                    <DialogFooter className="sm:justify-start">
                      <DialogClose asChild>
                        <Button type="button" variant="secondary">
                          Close
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog> */}

              </CardContent>
              {/* <CardFooter>
                <p>Card Footer</p>
              </CardFooter> */}
            </Card>


          </DrawerHeader>
          <DrawerFooter>
            {/* <Button>Submit</Button> */}
            <DrawerClose>
              <Button variant="destructive" size="icon" className="rounded-full bg-white border-1 border-black color-black hover:bg-red-600"><ChevronDown color="black" /></Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <div className="flex gap-3">
        {/* <CommandBox /> */}
        <Button variant={"outline"} onClick={scrollToTop}><House />
          <span className="hidden md:block">
            Home
          </span>
        </Button>
        <Button variant={"outline"} onClick={() => scrollHandler("projects")}><Presentation />
          <span className="hidden md:block">
            Projects
          </span>
        </Button>
        <Button variant={"outline"} onClick={() => scrollHandler("career")}><Briefcase />
          <span className="hidden md:block">
            Work
          </span>
        </Button>
        <Button variant={"outline"} onClick={() => scrollHandler("contact")}><Mail />
          <span className="hidden md:block">
            Contact
          </span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button id="actionButton" variant={"outline"}><Dog /></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Cat
                <DropdownMenuShortcut><Cat /></DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Dog
                <DropdownMenuShortcut><Dog /></DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>System
                <DropdownMenuShortcut><PawPrint /></DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Badge >

  )
};
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
const scrollHandler = (elemRef: string) => {
  const gotElement = document.getElementById(elemRef);
  if (gotElement) {
    window.scroll({
      top: gotElement.offsetTop,
      behavior: "smooth"
    });
  } else {
    console.log(`component with ID "${elemRef}" doesn't exist`);
  }
};
export default Navbar