export default function Filter() {
    return (
        <div className="w-full p-4">
            <h1 className="text-2xl font-bold">Search by:</h1>
            <div className="flex flex-row justify-between w-full">
                <div className="flex flex-col">
                    <div>
                        <input type="checkbox" value={"white"} placeholder="white" id="white-checkbox" />
                        <label htmlFor="white-checkbox">White</label>
                    </div>
                    <div>
                        <input type="checkbox" value={"black"} placeholder="black" id="black-checkbox" />
                        <label htmlFor="black-checkbox">Black</label>
                    </div>
                    <div>
                        <input type="checkbox" value={"blue"} placeholder="blue" id="asian-checkbox" />
                        <label htmlFor="asian-checkbox">Asian</label>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div>
                        <input type="checkbox" value={"happy"} placeholder="happy" id="happy-checkbox" />
                        <label htmlFor="happy-checkbox">Happy</label>
                    </div>
                    <div>
                        <input type="checkbox" value={"sad"} placeholder="sad" id="sad-checkbox" />
                        <label htmlFor="sad-checkbox">Sad</label>
                    </div>
                    <div>
                        <input type="checkbox" value={"shocked"} placeholder="shocked" id="shocked-checkbox" />
                        <label htmlFor="shocked-checkbox">Shocked</label>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <input type="checkbox" value={"man"} placeholder="man" id="man-checkbox" />
                        <label htmlFor="man-checkbox">Man</label>
                        <input type="checkbox" value={"woman"} placeholder="woman" id="woman-checkbox" />
                        <label htmlFor="woman-checkbox">Woman</label>
                    </div>
                    <div className="flex flex-row gap-2">
                        <input type="text" placeholder="min age" id="min-age" className="w-12 border-2 border-emerald-800" />
                        <input type="text" placeholder="max age" id="max-age" className="w-12 border-2 border-emerald-800" />
                    </div>
                    <button className="text-white rounded bg-emerald-500">Search</button>
                </div>
            </div>
        </div>
    )
}
