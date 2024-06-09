export default function Filter() {
    return (
        <div className="flex flex-row justify-center items-center w-full h-1/3">
            <div className="lg:max-w-screen-xl lg:min-w-[1024px]">
                <div className="flex flex-row justify-between w-full h-full">
                    <div className="flex flex-col w-1/3">
                        <h2 className="text-xl font-semibold">
                            Filter by race:
                        </h2>
                        <div className="flex flex-col flex-wrap p-2">
                            <div>
                                <input type="checkbox" value={"white"} placeholder="white" id="white-checkbox"/>
                                <label htmlFor="white-checkbox">White</label>
                            </div>
                            <div>
                                <input type="checkbox" value={"black"} placeholder="black" id="black-checkbox"/>
                                <label htmlFor="black-checkbox">Black</label>
                            </div>
                            <div>
                                <input type="checkbox" value={"asian"} placeholder="asian" id="asian-checkbox"/>
                                <label htmlFor="asian-checkbox">Asian</label>
                            </div>
                            <div>
                                <input type="checkbox" value={"middleeastern"} placeholder="middleeastern"
                                       id="midleeastern-checkbox"/>
                                <label htmlFor="asian-checkbox">Middle Eastern</label>
                            </div>
                            <div>
                                <input type="checkbox" value={"indian"} placeholder="indian" id="indian-checkbox"/>
                                <label htmlFor="asian-checkbox">Indian</label>
                            </div>
                            <div>
                                <input type="checkbox" value={"latino"} placeholder="latino" id="latino-checkbox"/>
                                <label htmlFor="asian-checkbox">Latino</label>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-1/3">
                        <h2 className="text-xl font-semibold">Filter by emotion:</h2>
                        <div>
                            <input type="checkbox" value={"happy"} placeholder="happy" id="happy-checkbox"/>
                            <label htmlFor="happy-checkbox">Happy</label>
                        </div>
                        <div>
                            <input type="checkbox" value={"sad"} placeholder="sad" id="sad-checkbox"/>
                            <label htmlFor="sad-checkbox">Sad</label>
                        </div>
                        <div>
                            <input type="checkbox" value={"suprise"} placeholder="suprise" id="suprise-checkbox"/>
                            <label htmlFor="suprise-checkbox">Suprised</label>
                        </div>
                        <div>
                            <input type="checkbox" value={"angry"} placeholder="angry" id="angry-checkbox"/>
                            <label htmlFor="suprise-checkbox">Angry</label>
                        </div>
                        <div>
                            <input type="checkbox" value={"fear"} placeholder="fear" id="fear-checkbox"/>
                            <label htmlFor="fear-checkbox">Feared</label>
                        </div>
                        <div>
                            <input type="checkbox" value={"neutral"} placeholder="neutral" id="neutral-checkbox"/>
                            <label htmlFor="Neutral-checkbox">Neutral</label>
                        </div>
                        <div>
                            <input type="checkbox" value={"disgust"} placeholder="disgust" id="disgust-checkbox"/>
                            <label htmlFor="disgust-checkbox">Disgusted</label>
                        </div>
                    </div>

                    <div className="flex flex-col w-1/3">
                        <h2 className="text-xl font-semibold">Filter by age and gender:</h2>
                        <div className="flex flex-row">
                            <input type="checkbox" value={"man"} placeholder="man" id="man-checkbox"/>
                            <label htmlFor="man-checkbox">Man</label>
                            <input type="checkbox" value={"woman"} placeholder="woman" id="woman-checkbox"/>
                            <label htmlFor="woman-checkbox">Woman</label>
                        </div>
                        <div className="flex flex-row gap-2">
                            <input type="text" placeholder="min age" id="min-age"
                                   className="w-12 border-2 border-emerald-800"/>
                            <input type="text" placeholder="max age" id="max-age"
                                   className="w-12 border-2 border-emerald-800"/>
                        </div>
                        <button className="text-white rounded bg-emerald-500">Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
