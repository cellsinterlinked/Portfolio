import React, { useEffect, useState } from 'react';
import Project from './Components/Projects/Project';
import MobileProject from './Components/Projects/MobileProject';
import CloudinaryTech from './Components/Project-Tech/CloudinaryTech';
import ReactTech from './Components/Project-Tech/ReactTech';
import SocketTech from './Components/Project-Tech/SocketTech';
import SanityTech from './Components/Project-Tech/SanityTech';
import NodeTech from './Components/Project-Tech/NodeTech';
import MongoDBTech from './Components/Project-Tech/MongoDBTech';
import Header from './Components/Header';
import Technologies from './Components/Technologies';
import Contact from './Components/Contact';
import TopImage from './Resources/design1.jpg';
import MidImage from './Resources/design2.jpg';

const Content = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1450);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  return (
    <div className="wrapper">
      <section className="header">
        <img src={TopImage} alt="Coder Stuff" className="background"></img>
        <Header isDesktop={isDesktop} />
      </section>

      <Technologies />

      <div id="projects" className="giant-header">
        <img className="background2" src={MidImage} alt="Tech Stuffffff"></img>

        <h2 className="projects-title">My Projects</h2>

        {isDesktop ? (
          <Project
            video={
              'https://res.cloudinary.com/dbnapmpvm/video/upload/v1643935154/Portfolio/NonUrgentgram_fxz4rn.mp4'
            }
            desktop={true}
            techs={
              <>
                <NodeTech /> <ReactTech /> <SocketTech />{' '}
              </>
            }
            name={'Tabletop Assistant'}
            description="This is a website on which users can interactively run and
          participate in a game of Dungeons and Dragons with their
          friends. The head of the game will create a room name in which
          all the other players will use to enter the same room. Once
          all the players have joined data about the game including
          combat movement, dice rolls, and character stats will be shared
          real time."
            list={
              <>
                <li>Character Sheet Display</li>
                <li>Map Displays</li>
                <li>Npc Display</li>
                <li>Interactive Combat Map</li>
                <li>Drag and Drop Units</li>
                <li>Changeable NPC notes</li>
                <li>Customizable Portraits</li>

                <li>Private and Public Chat</li>
                <li>Generated Dice Rolls</li>
              </>
            }
          />
        ) : (
          <MobileProject
          video={
            'https://res.cloudinary.com/dbnapmpvm/video/upload/v1643935154/Portfolio/NonUrgentgram_fxz4rn.mp4'
          }
          desktop={true}
          techs={
            <>
              <NodeTech /> <ReactTech /> <SocketTech />{' '}
            </>
          }
          name={'Tabletop Assistant'}
          description="This is a website on which users can interactively run and
        participate in a game of Dungeons and Dragons with their
        friends."
          list={
            <>
              <li>Character Sheet Display</li>
              <li>Interactive Combat Map</li>
              <li>Drag and Drop Units</li>
              <li>Dynamic Map and NPC Information</li>
              <li>Customizable Portraits</li>
              <li>Private and Public Chat</li>
              <li>Generated Dice Rolls</li>
              <li>Password Protected Rooms for Each Game</li>
            </>

          }
          
          
          />
        )}

{isDesktop ? (<Project
          video={
            'https://res.cloudinary.com/dbnapmpvm/video/upload/v1643935154/Portfolio/NonUrgentgram_fxz4rn.mp4'
          }
          desktop={true}
          list={
            <>
              <li>Blog Posting By Owner</li>
              <li>Contact Page</li>
              <li>Inbox For Messages</li>
              <li>Owner Sign In</li>
              <li>Downloadable PDF</li>
            </>
          }
          techs={
            <>
              <NodeTech /> <ReactTech /> <SanityTech /> <MongoDBTech />
            </>
          }
          name={'Chantz Morris Real Estate'}
          description="This is the public page for a local real estate agent who came to me for a personalized business web site. It provides information for buyers and sellers,
             a pdf that can be downloaded and sent to the agent, and a contact page which directly sends to the site's inbox. The site also contains blog posts from the agent which are 
             added using the Sanity.io client. "
        />) : (<MobileProject
          video={
            'https://res.cloudinary.com/dbnapmpvm/video/upload/v1643935154/Portfolio/NonUrgentgram_fxz4rn.mp4'
          }
          desktop={true}
          list={
            <>
              <li>Blog Posting By Owner</li>
              <li>Contact Page</li>
              <li>Inbox For Messages</li>
              <li>Owner Sign In</li>
              <li>Downloadable PDF</li>
            </>
          }
          techs={
            <>
              <NodeTech /> <ReactTech /> <SanityTech /> <MongoDBTech />
            </>
          }
          name={'ACM Realty Team'}
          description="This is the public page for a local team of real estate agents who came to me for a personalized business web site."
          
          
          />)}

       {isDesktop ? (<Project
          video={
            'https://res.cloudinary.com/dbnapmpvm/video/upload/v1643935154/Portfolio/NonUrgentgram_fxz4rn.mp4'
          }
          list={
            <>
              <li>Sign up/Login</li>
              <li>Messaging</li>
              <li>Posting</li>
              <li>Commenting</li>
              <li>Liking/Saving</li>
              <li>Follow Functionality</li>
              <li>HashTags</li>
              <li>User/Hashtag Search</li>
              <li>Tagging Users</li>
            </>
          }
          name={'Non-Urgentgram'}
          description="This is an almost full fledged instagram clone I made to test my skills at a social media type application. It began as a joke just for practice but after 
          realizing the scope of it, I decided to finish it and get friends and family so sign up. The live link contains a version only populated by finctional characters from
          a favorite scifi series, so feel free to play around with it!"
        
          techs={
            <>
              <NodeTech /> <ReactTech />
              <MongoDBTech />
              <CloudinaryTech />
            </>
          }
          url="https://non-urgentgram.netlify.app/home"
          github="https://github.com/cellsinterlinked/Insta-Clone-UI"
        />) : (
          <MobileProject
          video={
            'https://res.cloudinary.com/dbnapmpvm/video/upload/v1643935154/Portfolio/NonUrgentgram_fxz4rn.mp4'
          }
          list={
            <>
              <li>Sign up/Login</li>
              <li>Messaging</li>
              <li>Posting/Tagging</li>
              <li>Commenting</li>
              <li>Liking/Saving</li>
              <li>Follow Functionality</li>
              <li>HashTags</li>
              <li>User/Hashtag Search</li>
              <li>Activity Feed</li>
            </>
          }
          name={'Non-Urgentgram'}
          description="This is my attempt at something very similar to instagram."
          techs={
            <>
              <NodeTech /> <ReactTech />
              <MongoDBTech />
              <CloudinaryTech />
            </>
          }
          url="https://non-urgentgram.netlify.app/home"
          github="https://github.com/cellsinterlinked/Insta-Clone-UI"
          />
        )}
          
          
          








       {isDesktop ? (<Project
          video={
            'https://res.cloudinary.com/dbnapmpvm/video/upload/v1643935154/Portfolio/NonUrgentgram_fxz4rn.mp4'
          }
          desktop={true}
          techs={
            <>
              <NodeTech /> <ReactTech />
              <MongoDBTech />
              <CloudinaryTech />
            </>
          }
          description="This is a site designed for coaches of fitness/bodybuilding competitors to track their clients' progress. A user signs up and has a dashboard of their created clients.
          These clients can have checkins ehich include all optional fields of body fat percentage, weight, 
          measurements, progress pictures and cardio activity. On each client's personal page the coach can see the overall data represented on graphs, or can visit each individual check in
          and see it compared to the previous one."
          name={'Coach Console'}
          list={
            <>
              <li>Sign up/Login</li>
              <li>Posting Checkins</li>
              <li>Editing/Creation of Checkins and Clients</li>
              <li>Body Fat Calculation</li>
              <li>Data Analysis Charts</li>
              <li>Views of Progress over time</li>
              <li>Upload of Progress Photos</li>
              <li>Light and Dark Mode</li>
            </>
          }
        />) : (
          <MobileProject
          video={
            'https://res.cloudinary.com/dbnapmpvm/video/upload/v1643935154/Portfolio/NonUrgentgram_fxz4rn.mp4'
          }
          desktop={true}
          techs={
            <>
              <NodeTech /> <ReactTech />
              <MongoDBTech />
              <CloudinaryTech />
            </>
          }
          description="This is a site designed for coaches of fitness/bodybuilding competitors to track their clients' progress over time in several different fields."
          name={'Coach Console'}
          list={
            <>
              <li>Sign up/Login</li>
              <li>Posting Checkins</li>
              <li>Editing/Creation of Checkins and Clients</li>
              <li>Body Fat Calculation</li>
              <li>Data Analysis Charts</li>
              <li>Views of Progress over time</li>
              <li>Upload of Progress Photos</li>
              <li>Light and Dark Mode</li>
            </>
          }
          
          
          />
        )}
      </div>

      <Contact />
    </div>
  );
};

export default Content;
