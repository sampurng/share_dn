"use client"

import React from "react";
import "../app/share.css"
import Icon_1  from "./icon_1";
import Modal from "react-modal"
import { ClipboardIcon, FacebookIcon, InstagramIcon, TwitterIcon } from "./Share_2";

// @refresh reset
export const Share = () => {
    const [showModal, setModal] = React.useState(false)
    const [selected, setSelected] = React.useState("Dashboard")

    return(
    <div className=" h-screen bg-white">
        <div className="flex items-center justify-center align-center h-screen">
        <button type="button" onClick={() => {
            setModal(_ => true)
            console.log("pressed")}} className="button-1">
            <div className="flex direction-row justify-between">
                <Icon_1 />
                <p className="mx-1">Share</p>
            </div>
        </button>
        </div>
        <Modal
                isOpen={showModal}
                contentLabel="Example Modal"
                className="h-screen flex items-center justify-center rounded-lg"
            >
                <div className="flex w-[620px] h-[450px] border-2 bg-white text-black flex-col rounded-lg">
                    <div className="flex flex-row justify-between items-center">
                            <div className="flex items-center mx-3 text-1">
                                <p>Share Content</p>
                            </div>
                            <div className="flex flex-end justify-end mx-2 my-2">
                                <button onClick={_ => {
                                    setSelected(_ => "")
                                    setModal(_ => false)}} className="button-1">X</button>
                            </div>
                    </div>
                <div className="bg-[#e0e0e0] h-[2px] w-full my-1"/>
                <div className="flex flex-row justify-between mx-3 my-1">
                    <button onClick={_ => setSelected(_ => "Dashboard")} className={`${selected == 'Dashboard' ? "bg-[#7d9af9]" : ""} text-2`}>Share Dashboard</button>
                    <button onClick={_ => setSelected(_ => "Chart")} className={`${selected == 'Chart' ? "bg-[#7d9af9]" : ""} text-2`}>Share Chart</button>
                    <button onClick={_ => setSelected(_ => "Business")} className={`${selected == 'Business' ? "bg-[#7d9af9]" : ""} text-2`}>Share Business</button>
                </div>
                <div className="bg-[#e0e0e0] h-[2px] w-full my-1"/>
                <div>
                    {
                        selected == "Dashboard" ? <Dashbaord /> : selected == "Chart" ? <Chart/> : selected == "Business" ? <Businesses/> :<div className="w-full h-[250px]"></div>
                    }
                </div>
                <div className="bg-[#e0e0e0] h-[2px] w-full my-1"/>
                <div className="flex flex-end w-full">
                        <div className="w-full flex flex-end justify-end mx-2 my-1 p-2">
                            <button onClick={_ => setModal(_ => false)} className="button-1">Close</button>
                            <button onClick={_ => setModal(_ => false)} className="button-1 ml-2"><FacebookIcon/></button>
                            <button onClick={_ => setModal(_ => false)} className="button-1 ml-2"><InstagramIcon/></button>
                            <button onClick={_ => setModal(_ => false)} className="button-1 ml-2"><TwitterIcon/></button>
                            <button onClick={_ => setModal(_ => false)} className="button-1 ml-4">
                                <ClipboardIcon/>
                            </button>
                        </div>
                    </div>
                </div>
        </Modal>

    </div>
    )
}

const Dashbaord = () => {
    return (
        <div className="w-full h-[250px]">
            <select id="cars" name="cars" className="w-[300px] border-2 rounded h-[45px] p-2 px-2 rounded border-black mx-8 my-4">
                <option value="volvo" className="text-slate-800">Select a Dashboard</option>
                <option value="volvo">Dashboard - Finance</option>
                <option value="saab">Dahsboard - Sales</option>
                <option value="fiat">Dashboard - HR</option>
                <option value="audi">Dashboard - Employee Performance</option>
            </select>
        </div>

    )
}

const Chart = () => {
    const [selected, setSelected] = React.useState("")
    return (
        <div className="w-full h-[250px] px-4">
            <div className="text-1">Recent Charts</div>
            <div className="flex flex-row w-full justify-between">
                <div className={`${selected == "Chart1" ? "bg-[#7d9af9]" : ""} text-2 w-[130px] h-[80px] my-1`} onClick={_ => setSelected(_ => "Chart1")}>
                        Chart 1
                </div>
                <div className={`${selected == "Chart2" ? "bg-[#7d9af9]" : ""} text-2 w-[130px] h-[80px] my-1`} onClick={_ => setSelected(_ => "Chart2")}>
                        Chart 2
                </div>
                <div className={`${selected == "Chart3" ? "bg-[#7d9af9]" : ""} text-2 w-[130px] h-[80px] my-1`} onClick={_ => setSelected(_ => "Chart3")}>
                        Chart 3
                </div>
                <div className={`${selected == "Chart4" ? "bg-[#7d9af9]" : ""} text-2 w-[130px] h-[80px] my-1`} onClick={_ => setSelected(_ => "Chart4")}>
                        Chart 4
                </div>
            </div>
            <div className="flex flex-row w-full justify-between py-2">
                <div className={`${selected == "Chart5" ? "bg-[#7d9af9]" : ""} text-2 w-[130px] h-[80px] my-1`} onClick={_ => setSelected(_ => "Chart5")}>
                        Chart 5
                </div>
                <div className={`${selected == "Chart6" ? "bg-[#7d9af9]" : ""} text-2 w-[130px] h-[80px] my-1`} onClick={_ => setSelected(_ => "Chart6")}>
                        Chart 6
                </div>
                <div className={`${selected == "Chart7" ? "bg-[#7d9af9]" : ""} text-2 w-[130px] h-[80px] my-1`} onClick={_ => setSelected(_ => "Chart7")}>
                        Chart 7
                </div>
                <div className={`${selected == "Chart8" ? "bg-[#7d9af9]" : ""} text-2 w-[130px] h-[80px] my-1`} onClick={_ => setSelected(_ => "Chart8")}>
                        Explore All Charts
                </div>
            </div>
        </div>

    )
}

const Businesses = () => {
    const [selected, setSelected] = React.useState("")
    return (
        <div className="w-full h-[250px] px-4">
            <div className="text-1">Businesses Available</div>
            <div className="flex flex-row w-full justify-between">
                <div className={`${selected == "Chart1" ? "bg-[#7d9af9]" : ""} text-2 w-[290px] h-[80px] my-1`} onClick={_ => setSelected(_ => "Chart1")}>
                        Business 1<br/>
                        Finances<br/>
                        Legal
                </div>
                <div className={`${selected == "Chart2" ? "bg-[#7d9af9]" : ""} text-2 w-[290px] h-[80px] my-1`} onClick={_ => setSelected(_ => "Chart2")}>
                        Business 2<br/>
                        Finances<br/>
                        Legal
                </div>
            </div>
            <div className="flex flex-row w-full justify-between">

                <div className={`${selected == "Chart3" ? "bg-[#7d9af9]" : ""} text-2 w-[290px] h-[80px] my-1`} onClick={_ => setSelected(_ => "Chart3")}>
                        Business 3<br/>
                        Finances<br/>
                        Legal
                </div>
                <div className={`${selected == "Chart4" ? "bg-[#7d9af9]" : ""} text-2 w-[290px] h-[80px] my-1`} onClick={_ => setSelected(_ => "Chart4")}>
                        Explore More Companies
                </div>
            </div>
        </div>
    )
}