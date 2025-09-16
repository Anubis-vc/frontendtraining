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

interface Project {
  title: string;
  desc: string;
  skills: string[];
  url: string;
  image: string;
}

type Props = {
  projects: Project[]
}

function App({ projects }: Props) {
  return (
    <div className='h-screen w-screen bg-inherit'>
      <Header />
      <section className='w-screen min-h-screen flex justify-center items-center px-2'>
        <Carousel className='w-[75%] max-w-[1000px] h-[80vh] max-h-[750px] md:h-full flex justify-center items-center md:p-2'>
          <CarouselContent>
            {projects.map((project, i) => (
              <CarouselItem key={i}>
                <Card className='w-full max-h-[750px] h-full relative flex flex-col md:flex-row justify-start md:justify-center items-center'>
                  <img
                    src={project.image}
                    alt="project"
                    className='w-full h-[155px] md:h-full object-cover rounded-t md:rounded-l'
                  />
                  <div>
                    <CardHeader className='w-full md:h-full'>
                      <CardTitle className='text-lg md:text-2xl'>{project.title}</CardTitle>
                      <CardDescription className='lg:text-lg'>{project.desc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className='font-bold text-md md:text-lg'>Skills:</p>
                      <ul className='text-sm md:text-md lg:text-lg list-disc px-5'>
                        {project.skills.map((skill) =>
                          <li key={skill}>{skill}</li>
                        )}
                      </ul>
                    </CardContent>
                  </div>
                  <Button
                    className='h-8 p-2 md:px-4 md:h-10 absolute right-3 bottom-3 md:right-6 md:bottom-6'
                    variant="default"
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
        className='fixed bottom-5 md:bottom-6 w-screen bg-[#88aaee]'
        pauseOnHover={true}
      >
        <a href="mailto:vchughcodes@gmail.com">
          <div className='w-screen flex justify-around'>
            <div>
              Contact me at vchughcodes@gmail.com
            </div>
            <div className='hidden md:block'>
              Contact me at vchughcodes@gmail.com
            </div>
          </div>
        </a>
      </Marquee>
    </div>
  )
}

export default App;