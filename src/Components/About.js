import { useState, useContext } from 'react';
import FavContext from '../utils/FavContext';
const Section = ({ title, desc, isVisible, setIsVisible }) => {
  return (
    <div className="m-2 p-3 border-2 border-black">
      <h1 className="text-2xl">{title}</h1>

      {isVisible && <p>{desc}</p>}

      {isVisible ? (
        <button className="underline font-bold" onClick={() => setIsVisible()}>
          Hide
        </button>
      ) : (
        <button className="underline font-bold" onClick={() => setIsVisible()}>
          Show
        </button>
      )}
    </div>
  );
};

const About = () => {
  const [visibleSection, setVisibleSection] = useState('');
  const { card } = useContext(FavContext);
  console.log(card);
  return (
    <>
      <Section
        isVisible={visibleSection === 'carrer'}
        setIsVisible={() => {
          visibleSection === 'carrer'
            ? setVisibleSection('')
            : setVisibleSection('carrer');
        }}
        title="Carrer"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sunt porro quidem doloremque nulla maiores accusantium iure itaque laudantium corrupti inventore unde aliquam corporis et, culpa nesciunt? Veritatis, similique cumque.
    Vitae odit nostrum eius debitis praesentium, architecto vero cumque deleniti quos ut pariatur accusamus quidem. Fugiat optio debitis a minima ex quae ab, iure esse ad ea cupiditate laudantium quod!"
      />
      <Section
        isVisible={visibleSection === 'team'}
        setIsVisible={() => {
          visibleSection === 'team'
            ? setVisibleSection('')
            : setVisibleSection('team');
        }}
        title="Team"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sunt porro quidem doloremque nulla maiores accusantium iure itaque laudantium corrupti inventore unde aliquam corporis et, culpa nesciunt? Veritatis, similique cumque.
    Vitae odit nostrum eius debitis praesentium, architecto vero cumque deleniti quos ut pariatur accusamus quidem. Fugiat optio debitis a minima ex quae ab, iure esse ad ea cupiditate laudantium quod!"
      />
      <Section
        isVisible={visibleSection === 'project'}
        setIsVisible={() => {
          visibleSection === 'project'
            ? setVisibleSection('')
            : setVisibleSection('project');
        }}
        title="Project"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sunt porro quidem doloremque nulla maiores accusantium iure itaque laudantium corrupti inventore unde aliquam corporis et, culpa nesciunt? Veritatis, similique cumque.
    Vitae odit nostrum eius debitis praesentium, architecto vero cumque deleniti quos ut pariatur accusamus quidem. Fugiat optio debitis a minima ex quae ab, iure esse ad ea cupiditate laudantium quod!"
      />
    </>
  );
};

export default About;
