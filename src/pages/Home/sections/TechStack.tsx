// import React from 'react'

import {
  Tooltip,
//   TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from '@/components/ui/button'
import { Separator } from "@/components/ui/separator"


function TechStack() {
  return (
    <section id='home' className='space-y-5'>
          <h1 className="text-center sm:text-left scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl">
            I help transform your digital vision into reality.
          </h1>
          <h2 className="text-center sm:text-left font-bold tracking-tight transition-colors">
            Learning something new everyday
          </h2>
          <Separator />
          <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 justify-between items-center text-center sm:text-left'>
            <div className="space-y-1">
              <h3 className="font-medium text-sm leading-none">Uttar Pradesh, India</h3>
              <p className="text-xs text-muted-foreground">Location</p>
            </div>
            <div className="space-y-1">
              <h3 className="font-medium text-sm leading-none">U.P., India</h3>
              <p className="text-xs text-muted-foreground">Experience</p>
            </div>
            <div className="space-y-1">
              <h3 className="font-medium text-sm leading-none">10+ projects done</h3>
              <p className="text-xs text-muted-foreground">Projects</p>
            </div>
          </div>
          <div className='flex flex-col space-y-5'>
            <div className='flex flex-col space-y-2.5'>
              <h3 className='font-semibold leading-none tracking-tight'>-Languages and Technologies-</h3>
              <div className='space-y-2 space-x-2'>
                <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">AWS</Button>
                      </TooltipTrigger>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">C++</Button>
                      </TooltipTrigger>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">C#</Button>
                      </TooltipTrigger>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Java</Button>
                      </TooltipTrigger>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Python</Button>
                      </TooltipTrigger>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Git</Button>
                      </TooltipTrigger>
                    </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            <div className='flex flex-col space-y-2.5'>
              <h3 className='font-semibold leading-none tracking-tight'>
                -Projects as Topics-
              </h3>
              <div className='space-y-2 space-x-2'>
                <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Web Developement</Button>
                      </TooltipTrigger>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Game Development</Button>
                      </TooltipTrigger>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Operating System Development</Button>
                      </TooltipTrigger>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">APP Development</Button>
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