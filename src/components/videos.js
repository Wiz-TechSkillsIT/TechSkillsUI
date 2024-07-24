import React, { useEffect, useState } from 'react'; 
import { PanelMenu } from 'primereact/panelmenu';
import { Badge } from 'primereact/badge';
import courses from '../data/courses'; 
import videos from '../data/videos';
import modules from '../data/modules';
import subCourses from '../data/subcourses';
import { useSearchParams } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
function Videos(props){
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [param] = useSearchParams(); 
    const [courseId,setCourseId] = useState(param.get('courseId'));
    const [courseInfo,setCourseInfo] = useState({}); 
    const [modulesInfo,setModulesInfo] = useState([]); 
    const [videosInfo,setVideosInfo] = useState([]); 
    const [data,setData]  = useState([]);
    const [videoCode, setVideoCode] = useState([]);
    const [msg,setMsg] = useState('');
    const [title,setTitle] = useState(''); 

    useEffect(()=>{
        let courseData = subCourses.filter(c=>c._id === courseId)[0]; 
        let modulesData = modules.filter(m=>m.courseId === courseId); 
         
        let videosData = [];
        let itemsData = [];
        let itemsArry = [] ; 
        let moduleData ={};
        let temp = {};
         
        console.log(courseData)
        modulesData.forEach(m=>{
            videosData.push(videos.filter(v=>v.moduleId === m._id));
            
        });
         
        modulesData.forEach(m=>{
            let itemData=[];
        videosData.forEach(v=>{
            v.sort((a,b)=>a.sequence - b.sequence).forEach(vod=>{
                if(vod.moduleId === m._id){
                    if(courseData.type === 'free'){
                        temp =
                            {
                                label: vod.title,
                                icon: 'pi pi-lock-open',
                                shortcut: vod.time  ,
                                template: itemRenderer,
                                command: ()=>{
                                    setVideoCode(vod.code);
                                    setTitle(vod.title)
                                    closeSidebar();
                                }
                            }
                    }
                    else{
                        temp =
                        {
                            label: vod.title,
                            icon: 'pi pi-lock',
                            shortcut: vod.time ,
                            template: itemRenderer,
                            command: ()=>{
                                closeSidebar();
                                setTitle(vod.title)
                                setMsg('red-flag')
                            }
                        }
                    }
                     
                    itemData.push(temp);   
                }
                 
             });
               moduleData = {
                label: m.name, 
                icon: 'pi pi-list',
                shortcut: itemData.length + ' videos',
                template: itemRenderer,
                items : itemData
            }
            
        })
        itemsArry.push(moduleData);
    })
        
        setCourseInfo(courseData)
        setModulesInfo(modulesData)
        setVideosInfo(videosData)
 
        setData(itemsArry)
         
        } ,[]); 
 
    
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const itemRenderer = (data, options) => (
        <a className="flex align-items-center px-3 py-2 cursor-pointer" onClick={options.onClick}>
            <span className={`${data.icon} text-primary`} />
            <span className={`mx-2 ${data.items && 'font-semibold'}`}>{data.label}</span>
            {data.badge && <Badge className="ml-auto" value={data.badge} />}
            {data.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{data.shortcut}</span>}
        </a>
    );
 

    const showVideos = (moduleId, videoSrc) => {
        const videoSection = document.getElementById('videos');
        videoSection.innerHTML = '';

        const videoContainer = document.createElement('div');
        videoContainer.className = 'video-container';

        const video = document.createElement('video');
        video.controls = true;
        const source = document.createElement('source');
        source.src = videoSrc;
        source.type = 'video/mp4';

        video.appendChild(source);
        videoContainer.appendChild(video);
        videoSection.appendChild(videoContainer);

        closeSidebar(); // Close sidebar when a sidebar item is clicked
    };

    const footer = (
        <>
            <Button label="Enroll" icon="pi pi-check" />
            <Button label="Go to main course page" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} />
        </>
    );

    const iframeSrc = "https://player.vdocipher.com/v2/?otp=20160313versASE323ii63GgWsx6PB6mXvEGmrdrYtC9PPD69HzvOfbbgpJNYAOG&playbackInfo=eyJ2aWRlb0lkIjoiNDBjOTg1ODc5ZDQ1NmE3NWIzYzNlMDk4Nzg4NjAzN2IifQ==";

  const iframeStyle = {
    border: 0,
    maxWidth: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%'
  };

  const containerStyle = {
    paddingTop: '41%',
    position: 'relative'
  };

    return (
        <div className="app">
             
        <div className="top-nav">
            <div className="hamburger" onClick={toggleSidebar}>☰</div>
        </div>
        <div className="container_video">
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`} id="sidebar">
                <div className="sidebar-header">
                    <div className="hamburger sidebar-hamburger" onClick={toggleSidebar}>☰</div>
                    <div className="sidebar-title">Modules</div>
                </div>
                <div className="panel-menu-container">
                    <PanelMenu model={data} className="w-full md:w-25rem" />
                </div>
            </div>
            <div className={`content ${isSidebarOpen ? '' : ''}`}>
                <div className="video-section" id="video-section">
                    <h2 style={{fontFamily: 'cursive'}}>{title}</h2>
                    <div id="videos">
                        {/* Videos will be inserted here dynamically */}
                        {
                            msg === 'red-flag'? 
                             <div>
                                    <Card title="Access Restricted" footer={footer}>
                                        <p className="m-0">
                                            Oops!!! Looks like you have clicked on video that is 
                                            accessible for enrolled learners. 
                                            <br />
                                            If you have any query regarding enrollment or pricing
                                            please use the chat bot at the bottom corner of the 
                                            screen to reach out to us. 
                                            <br />
                                            Alternatively, you can also reach out on whatsapp directly 
                                            to <strong>whatsapp number</strong>
                                        </p>

                                    </Card>
                             </div> : 
                            <div>
                                        <div style={containerStyle}>
                                            <iframe
                                                src={iframeSrc}
                                                style={iframeStyle}
                                                allowFullScreen
                                                allow="encrypted-media"
                                            />
    </div>
                            </div>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
    
}

export default Videos; 