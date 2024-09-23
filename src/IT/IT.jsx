import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { FaCircleInfo } from "react-icons/fa6";
export default function Home() {
  return (
    <div>
      <Button>Clickk me</Button>
    <Carousel className="w-full max-w-sm m-auto">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6 aspect-square">
                  <span className="text-2xl font-semibold">mohitpopa</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    <Avatar className="w-[100px] h-[100px] items-center justify-center m-auto">
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
  <AvatarFallback className="hidden">CN</AvatarFallback>
</Avatar>
<FaCircleInfo className="w-10 h-10 " />
    </div>
  )
}
