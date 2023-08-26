
const Image = ({ id, downloads, likes, views, pageURL, user, previewURL}) => {
    return (
         <div className="flex flex-col w-10/12 mx-auto shadow-2xl mb-4 " key={id}>
                 <img src={previewURL} alt={user} className=" h-40 md:h-40 rounded-t-md"/>
                    <div className="bg-white shadow-2xl pt-4 pl-4 rounded-b-md">
                         <h1 className="text-blue-400  mb-3">Photo by {user}</h1>
                         <p className="font-bold">Views: { views}</p>
                         <p className="font-bold">Downloads: { downloads}</p>
                         <p className="font-bold">Likes: {likes}</p>
                         <a className="py-4 hover:text-blue-200 cursor-pointer" rel="noreferrer" target="_blank" href={ pageURL} >view image </a>
                    </div>
         </div>
    )
}

export default Image