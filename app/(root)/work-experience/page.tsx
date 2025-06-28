import React from 'react'

const WorkExperiencePage = () => {
  return (
    <main className='px-5 py-3 bg-primary0 min-h-screen'>
      <div className='flex justify-center items-center'>
        <div className="w-220 justify-start items-center">
          <h1 className="mt-4 text-2xl text-black font-bold">Work Experience</h1>
          <dl>
            <div className="flex mt-3 justify-between items-center"><dt className="text-xl text-black font-bold">METASOFT</dt><p className="text-black text-lg">July 2024 - August 2024</p></div>
            <dd className="mt-2 text-black text-justify text-md">
              During this internship, I actively contributed to the development of a hospital queue management
              system designed to optimize patient flow and improve doctor-patient interaction. This project provided
              hands-on experience in full-stack application development within a real-world healthcare setting. I was
              responsible for designing and developing a desktop application using Python and the Qt framework,
              with a strong emphasis on creating a user-friendly and accessible interface. I also implemented a
              robust SQL-based database system to manage real-time patient and queue data efficiently.
              Additionally, I integrated data exchange functionalities to ensure smooth and effective communication
              between patients and healthcare providers.
            </dd>
            <div className="flex mt-2 justify-between items-center"><dt className="text-xl text-black font-bold">Savronik Elektronik San. ve Tic. A.Ş.</dt><p className="text-black text-lg">July 2023 - August 2023</p></div>
            <dd className="mt-2 text-black text-justify text-md">
              In my first internship, I gained hands-on experience in both desktop application development and
              embedded software development, expanding my skills in hardware-software integration. I developed
              desktop applications using C# to create and execute test programs for hardware systems at Savronik.
              On the embedded side, I worked with STM32CubeIDE to implement I2C communication between an
              STM32 microcontroller and an ADS7138 ADC, ensuring accurate data transfer through thorough
              testing and debugging. This experience deepened my knowledge of communication protocols like I2C
              and strengthened my ability to develop reliable software solutions for hardware testing and
              microcontroller interaction.
            </dd>
          </dl>

          <h1 className="mt-4 text-2xl text-black font-bold">Freelance Experience</h1>
          <dl>
            <dt className="mt-3 text-xl text-black font-bold">Gastroblue Check App</dt>
            <dd className="mt-2 text-black text-justify text-md">
              As part of a team of three, I co-developed Gastroblue Check App, a mobile application designed to
              digitalize and streamline critical food safety and operational monitoring processes in hotel kitchens.
              Built using React Native, the app enables comprehensive tracking of data such as goods receiving,
              product storage, hot/cold food temperatures, service timing, and location tracking. It also includes
              modules for monitoring essential procedures like defrosting and product disinfection. The application
              stores all recorded data and allows exporting detailed Excel reports for audit and analysis, providing a
              reliable tool for ensuring hygiene and operational standards in hospitality environments.
              <br/><br/>
              Project Website: <a href='https://www.gastrobluecheckapp.com/'>https://www.gastrobluecheckapp.com/</a>
            </dd>
          </dl>

        </div>
      </div>
    </main>
  )
}

export default WorkExperiencePage