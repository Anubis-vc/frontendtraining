import Header from './ScratchComponents/Header';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from './Components/Card';
import temp from "./assets/collage.png";

function App() {
  return (
    <div className='h-screen w-screen bg-inherit'>
      <Header />
      <section className='w-full h-full flex justify-center items-center'>
        <Card className='w-[60%] h-[60%] flex flex-col justify-center items-center'>
          <img
            src={temp} 
            alt="project"
            className='w-[30%]'
          />
          <CardHeader>
            <CardTitle>Project 1</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </section>

      {/* Scrollable carousel */}

    </div>
  )
}

export default App;