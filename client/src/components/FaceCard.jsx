export default function FaceCard({ image, race, emotion, gender, age }) {

    const display = () => {
        console.log(image);
    }
    return (
        <div className="flex flex-col items-center justify-center bg-blue-100 rounded-xl  border-2 lg:w-[320px] h-full">
            <div className="flex flex-col p-2">
                <div className="flex flex-row items-center justify-center w-48 ">
                    <img src={`data:image/png;base64,${image}`} className="rounded-xl" />
                </div>
                <div className="flex flex-row justify-between">
                    <h1 className="font-bold">Race:</h1>
                    <span className="font-semibold">{race}</span>
                </div>
                <div className="flex flex-row justify-between">
                    <h1 className="font-bold">Emotion:</h1>
                    <span className="font-semibold">{emotion}</span>
                </div>
                <div className="flex flex-row justify-between">
                    <h1 className="font-bold">Gender:</h1>
                    <span className="font-semibold">{gender}</span>
                </div>
                <div className="flex flex-row justify-between">
                    <h1 className="font-bold">Age:</h1>
                    <span className="font-semibold">{age}</span>
                </div>
                <button className="w-full p-1 my-2 font-bold text-white bg-blue-500 shadow-xl rounded-xl" onClick={() => display()}> Add to favourite</button>
                <button className="w-full p-1 my-2 font-bold text-white bg-red-500 shadow-xl rounded-xl">Delete from library</button>
            </div>
        </div>
    )
}
