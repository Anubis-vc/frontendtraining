import Header from './ScratchComponents/Header';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from './Components/Card';
import { Button } from './Components/Button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./Components/Carousel"
import Marquee from "react-fast-marquee";
import temp from "./assets/collage.png";

interface Project {
  title: string;
  desc: string;
  skills: string[];
  url: string;
}

type Props = {
  projects: Project[]
}

function App({ projects }: Props) {
  return (
    <div className='h-screen w-screen bg-inherit'>
      <Header />
      <section className='w-screen h-screen flex justify-center items-center'>
        <Carousel className='w-[75%] max-w-[1000px] h-full flex justify-center items-center p-2'>
          <CarouselContent>
            {projects.map((project, i) => (
              <CarouselItem key={i}>
                <Card key={i} className='w-full h-full relative flex justify-center items-center'>
                  <img
                    src={temp}
                    alt="project"
                    className='w-[30%] h-full object-cover rounded-l-lg'
                  />
                  <div>
                    <CardHeader className='w-full h-full'>
                      <CardTitle className='md:text-2xl'>{project.title}</CardTitle>
                      <CardDescription className='md:text-md'>{project.desc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className='font-bold text-md md:text-lg'>Skills:</p>
                      <ul className='list-disc px-5'>
                        {project.skills.map((skill) =>
                          <li key={skill}>{skill}</li>
                        )}
                      </ul>
                    </CardContent>
                  </div>
                  <Button
                    className='absolute right-6 bottom-6'
                    variant="reverse"
                  >
                    <a href={project.url} target='_blank'>To Content</a>
                  </Button>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <Marquee
        className='fixed bottom-6 w-screen bg-[#88aaee]'
        pauseOnHover={true}
      >
        <a href="mailto:vchughcodes@gmail.com">
          <div className='w-screen flex justify-evenly'>
            <div>
              Contact me at vchughcodes@gmail.com
            </div>
            <div>
              Contact me at vchughcodes@gmail.com
            </div>
          </div>
        </a>
      </Marquee>
    </div>
  )
}

export default App;