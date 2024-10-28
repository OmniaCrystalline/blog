/** @format */
import Categories from "./components/Categories";
import RecentPosts from "./components/RecentPosts";
import SideMenu2 from "./components/SideMenu2";
import SideMenu from "./components/SideMenu";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className=''>
      <div>
        <Hero />
        <Categories />
      </div>
      <div className='grid lg:flex'>
        <div className='lg:w-2/3'>
          <span className='hidden' id='firstPost'></span>
          <RecentPosts parent='home' />
        </div>
        <div className='lg:w-1/3'>
          <SideMenu />
          <SideMenu2 />
        </div>
      </div>
    </main>
  );
}
