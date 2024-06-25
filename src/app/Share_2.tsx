"use client"

import React from "react";
import Icon_2 from "./icon_2";
import "../app/share.css"
import Modal from "react-modal";
import Icon_3 from "./icon_3";

Modal.setAppElement('#root');

export const Share_2 = () => {
    const [showToast, setToast] = React.useState(false)
    const [showHidden, setHidden] = React.useState(false)
    const [showModal, setModal] = React.useState(false)
    const [shareMode, setShareMode] = React.useState("")

    const [instaType, setInstaType] = React.useState("")
    
    return(
    <div className="h-screen bg-white" id = "root">
        <div className="w-full flex items-center justify-center my-4">
            <div id="toast-success" className={`transition-opacity ease-in duration-200 ${showToast ? "opacity-100" : "opacity-0"} flex justify-center  items-center justify-center w-full max-w-xs mb-2 text-white-500 bg-green-900 rounded-[100px] px-4 py-2 shadow dark:text-white-400 dark:bg-green" role="alert"`}>
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-white-500 bg-green-100 rounded-[100px] dark:bg-green-800 dark:text-green-200">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span className="sr-only">Check icon</span>
                </div>
                <div className="ms-3 text-xs font-normal">Copied to clipbaord.</div>
                <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white text-white-400 hover:text-white-900 rounded-[100px] focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-white-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
                    <span className="sr-only">Close</span>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                </button>
            </div>
        </div>
        <div className="h-screen bg-white grid grid-rows-2 gap-8 mt-[-80px]">
            <div className="flex items-center justify-center h-screen">
                <button type="button" onClick={() => {
                    setHidden(prev => !prev)
                    console.log("pressed")}} 
                    className="rounded-full bg-gradient-to-r from-[#f0f0f0] to-[#e0e0e0] text-muted-foreground hover:bg-gradient-to-r hover:from-[#e0e0e0] hover:to-[#d0d0d0] transition-all duration-300 ease-out hover:scale-110 p-3">
                    <div className="flex direction-row justify-between">
                        <Icon_2 />
                    </div>
                </button>
            </div>
            <div className={`transition-opacity ease-in duration-200 ${showHidden ? "opacity-100" : "opacity-0"} flex h-screen flex-col items-center space-y-2 my-4`}>
                <button
                className={`rounded-full bg-gradient-to-r from-[#f0f0f0] to-[#e0e0e0] text-muted-foreground hover:bg-gradient-to-r hover:from-[#e0e0e0] hover:to-[#d0d0d0] transition-all duration-300 ease-out hover:scale-110 p-2`}
                onClick={() => {
                    setShareMode(_ => "Facebook")
                    setModal(true)}}
                >
                    <FacebookIcon/>
                </button>
                <button
                className="rounded-full bg-gradient-to-r from-[#f0f0f0] to-[#e0e0e0] text-muted-foreground hover:bg-gradient-to-r hover:from-[#e0e0e0] hover:to-[#d0d0d0] transition-all duration-300 ease-out hover:scale-110 p-2"
                onClick={() => {
                    setShareMode(_ => "Instagram")
                    setModal(true)}}
                >
                    <InstagramIcon/>
                </button>
                <button
                className="rounded-full bg-gradient-to-r from-[#f0f0f0] to-[#e0e0e0] text-muted-foreground hover:bg-gradient-to-r hover:from-[#e0e0e0] hover:to-[#d0d0d0] transition-all duration-300 ease-out hover:scale-110 p-2"
                onClick={() =>{
                    setShareMode(_ => "Twitter")
                    setModal(true)}}
                >
                    <TwitterIcon/>
                </button>
                <button
                className="rounded-full bg-gradient-to-r from-[#f0f0f0] to-[#e0e0e0] text-muted-foreground hover:bg-gradient-to-r hover:from-[#e0e0e0] hover:to-[#d0d0d0] transition-all duration-300 ease-out hover:scale-110 p-2"
                onClick={() => {
                    setShareMode(_=> "Clipboard")
                    setHidden(_ => false)
                    setModal(false)
                    setToast(_ => true)
                    setTimeout(() => {
                        setToast(_ => false);
                      }, 2000);
                }
                }
                >
                    <ClipboardIcon/>
                </button>
            </div>
            <Modal
                isOpen={showModal}
                contentLabel="Example Modal"
                className="h-screen flex items-center justify-center rounded-lg"
            >
                <div className="flex w-[600px] h-[350px] border-2 bg-white text-black flex-col rounded-lg">
                    <div className="flex flex-row justify-between items-center">
                            <div className="flex items-center mx-3 text-lg">
                                <p>Share to {shareMode}</p>
                            </div>
                            <div className="flex flex-end justify-end mx-2 my-2">
                                <button onClick={_ => setModal(_ => false)} className="w-[50px] rounded bg-gradient-to-r from-[#f0f0f0] to-[#e0e0e0] text-muted-foreground hover:bg-gradient-to-r hover:from-[#e0e0e0] hover:to-[#d0d0d0] transition-all duration-300 ease-out hover:scale-110 p-3">X</button>
                            </div>
                    </div>
                    <div className="bg-[#e0e0e0] h-[2px] w-full my-1"/>
                    <div className="h-full mx-4">
                        <input type="text" className="border-2 my-4 w-[400px] p-2" placeholder="Enter a message" disabled={instaType =="Story"? true : false}/>
                        {
                            shareMode == "Facebook" ? 
                            <div className="flex flex-row justify-between w-[250px] mx-2">
                            <div className="flex flex-col justify-center items-center">
                                <button
                                    className= {`${instaType == "Message" ? "border-solid border-2 border-[#2d6a4f] w-[43px] h-[43px]" : "w-[43px] h-[43px]"} rounded-full bg-gradient-to-r from-[#f0f0f0] to-[#e0e0e0] text-muted-foreground hover:bg-gradient-to-r hover:from-[#e0e0e0] hover:to-[#d0d0d0] transition-all duration-300 ease-out hover:scale-105 p-2`}
                                    onClick={() => {
                                        // setShareMode(_ => "Instagram")
                                        // setModal(true)
                                        setInstaType(_ => 'Message')
                                        }
                                    }
                                    >
                                    <FacebookIcon/>
                                </button>
                                Messenger
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <button
                                    className={`${instaType == "Post" ? "border-solid border-2 border-[#2d6a4f] w-[43px] h-[43px]" : "w-[43px] h-[43px]"}  rounded-full bg-gradient-to-r from-[#f0f0f0] to-[#e0e0e0] text-muted-foreground hover:bg-gradient-to-r hover:from-[#e0e0e0] hover:to-[#d0d0d0] transition-all duration-300 ease-out hover:scale-105 p-2`}
                                    onClick={() => {
                                        // setShareMode(_ => "Instagram")
                                        // setModal(true)
                                        setInstaType(_ => "Post")
                                        }
                                    }
                                    >
                                    <FacebookIcon/>
                                </button>
                                Post
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <button
                                    className={`${instaType == "Story" ? "border-solid border-2 border-[#2d6a4f] w-[43px] h-[43px]" : "w-[43px] h-[43px]"}  rounded-full bg-gradient-to-r from-[#f0f0f0] to-[#e0e0e0] text-muted-foreground hover:bg-gradient-to-r hover:from-[#e0e0e0] hover:to-[#d0d0d0] transition-all duration-300 ease-out hover:scale-105 p-2`}
                                    onClick={() => {
                                        // setShareMode(_ => "Instagram")
                                        // setModal(true)
                                        setInstaType(_ => "Story")
                                        }
                                    }
                                    >
                                    <FacebookIcon/>
                                </button>
                                Marketplace
                            </div>

                        </div>
                        : shareMode == "Instagram" ? 
                            <div className="flex flex-row justify-between w-[200px] mx-2">
                                <div className="flex flex-col justify-center items-center">                
                                    <button
                                        className={`${instaType == "Story" ? "border-solid border-2 border-[#2d6a4f] w-[43px]" : "w-[40px]"}  rounded-full bg-gradient-to-r from-[#f0f0f0] to-[#e0e0e0] text-muted-foreground hover:bg-gradient-to-r hover:from-[#e0e0e0] hover:to-[#d0d0d0] transition-all duration-300 ease-out hover:scale-105 p-2`}
                                        onClick={() => {
                                            // setShareMode(_ => "Facebook")
                                            // setModal(true)
                                            setInstaType(_ => "Story")
                                            }
                                        }
                                        >
                                            <InstagramIcon/>
                                    </button>
                                    Story
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <button
                                        className= {`${instaType == "Message" ? "border-solid border-2 border-[#2d6a4f] w-[43px]" : "w-[40px]"} w-[40px] rounded-full bg-gradient-to-r from-[#f0f0f0] to-[#e0e0e0] text-muted-foreground hover:bg-gradient-to-r hover:from-[#e0e0e0] hover:to-[#d0d0d0] transition-all duration-300 ease-out hover:scale-105 p-2`}
                                        onClick={() => {
                                            // setShareMode(_ => "Instagram")
                                            // setModal(true)
                                            setInstaType(_ => 'Message')
                                            }
                                        }
                                        >
                                        <InstagramIcon/>
                                    </button>
                                    Message
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <button
                                        className={`${instaType == "Post" ? "border-solid border-2 border-[#2d6a4f] w-[43px]" : "w-[40px]"} w-[40px] rounded-full bg-gradient-to-r from-[#f0f0f0] to-[#e0e0e0] text-muted-foreground hover:bg-gradient-to-r hover:from-[#e0e0e0] hover:to-[#d0d0d0] transition-all duration-300 ease-out hover:scale-105 p-2`}
                                        onClick={() => {
                                            // setShareMode(_ => "Instagram")
                                            // setModal(true)
                                            setInstaType(_ => "Post")
                                            }
                                        }
                                        >
                                        <InstagramIcon/>
                                    </button>
                                    Post
                                </div>

                            </div> : 
                            <div className="flex flex-row justify-between w-[130px] mx-2">
                                <div className="flex flex-col justify-center items-center">
                                    <button
                                        className= {`${instaType == "Message" ? "border-solid border-2 border-[#2d6a4f] w-[43px] h-[43px]" : "w-[43px] h-[43px]"} rounded-full bg-gradient-to-r from-[#f0f0f0] to-[#e0e0e0] text-muted-foreground hover:bg-gradient-to-r hover:from-[#e0e0e0] hover:to-[#d0d0d0] transition-all duration-300 ease-out hover:scale-105 p-2`}
                                        onClick={() => {
                                            // setShareMode(_ => "Instagram")
                                            // setModal(true)
                                            setInstaType(_ => 'Message')
                                            }
                                        }
                                        >
                                        <TwitterIcon/>
                                    </button>
                                    DMs
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <button
                                        className={`${instaType == "Post" ? "border-solid border-2 border-[#2d6a4f] w-[43px] h-[43px]" : "w-[43px] h-[43px]"}  rounded-full bg-gradient-to-r from-[#f0f0f0] to-[#e0e0e0] text-muted-foreground hover:bg-gradient-to-r hover:from-[#e0e0e0] hover:to-[#d0d0d0] transition-all duration-300 ease-out hover:scale-105 p-2`}
                                        onClick={() => {
                                            // setShareMode(_ => "Instagram")
                                            // setModal(true)
                                            setInstaType(_ => "Post")
                                            }
                                        }
                                        >
                                        <TwitterIcon/>
                                    </button>
                                    Tweet
                                </div>
                            </div>
                        }
                    </div>
                    <div className="bg-[#e0e0e0] h-[2px] w-full my-1"/>
                    <div className="flex flex-end w-full">
                        <div className="w-full flex flex-end justify-end mx-2 my-1 p-2">
                            <button onClick={_ => setModal(_ => false)} className="w-[70px] rounded bg-gradient-to-r from-[#e0e0e0] to-[#e0e0e0] text-muted-foreground p-2">Close</button>
                            <button onClick={_ => setModal(_ => false)} className="w-[85px] rounded bg-gradient-to-r from-[#2d6a4f] to-[#2d6a4f] text-muted-foreground text-white p-2 mx-3 flex flex-row justify-between items-center ">
                                <Icon_3/>
                                Share
                            </button>
                        </div>
                    </div>

                </div>
            </Modal>

        </div>
    </div>

    )
}

export const ClipboardIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      </svg>
    )
  }
  
  
export const FacebookIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    )
  }
  
  
export const InstagramIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    )
  }
  
  
export const ShareIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <polyline points="16 6 12 2 8 6" />
        <line x1="12" x2="12" y1="2" y2="15" />
      </svg>
    )
  }
  
  
export const TwitterIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    )
  }