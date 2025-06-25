export function CarCard({image, rating, name, status}) {



    return <div className=" w-64 border-2 border-b-black border-solid m-2 rounded-2xl hover:scale-105 transition-transform duration-300 overflow-hidden">
            <img className=" p-4" src={image} alt="машинка" />
            <h2 className=" p-4 text-lg font-semibold text-gray-800" >{name}</h2>
            <p className=" px-4 pb-2 text-gray-800">Статус: {status}</p>
            <div className=" px-4 pb-4 flex justify-between items-center">
                <span className=" font-bold ">
                    Рейтинг: {rating}
                </span>
            </div>
    </div>
}
