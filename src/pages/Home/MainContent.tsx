import ProfileCard from './ProfileCard';
import TechStack from './sections/TechStack';
import RecentProjects from './sections/RecentProjects';
import CareerSection from './sections/CareerSection';
import Contact from './sections/Contact';

function MainContent() {
  return (
    <div className='flex flex-col lg:flex-row sm:mx-10 lg:mx-0 my-10 space-x-0 lg:space-x-10 space-y-10 lg:space-y-0'>
      {/*  --- ProfileCard.tsx --- */}
      <ProfileCard />

      <div className='min-w-[65%]'>
        <TechStack />

        <section id='projects' className='pt-20'>
          <RecentProjects />
        </section>

        <section id='career' className='pt-20'>
          <CareerSection />
        </section>
        <section id='contact' className='pt-20'>
          <Contact />
        </section>
      </div>
    </div>
  )
}

export default MainContent