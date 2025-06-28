import Image from "next/image";
import pfp from '@/assets/images/profile_picture.png'

export default function Home() {
  return (
    <main className="px-5 py-3 bg-primary0 min-h-screen">
      <div className="flex justify-center items-center">
        <Image className='rounded-full border-2 border-primary3' src={pfp} alt='profile_picture' width={250} height={250}/>

        <div className="mx-5">
          <p className="text-black text-3xl font-bold font-work-sans">Emirhan Ak</p>
          <p className="text-black">Electrical and Electronics Engineer</p>
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <div className="w-220 justify-start items-center">
            <h1 className="text-2xl text-black font-bold">About Me</h1>

            <p className="text-black mt-2 text-justify text-md">
              I graduated in Electrical and Electronics Engineering from Eskişehir Osmangazi University as the
              second-highest-ranking student in my department, with a 3.36 GPA, where I built a strong foundation
              in embedded systems, FPGA programming, and software development. My passion for learning
              extends beyond engineering—I taught myself English from scratch and continuously seek
              opportunities for self-improvement.
              During my internships, I focused on strengthening my expertise in embedded software development,
              GUI design, and software testing. I gained hands-on experience in developing test programs for
              hardware systems using C#, establishing I2C communication between an STM32 microcontroller and
              an ADS7138 ADC, and creating a hospital queue management system with Python and Qt.
              Additionally, I worked with SQL-based database management and real-time data exchange systems,
              enhancing my problem-solving skills in both embedded and application-level software development.
              These experiences provided me with a well-rounded understanding of software-hardware integration,
              communication protocols, and full-stack application development.
              Alongside my engineering background, I also work as a freelance full-stack developer, creating web
              and mobile applications using React and React Native. This experience has helped me deepen my
              understanding of frontend and backend development, improve my UI/UX design skills, and manage
              end-to-end application lifecycles for clients in various domains.
              With a strong adaptability and problem-solving mindset, I am eager to apply my technical skills and
              engineering knowledge to innovative projects in embedded systems and software development.
            </p>
        </div>
      </div>
    </main>
  );
}
