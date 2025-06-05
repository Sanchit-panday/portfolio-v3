// import React from 'react'

import {
  Tooltip,
  //   TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from '@/components/ui/button'
import { Separator } from "@/components/ui/separator"
import { useEffect, useState } from "react"

import { Howl } from 'howler';
import track1 from "@/assets/audio/xylophone_1.ogg"
import track2 from "@/assets/audio/xylophone_2.ogg"
import track3 from "@/assets/audio/xylophone_3.ogg"
import track4 from "@/assets/audio/xylophone_4.ogg"
import track5 from "@/assets/audio/xylophone_5.ogg"

function TechStack() {

  // SFX List
  var hoverSfx = {
    track1: new Howl({
      src: [track1]
    }),
    track2: new Howl({
      src: [track2]
    }),
    track3: new Howl({
      src: [track3]
    }),
    track4: new Howl({
      src: [track4]
    }),
    track5: new Howl({
      src: [track5]
    })
  }
  // howl SFX & Audio Context handler 
  var context: AudioContext;
  context = new window.AudioContext();
  const [count, setCount] = useState(0);
  function playSFX() {
    // console.log(context.state);
    try {
      if (context.state === "suspended") {
        context.close();
        context = new window.AudioContext();
      }
      context.resume().then(() => {
        const trackList = [hoverSfx.track1, hoverSfx.track2, hoverSfx.track3, hoverSfx.track4, hoverSfx.track5];
        let index = (count) % trackList.length;
        trackList[index].play();
        setCount(count + 1);
        console.log(count);
      });
    } catch (error) {
      console.log("Audio Context error!")
    }
  }

  // useFontCycler();
  return (
    <section id='home' className='space-y-5'>
      <h1 className="text-center sm:text-left scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl lowercase leading-none ">
        <span className="font-['rubik_burned']">d<span className="text-4xl uppercase">e</span>veloper</span>, <span className="font-['lacquer']">illu<span className="text-4xl uppercase">s</span>trator</span>, <span id="design_text" className="font-['Rock_3D'] text-4xl">st<span className="text-4xl uppercase">u</span>dent</span> and i...
      </h1>
      <h2 className="text-center sm:text-left font-bold tracking-tight transition-colors">
        Learning something new everyday
      </h2>
      <Separator />
      <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 justify-between items-center text-center sm:text-left'>
        <div className="space-y-1">
          <h3 className="font-medium text-sm leading-none">India</h3>
          <p className="text-xs text-muted-foreground">Location</p>
        </div>
        <div className="space-y-1 cursor-pointer" onClick={() => open("https://www.instagram.com/tphfamily123/")}>
          <h3 className="font-medium text-sm leading-none">@The Philanthropy House</h3>
          <p className="text-xs text-muted-foreground">Shares vision with</p>
        </div>
        <div className="space-y-1">
          <h3 className="font-medium text-sm leading-none">10+ projects done</h3>
          <p className="text-xs text-muted-foreground">Projects</p>
        </div>
      </div>
      <div className='flex flex-col space-y-5'>
        <div className='flex flex-col space-y-2.5'>
          <h3 className='font-semibold leading-none tracking-tight capitalize'>{"<"}--- My Intrests ---{">"}</h3>
          <div className='space-y-2 space-x-2'>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" onMouseEnter={() => playSFX()}>Web Development</Button>
                </TooltipTrigger>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" onMouseEnter={() => playSFX()}>Art?</Button>
                </TooltipTrigger>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" onMouseEnter={() => playSFX()}>Game Development</Button>
                </TooltipTrigger>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" onMouseEnter={() => playSFX()}>Music?</Button>
                </TooltipTrigger>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" onMouseEnter={() => playSFX()}>Video Making</Button>
                </TooltipTrigger>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" onMouseEnter={() => playSFX()}>Blogs?</Button>
                </TooltipTrigger>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className='flex flex-col space-y-2.5'>
          <h3 className='font-semibold leading-none tracking-tight capitalize'>{"<"}--- Miscellaneous ---{">"}</h3>
          <div className='space-y-2 space-x-2'>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" onMouseEnter={() => playSFX()}>Frameworks</Button>
                </TooltipTrigger>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" onMouseEnter={() => playSFX()}>Apps</Button>
                </TooltipTrigger>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" onMouseEnter={() => playSFX()}>Languages</Button>
                </TooltipTrigger>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </section>
  )
}
export default TechStack

const useFontCycler = () => {
  useEffect(() => {
    const fonts = [
      "rubik burned, serif",
      "rock 3d, cursive",
      "nosifer, sans-serif",
      "lacquer, monospace",
    ];
    const delay = 2500; // 5 seconds pause
    const interval = 130; // 190ms per font switch
    const repeat = 3; // number of full cycles
    const totalSteps = fonts.length * repeat;

    let index = 0;
    let intervalId: NodeJS.Timeout;
    let timeoutId: NodeJS.Timeout;

    const startCycle = () => {
      index = 0;
      intervalId = setInterval(() => {
        const span = document.getElementById("design_text");
        if (span) {
          span.style.fontFamily = fonts[index % fonts.length];
        }
        index++;

        if (index >= totalSteps) {
          clearInterval(intervalId);
          timeoutId = setTimeout(startCycle, delay); // wait 5s and restart
        }
      }, interval);
    };

    // Initial delay before starting the first cycle
    timeoutId = setTimeout(startCycle, delay);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);
};

