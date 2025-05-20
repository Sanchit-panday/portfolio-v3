import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CalendarIcon } from "lucide-react"
import kiit_logo from '@/assets/images/KIIT_logo.png';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function CareerSection() {
  return (
    <>
      <h2 className="text-2xl font-semibold tracking-tight">Education and Experience</h2>
      <div className="space-y-4 sm:space-y-6 mt-5">
        <Card>
          <CardHeader className="gap-0">
            <CardTitle className="flex flex-col justify-between items-center sm:flex-row space-y-2 sm:space-y-0">
              <div className="flex flex-row space-x-3 items-center">
                <Avatar className="h-7 w-7">
                  <AvatarImage src={kiit_logo} />
                  <AvatarFallback>KIIT LOGO</AvatarFallback>
                </Avatar>
                <h3>Kalinga Institute Of Industrial Techonology</h3>
              </div>
              <div className="inline-flex h-9 items-center justify-center text-xs border border-input bg-transparent shadow-xs font-medium rounded-md px-4 py-2">
                <CalendarIcon size={16} className="mr-2" />
                Aug 2022 - Jul 2026
              </div>
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    </>
  )
}

export default CareerSection