import React from "react";
import { useState } from "react";
import {BiPlus,BiX} from 'react-icons/bi';

const FaqsContent= ()=>{
    const [Show1, setShow1] = useState(false);
    const [Show2, setShow2] = useState(false);
    const [Show3, setShow3] = useState(false);
    const [Show4, setShow4] = useState(false);
    const [Show5, setShow5] = useState(false);
    const [Show6, setShow6] = useState(false);
    return(
        <div id="frequently-ask-questions">
            <div id="faq-btn-holder">
                <h1 id="faq-title">Frequently Asked Questions</h1>
                <button className="faq-btns" onClick={()=>setShow1(!Show1)}>What is Netflix? <span className="faq-icons">{!Show1?<BiPlus/>:<BiX/>}</span></button>
                {Show1 && ( 
                <div className="faq-answers">
                    <p className="faq-text">
                        Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                        <br/>
                        <br/>
                        You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                    </p>
                </div>)}
                <button className="faq-btns" onClick={()=>setShow2(!Show2)}>How much does Netflix cost? <span className="faq-icons">{!Show2?<BiPlus/>:<BiX/>}</span></button>
                {Show2 && ( 
                <div className="faq-answers">
                    <p className="faq-text">
                        Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₱149 to ₱549 a month. No extra costs, no contracts.
                    </p>
                </div>)}
                <button className="faq-btns" onClick={()=>setShow3(!Show3)}>Where can I watch?<span className="faq-icons">{!Show3?<BiPlus/>:<BiX/>}</span></button>
                {Show3 && ( 
                <div className="faq-answers">
                    <p className="faq-text">
                        Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                        <br/>
                        <br/>
                        You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                    </p>
                </div>)}
                <button className="faq-btns" onClick={()=>setShow4(!Show4)}>How do I cancel? <span className="faq-icons">{!Show4?<BiPlus/>:<BiX/>}</span></button>
                {Show4 && ( 
                <div className="faq-answers">
                    <p className="faq-text">
                        Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                    </p>
                </div>)}
                <button className="faq-btns" onClick={()=>setShow5(!Show5)}>What can I watch on Netflix? <span className="faq-icons">{!Show5?<BiPlus/>:<BiX/>}</span></button>
                {Show5 && ( 
                <div className="faq-answers">
                    <p className="faq-text">
                        Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                    </p>
                </div>)}
                <button className="faq-btns" onClick={()=>setShow6(!Show6)}>Is Netflix good for kids? <span className="faq-icons">{!Show6?<BiPlus/>:<BiX/>}</span></button>
                {Show6 && ( 
                <div className="faq-answers">
                    <p className="faq-text">
                        The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
                        <br/>
                        <br/>
                        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                    </p>
                </div>)}
            </div>
        </div>
    );
}

export default FaqsContent;